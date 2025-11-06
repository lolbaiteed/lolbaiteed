import { addToCache, navigate, fetchData, Page, findInCache, deleteFromCache, cacheError, fetchError } from "./utils.js";

class AdminLoginPage extends Page {
  constructor() {
    super();

    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.innerText = "Admin";
    const username = document.createElement('input');
    const password = document.createElement('input');
    const submit = document.createElement('button');
    submit.innerText = "Login"
    const css = document.createElement('link');
    const tabTitle = document.createElement('title');
    tabTitle.innerText = `${title.innerText}`
    css.rel = 'stylesheet';
    css.href = '../css/adminLogin.css'
    document.head.append(tabTitle, css)

    username.placeholder = "Enter a username";
    password.placeholder = "Enter a password";

    container.append(title, username, password, submit);
    this.load(container);

    submit.onclick = async () => {
      const response = await fetchData("POST", "/admin/login", {
        username: username.value,
        password: password.value
      }, "Authorization");

      if (response === undefined) {
        return;
      }

      if (response?.header) {
        addToCache("token", response.header)
      } else {
        addToCache(response);
      }
      navigate('/admin')
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
        await fetchData("POST", "/admin/logout", undefined, undefined, { "Authorization": headerFromCache });
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
      const res = await fetchData("POST", "/admin", undefined, "User", { "Authorization": headerFromCache })

      const container = document.createElement('div')
      container.classList.add("container")

      const navbar = document.createElement('div')
      navbar.classList.add("navbar")

      const logoutButton = document.createElement('button');
      logoutButton.innerText = "Logout"
      logoutButton.onclick = () => {
        navigate('/admin/logout')
      }

      const user = document.createElement('p');
      user.innerText = res.data[1][0].username

      const userAction = document.createElement("div");
      userAction.classList.add("userAction")
      userAction.append(user, logoutButton)

      const title = document.createElement('p')
      title.innerHTML = "Admin panel"
      title.classList.add("title")

      console.log(res)

      navbar.append(title, userAction)
      container.append(navbar);

      const wrapper = document.createElement('div');
      wrapper.classList.add("wrapper")
      res.data[0].forEach(element => {
        const button = document.createElement('button');
        button.innerText = element.name;
        wrapper.appendChild(button)
        console.log(element.name)
      });
      container.appendChild(wrapper)

      const css = document.createElement('link');
      const tabTitle = document.createElement('title');
      tabTitle.innerText = `${title.innerText}`
      css.rel = 'stylesheet';
      css.href = '../css/adminPanel.css'
      document.head.append(tabTitle, css)

      this.load(container);
    } catch (error) {
      if (error instanceof cacheError) {
        navigate("/admin/login")
      } else if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  constructor() {
    super();
    (async () => {
      await this.ready
      if (this.ready === true) {
        console.log(window.location.href)
      }
    })()
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
