Legend:
 - X: Done
 - ?: Needed to fix(minor)
 - F: Needed to fix(major)

[X] POST /users/register {

  **Request Body:**

  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }
  ```

  **Response (on success):** 201 Created

  ```json
  {
    "message": "User created successfully",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe",
      "credits": 0
    }
  }
  ```

  **Response (if email is already taken):** 400 Bad Request

  ```json
  {
    "message": "Failed to register user"
  }
  ```
}

[X] POST /users/login {

  **Request Body:**

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Login successful",
    "user": {
      "id": 3,
      "name": "Zolee Helmet",
      "email": "zolee@itmp.hu",
      "credits": 170
    },
    "token": "fe86c16e11e285e5eadab944f5a54536fc2299667b704d247595c2c76a8fa466"
  }
  ```

  **Response (on failure):** 401 Unauthorized

  ```json
  {
    "message": "Invalid email or password"
  }
  ```
}

[X] POST /users/logout {

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Logout successful"
  }
  ```
}

[X] GET /users/me {

  **Response:** 200 OK

  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "credits": 100
  }
  ```
}

[X] POST /users/me/credits {

  **Request Body:**

  ```json
  {
    "amount": 100
  }
  ```

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Credits added successfully",
    "credits": 110
  }
  ```

  **Response (on invalid amount):** 400 Bad Request

  ```json
  {
    "message": "Invalid amount"
  }
  ```
}

[X] GET /machines {

  **Response:** 200 OK

  ```json
  [
    {
      "id": "M001",
      "name": "Sudsy WM-0001",
      "type": "Washing Machine",
      "brand": "Samsung",
      "model": "WF10000",
      "locationX": 31,
      "locationY": 31
    }
  ]
  ```
}

[X] GET /machines/:id {

  **Response:**

  ```json
  {
    "id": "M001",
    "name": "Sudsy WM-0001",
    "type": "Washing Machine",
    "brand": "Samsung",
    "model": "WF10000",
    "availablePrograms": [
      {
        "name": "Normal",
        "spinSpeed": [800, 1200, 1600],
        "temperature": [30, 40, 50],
        "duration": 3600
      }
    ],
    "locationX": 31,
    "locationY": 31,
    "status": {
      "operationalStatus": "operational",
      "currentProgram": {
        "name": "Normal",
        "temperature": 40,
        "spinSpeed": 1200,
        "duration": 3600,
        "startTime": "2025-04-27T19:23:27.819Z",
        "remainingTime": 3254
      }
    },
    "myCycle": "true"
  }
  ```
}

[X] POST /machines/:id/start {

  The backend calculates the credit cost as follows:

  ```
  cost = ceil(duration[s] / 3600) × 10 + 5
  ```

  **Request Body:**

  ```json
  {
    "name": "Normal",
    "parameters": {
      "spinSpeed": 1200,
      "temperature": 40
    }
  }
  ```

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Machine started successfully",
    "machineId": "M002",
    "programName": "Normal",
    "parameters": {
      "spinSpeed": 1200,
      "temperature": 40,
      "duration": 3600
    },
    "creditsDeducted": 15,
    "remainingCredits": 170
  }
  ```

  **Response (if machine is not in idle):** 400 Bad Request

  ```json
  {
    "message": "Operation not allowed in current state"
  }
  ```

  **Response (if invalid program name or parameters):** 400 Bad Request

  ```json
  {
    "message": "Invalid program parameters"
  }
  ```

  **Response (if insufficient credits):** 409 Conflict

  ```json
  {
    "message": "Insufficient credits"
  }
  ```
}

[X] PATCH /machines/:id/stop {

  If the program stops successfully, create a log entry in the `MachineUsage` table, where the `action` field is set to `stop`, `parameters` field is set to empty JSON object.

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Machine stopped successfully"
  }
  ```

  **Response (if machine is not in operational or paused):** 400 Bad Request

  ```json
  {
    "message": "Operation not allowed in current state"
  }
  ```

  **Response (if not the authetnicated user started the program):** 403 Forbidden

  ```json
  {
    "message": "You are not authorized to stop this machine"
  }
  ```
}

[X] PATCH /machines/:id/pause {

  If the program pauses successfully, create a log entry in the `MachineUsage` table, where the `action` field is set to `pause`.

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Machine paused successfully"
  }
  ```

  **Response (if machine is not in operational):** 400 Bad Request

  ```json
  {
    "message": "Operation not allowed in current state"
  }
  ```

  **\*Response (if the authetnicated user did not start the program):** 403 Forbidden

  ```json
  {
    "message": "You are not authorized to pause this machine"
  }
  ```
}

[X] PATCH /machines/:id/resume {

  If the program resumes successfully, create a log entry in the `MachineUsage` table, where the `action` field is set to `resume`.

  **Response (on success):** 200 OK

  ```json
  {
    "message": "Machine resumed successfully"
  }
  ```

  **Response (if machine is not in paused):** 400 Bad Request

  ```json
  {
    "message": "Operation not allowed in current state"
  }
  ```

  **Response (if the authetnicated user did not start the program):** 403 Forbidden

  ```json
  {
    "message": "You are not authorized to resume this machine"
  }
  ```
}
