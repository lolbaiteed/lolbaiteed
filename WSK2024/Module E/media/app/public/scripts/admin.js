const container = document.createElement('div');
const title = document.createElement('h1');
const username = document.createElement('input');
const password = document.createElement('input');
const submit = document.createElement('button');

username.placeholder = "Enter a username";
password.placeholder = "Enter a password";

title.innerText = "Admin";
container.appendChild(title);
container.appendChild(username);
container.appendChild(password);
container.appendChild(submit);
document.body.appendChild(container);

async function fetchData(method, url, data) {
  const base = "http://localhost:3000";
  try {
    const res = await fetch(base + url, {
      headers: {"Content-Type": "application/json"},
      method: method,
      body: data
    });
    if (!res.ok) {
      throw new Error(res.body)
    }
    return res.json()
  } catch (error) {
    if (error instanceof Error) {
      title.innerText = error.message;
    }
  }
}

submit.onclick = () => {
  (async () => {
    const response = await fetchData("POST", "/api/admin", JSON.stringify({
      username: username.value.toString(),
      password: password.value.toString()
    }));
    console.log(response);
    globalThis.dataToTransfer.push(response);
    window.location.assign("http://localhost:3000")
  })();
}
