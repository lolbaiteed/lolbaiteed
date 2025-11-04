import { addToCache, navigate, fetchData, Page, findInCache, deleteFromCache, cacheError, fetchError } from "./utils.js";


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

    submit.onclick = async () => {
      const response = await fetchData("POST", "/admin", {
        username: username.value,
        password: password.value
      }, "Token");

      if (response === undefined) {
        return;
      }

      if (response?.header) {
        addToCache("token", `Bearer ${response.header}`)
        navigate('/admin');
      } else {
        addToCache(response);
      }
    }
  }
}

class AdminLogout extends Page {
  constructor() {
    super();

    const container = document.createElement('div');
    this.load(container);

    (async () => {
      try {
        const headerFromCache = findInCache("token")
        console.log(headerFromCache)
        await fetchData("POST", "/admin/logout", undefined, undefined, headerFromCache);
        deleteFromCache("token")
        navigate("/");
      } catch (error) {
        if (error instanceof fetchError) {
          console.error(error.message)
        }
      }
    })();
  }
}

class AdminPage extends Page {
  async onInit() {
    try {
      const headerFromCache = findInCache("token")
      res = await fetchData("POST", "/admin", undefined, undefined, headerFromCache)

      container.append(title, test);
      this.load(container);
    } catch (error) {
      if (error instanceof cacheError) {
        if (error.message === 'cache is empty') {
          navigate("/admin/login")
        }
      } else if (error instanceof Error) {
        console.log(error.message);
      }
    }
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
