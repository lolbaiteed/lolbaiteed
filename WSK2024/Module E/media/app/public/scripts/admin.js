import { addToCache, navigate, fetchData, Page } from "./utils.js";

class AdminPage extends Page {
  constructor() {
    super();

    const container = document.createElement('div');
    const title = document.createElement('h1');
    const username = document.createElement('input');
    const password = document.createElement('input');
    const submit = document.createElement('button');

    username.placeholder = "Enter a username";
    password.placeholder = "Enter a password";

    title.innerText = "Admin";
    container.append(title, username, password, submit);
    this.load(container);

    submit.onclick = () => {
      (async () => {
        const response = await fetchData("POST", "/api/admin", JSON.stringify({
          username: username.value,
          password: password.value
        }));
        addToCache(response);
        navigate('/');
      })();
    }
  }
}



window.currentPage = new AdminPage();
