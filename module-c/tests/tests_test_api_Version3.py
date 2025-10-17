import pytest
import requests
import time
import random
import string

BASE_URL = "http://localhost:3000/api/v1"

def random_email():
    return "testuser_{}@example.com".format(''.join(random.choices(string.ascii_lowercase+string.digits, k=8)))

@pytest.fixture(scope="session")
def user1():
    email = random_email()
    password = "Password123!"
    name = "Test User 1"
    data = {"email": email, "password": password, "name": name}
    resp = requests.post(f"{BASE_URL}/users/register", json=data)
    assert resp.status_code == 201
    user = resp.json()["user"]
    user["password"] = password
    return user

@pytest.fixture(scope="session")
def user2():
    email = random_email()
    password = "Password456!"
    name = "Test User 2"
    data = {"email": email, "password": password, "name": name}
    resp = requests.post(f"{BASE_URL}/users/register", json=data)
    assert resp.status_code == 201
    user = resp.json()["user"]
    user["password"] = password
    return user

@pytest.fixture(scope="session")
def token1(user1):
    resp = requests.post(f"{BASE_URL}/users/login", json={"email": user1["email"], "password": user1["password"]})
    assert resp.status_code == 200
    return resp.json()["token"]

@pytest.fixture(scope="session")
def token2(user2):
    resp = requests.post(f"{BASE_URL}/users/login", json={"email": user2["email"], "password": user2["password"]})
    assert resp.status_code == 200
    return resp.json()["token"]

def test_register_duplicate(user1):
    # Try registering same email
    resp = requests.post(f"{BASE_URL}/users/register", json={
        "email": user1["email"], "password": user1["password"], "name": "Copy"
    })
    assert resp.status_code == 400
    assert resp.json()["message"] == "Failed to register user"

def test_login_success(user1):
    resp = requests.post(f"{BASE_URL}/users/login", json={"email": user1["email"], "password": user1["password"]})
    assert resp.status_code == 200
    assert "token" in resp.json()

def test_login_wrong_password(user1):
    resp = requests.post(f"{BASE_URL}/users/login", json={"email": user1["email"], "password": "wrongpassword"})
    assert resp.status_code == 401
    assert resp.json()["message"] == "Invalid email or password"

def test_logout_invalid_token():
    resp = requests.post(f"{BASE_URL}/users/logout", headers={"Authorization": "Bearer deadbeef"})
    assert resp.status_code == 401
    assert resp.json()["message"] == "Invalid or expired token"

def test_me(token1, user1):
    resp = requests.get(f"{BASE_URL}/users/me", headers={"Authorization": f"Bearer {token1}"})
    print(resp.status_code, resp.text)
    assert resp.status_code == 200
    data = resp.json()
    assert data["email"] == user1["email"]
    assert "credits" in data

def test_me_invalid_token():
    resp = requests.get(f"{BASE_URL}/users/me", headers={"Authorization": "Bearer deadbeef"})
    assert resp.status_code == 401
    assert resp.json()["message"] == "Invalid or expired token"

def test_add_credits_success(token1):
    resp = requests.post(f"{BASE_URL}/users/me/credits", json={"amount": 50}, headers={"Authorization": f"Bearer {token1}"})
    assert resp.status_code == 200
    assert resp.json()["message"] == "Credits added successfully"
    assert isinstance(resp.json()["credits"], int)

def test_add_credits_invalid(token1):
    resp = requests.post(f"{BASE_URL}/users/me/credits", json={"amount": -100}, headers={"Authorization": f"Bearer {token1}"})
    assert resp.status_code == 400
    assert resp.json()["message"] == "Invalid amount"

def test_get_machines():
    resp = requests.get(f"{BASE_URL}/machines")
    data = resp.json()
    print(data, list)
    assert resp.status_code == 200
    assert isinstance(resp.json(), list)
    assert len(resp.json()) > 0

def test_get_machine_by_id(token1):
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    resp = requests.get(f"{BASE_URL}/machines/{machine_id}", headers={"Authorization": f"Bearer {token1}"})
    assert resp.status_code == 200
    data = resp.json()
    assert data["id"] == machine_id
    assert "availablePrograms" in data
    assert "status" in data
    assert "myCycle" in data

def test_start_machine_success(token1):
    # Top up enough credits
    requests.post(f"{BASE_URL}/users/me/credits", json={"amount": 50}, headers={"Authorization": f"Bearer {token1}"})
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    machine_info = requests.get(f"{BASE_URL}/machines/{machine_id}", headers={"Authorization": f"Bearer {token1}"}).json()
    program = machine_info["availablePrograms"][0]
    params = {
        "name": program["name"],
        "parameters": {
            "spinSpeed": program["spinSpeed"][0],
            "temperature": program["temperature"][0]
        }
    }
    resp = requests.post(f"{BASE_URL}/machines/{machine_id}/start", json=params, headers={"Authorization": f"Bearer {token1}"})
    # Success OR busy/error
    assert resp.status_code in [200, 400, 409]
    if resp.status_code == 200:
        out = resp.json()
        assert out["message"] == "Machine started successfully"
        assert out["parameters"]["duration"] == program["duration"]
        
