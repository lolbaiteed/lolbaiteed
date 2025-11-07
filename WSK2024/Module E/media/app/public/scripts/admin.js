import { addToCache, navigate, fetchData, Page, findInCache, deleteFromCache, cacheError, fetchError } from "./utils.js";

//TODO: complete the design

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
        const dropdown = document.createElement('div');
        dropdown.classList.add("dropdown");


        const dropdownContent = document.createElement("div")
        dropdownContent.classList.add("dropdownContent");

        const button = document.createElement('button');
        button.classList.add("dropbtn")
        button.onclick = () => {
          dropdownContent.classList.toggle("show");
        }
        button.innerText = element.name;

        const deleteItem = document.createElement("button");
        deleteItem.onclick = () => {
          navigate('/')
        }
        deleteItem.addEventListener('mouseenter', () => {
          deleteItem.style.backgroundColor = "#f5275e";
        })
        deleteItem.addEventListener('mouseleave', () => {
          deleteItem.style.backgroundColor = "";
        })
        deleteItem.innerText = "Delete"

        const editItem = document.createElement("button");
        editItem.onclick = () => {
          navigate('/')
        }
        editItem.addEventListener('mouseenter', () => {
          editItem.style.backgroundColor = "#f5be27";
        })
        editItem.addEventListener('mouseleave', () => {
          editItem.style.backgroundColor = "";
        })
        editItem.innerText = "Edit"

        const addItem = document.createElement("button");
        addItem.onclick = () => {
          navigate('/')
        }
        addItem.addEventListener('mouseenter', () => {
          addItem.style.backgroundColor = "#27f5be";
        })
        addItem.addEventListener('mouseleave', () => {
          addItem.style.backgroundColor = "";
        })
        addItem.innerText = "Add"

        dropdownContent.append(deleteItem, editItem, addItem)

        dropdown.append(button, dropdownContent)
        wrapper.appendChild(dropdown)
        console.log(element.name)
      });
      container.appendChild(wrapper)

      const css = document.createElement('link');
      const tabTitle = document.createElement('title');
      tabTitle.innerText = `${title.innerText}`
      css.rel = 'stylesheet';
      css.href = '../css/adminPanel.css'
      document.head.append(tabTitle, css)

      window.onclick = (event) => {
        if (!event.target.matches(".dropbtn")) {
          let dropdowns = document.getElementsByClassName("dropdownContent");
          for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show")
            }
          }
        }
      }

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

//TODO: complete all fetch chains (maybe move it to backend)
class AdminCreate extends Page {
  async onInit() {
    try {
      const container = document.createElement('div');
      const testInput = document.createElement('input');
      const sendButton = document.createElement('button');
      testInput.type = 'input';

      container.append(testInput, sendButton)
      sendButton.onclick = async () => {

        const topicsRes = await fetchData("POST", "/admin/topics/create", { name: `${testInput.value}` }, "X-TopicId")
        if (topicsRes.data.message === "Bad request")
          throw new fetchError("topicsRes receive status code 400 (bad request)")

        const pollsRes = await fetchData("POST", "/admin/polls/create", undefined, undefined, { "X-TopicId": topicsRes.header })
        if (pollsRes.data.message === "Bad request")
          throw new fetchError("pollsRes receive status code 400 (bad request)")

      }
      this.load(container)
    } catch (error) {

    }
  }

  constructor() {
    super();
    (async () => {
      await this.ready
    })()
  }
}

window.initAdminPage = function () {
  const path = window.location.href.split("/")
  if (path.includes("login")) {
    window.currentPage = new AdminLoginPage();
  } else if (path.includes("logout")) {
    window.currentPage = new AdminLogout();
  } else if (path.includes("topics") && path.includes("create")) {
    window.currentPage = new AdminCreate();
  } else {
    window.currentPage = new AdminPage();
  }
}
