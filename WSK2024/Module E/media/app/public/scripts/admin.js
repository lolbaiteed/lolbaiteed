import { addToCache, navigate, fetchData, Page } from "./utils.js";

class AdminLoginPage extends Page {
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
        const response = await fetchData("POST", "/admin/login", {
          username: username.value,
          password: password.value
        }, "token");
        console.log(response)
        addToCache(response);
        navigate('/');
      })();
    }
  }
}

class AdminLogout extends Page {
  constructor() {
    super();
    console.log(window.cacheData.header)
    const container = document.createElement('div');
    this.load(container);

    (async () => {
      try {
        await fetchData("POST", "/admin/logout", undefined, undefined, window.cacheData.header)
        navigate("/")
      } catch (error) {
        console.error(error)
      }
    })();
  }
}

class AdminPage extends Page {
  constructor() {
    super();
    const container = document.createElement('div');
    const title = document.createElement('h1');

    (async () => {
      try {
        const res = await fetchData("POST", "/admin")
        console.log(res)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }
    })();
    container.appendChild(title);
    this.load(container);
    document.body.appendChild(container);
  }
}

window.initAdminPage = function () {
  if (window.location.href.split("/").includes("login")) {
    window.currentPage = new AdminLoginPage();
  } else if (window.location.href.split("/").includes("logout")) {
    window.currentPage = new AdminLogout();
  } else {
    window.currentPage = new AdminPage();
  }
}