def test_start_machine_invalid_params(token1):
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    resp = requests.post(f"{BASE_URL}/machines/{machine_id}/start", json={
        "name": "Nonexistent",
        "parameters": {"spinSpeed": 9999, "temperature": 9999}
    }, headers={"Authorization": f"Bearer {token1}"})
    assert resp.status_code == 400
    assert resp.json()["message"] == "Invalid program parameters"

def test_start_machine_insufficient_credits(token2):
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    machine_info = requests.get(f"{BASE_URL}/machines/{machine_id}", headers={"Authorization": f"Bearer {token2}"}).json()
    program = machine_info["availablePrograms"][0]
    resp = requests.post(f"{BASE_URL}/machines/{machine_id}/start", json={
        "name": program["name"],
        "parameters": {
            "spinSpeed": program["spinSpeed"][0],
            "temperature": program["temperature"][0]
        }
    }, headers={"Authorization": f"Bearer {token2}"})
    assert resp.status_code == 409 or resp.status_code == 400

def test_pause_resume_stop_cycle(token1, token2):
    # Try to start first
    requests.post(f"{BASE_URL}/users/me/credits", json={"amount": 50}, headers={"Authorization": f"Bearer {token1}"})
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    machine_info = requests.get(f"{BASE_URL}/machines/{machine_id}", headers={"Authorization": f"Bearer {token1}"}).json()
    program = machine_info["availablePrograms"][0]
    params = {
        "name": program["name"],
        "parameters": {
            "spinSpeed": program["spinSpeed"][0],
            "temperature": program["temperature"][0]
        }
    }
    resp = requests.post(f"{BASE_URL}/machines/{machine_id}/start", json=params, headers={"Authorization": f"Bearer {token1}"})
    # If started, try pause/resume/stop as correct and incorrect user
    if resp.status_code == 200:
        # Pause
        r_pause = requests.patch(f"{BASE_URL}/machines/{machine_id}/pause", headers={"Authorization": f"Bearer {token1}"})
        assert r_pause.status_code in [200, 400, 403]
        # Pause as wrong user
        r_pause_wrong = requests.patch(f"{BASE_URL}/machines/{machine_id}/pause", headers={"Authorization": f"Bearer {token2}"})
        assert r_pause_wrong.status_code == 403
        # Resume
        r_resume = requests.patch(f"{BASE_URL}/machines/{machine_id}/resume", headers={"Authorization": f"Bearer {token1}"})
        assert r_resume.status_code in [200, 400, 403]
        # Resume as wrong user
        r_resume_wrong = requests.patch(f"{BASE_URL}/machines/{machine_id}/resume", headers={"Authorization": f"Bearer {token2}"})
        assert r_resume_wrong.status_code == 403
        # Stop
        r_stop = requests.patch(f"{BASE_URL}/machines/{machine_id}/stop", headers={"Authorization": f"Bearer {token1}"})
        assert r_stop.status_code in [200, 400, 403]
        # Stop as wrong user
        r_stop_wrong = requests.patch(f"{BASE_URL}/machines/{machine_id}/stop", headers={"Authorization": f"Bearer {token2}"})
        assert r_stop_wrong.status_code == 403

def test_machine_protected_requires_token():
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    resp = requests.get(f"{BASE_URL}/machines/{machine_id}")
    assert resp.status_code == 401

def test_machine_action_requires_token():
    machines = requests.get(f"{BASE_URL}/machines").json()
    machine_id = machines[0]["id"]
    resp = requests.post(f"{BASE_URL}/machines/{machine_id}/start", json={})
    assert resp.status_code == 401
    resp2 = requests.patch(f"{BASE_URL}/machines/{machine_id}/stop")
    assert resp2.status_code == 401
    resp3 = requests.patch(f"{BASE_URL}/machines/{machine_id}/pause")
    assert resp3.status_code == 401
    resp4 = requests.patch(f"{BASE_URL}/machines/{machine_id}/resume")
    assert resp4.status_code == 401

def test_logout(token1):
    resp = requests.post(f"{BASE_URL}/users/logout", headers={"Authorization": f"Bearer {token1}"})
    assert resp.status_code == 200
    assert resp.json()["message"] == "Logout successful"

# Optionally add more edge cases as your logic evolves!
