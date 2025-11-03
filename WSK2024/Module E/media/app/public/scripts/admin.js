import { addToCache, navigate, fetchData, Page } from "./utils.js";

if (window.location.href.split("/").includes("login")) {
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
          const response = await fetchData("POST", "/admin", {
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

  window.currentPage = new AdminLoginPage();
} else if (window.location.href.split("/").includes("logout")) {
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

  window.currentPage = new AdminLogout();
} else {
  class AdminPage extends Page {
    constructor() {
      super();

      const container = document.createElement('div');
      const title = document.createElement('h1');

      title.innerText = "Admin Panel";
      container.appendChild(title);
      this.load(container);
      document.body.appendChild(container);
    }
  }

  window.currentPage = new AdminPage();
}
