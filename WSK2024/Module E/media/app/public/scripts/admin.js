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
    css.href = '/css/adminLogin.css'

    username.placeholder = "Enter a username";
    password.placeholder = "Enter a password";

    container.append(title, username, password, submit);
    this.load(container, css, tabTitle);

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

  async onInit() {
    try {
      const headerFromCache = findInCache("token")
      await fetchData("POST", "/admin/logout", undefined, undefined, { "Authorization": headerFromCache });
      deleteFromCache("token")
      navigate("/");
    } catch (error) {
      if (error instanceof fetchError) {
        navigate("/")
      } else if (error instanceof cacheError) {
        navigate("/")
      }
    }
  }

  constructor() {
    super();
    const container = document.createElement('div');
    this.load(container);
    (async () => {
      await this.ready
    })();
  }
}

class AdminPage extends Page {
  async onInit() {
    document.body.classList.add("dashboard-page")
    try {
      const headerFromCache = findInCache("token")
      const res = await fetchData("POST", "/admin", undefined, "User", { "Authorization": headerFromCache })
      console.log(res.data[0][0].id)

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
          navigate(`/admin/topic/${element.id}/edit`)
        }
        editItem.addEventListener('mouseenter', () => {
          editItem.style.backgroundColor = "#f5be27";
        })
        editItem.addEventListener('mouseleave', () => {
          editItem.style.backgroundColor = "";
        })
        editItem.innerText = "Edit"

        dropdownContent.append(deleteItem, editItem)

        dropdown.append(button, dropdownContent)
        wrapper.appendChild(dropdown)
      });

      const createNewTopic = document.createElement('button')
      createNewTopic.innerText = "Add new topic"
      createNewTopic.classList.add("addNew")
      createNewTopic.onclick = () => {
        navigate("/admin/topics/create")
      }

      wrapper.appendChild(createNewTopic)

      container.appendChild(wrapper)

      const css = document.createElement('link');
      const tabTitle = document.createElement('title');
      tabTitle.innerText = `${title.innerText}`
      css.rel = 'stylesheet';
      css.href = '/css/adminPanel.css'

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

      this.load(container, css, tabTitle);
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
    })()
  }
}

class AdminCreate extends Page {
  async onInit() {
    document.body.classList.add("create-page")
    try {
      const headerFromCache = findInCache("token")
      const container = document.createElement('div');

      const navbar = document.createElement('div');
      navbar.classList.add("navbar")

      const testInput = document.createElement('input');
      const sendButton = document.createElement('button');

      testInput.type = 'input';

      container.append(testInput, sendButton)
      sendButton.onclick = async () => {

        const topicsRes = await fetchData("POST", "/admin/topics/create", { name: `${testInput.value}` }, "X-TopicId", { "Authorization": headerFromCache })
        if (topicsRes.data.message === "Bad request")
          throw new fetchError("topicsRes receive status code 400 (bad request)")

        const pollsRes = await fetchData("POST", "/admin/polls/create", undefined, "X-PollId", { "X-TopicId": topicsRes.header, "Authorization": headerFromCache })
        if (pollsRes.data.message === "Bad request")
          throw new fetchError("pollsRes receive status code 400 (bad request)")

        const questionsRes = await fetchData("POST", "/admin/questions/create", undefined, "X-QuestionId", { "X-PollId": pollsRes.header, "Authorization": headerFromCache })
        if (questionsRes.data.message === "Bad request")
          throw new fetchError("questionsRes receive status code 400 (bad request)")

        const answersRes = await fetchData("POST", "/admin/answers/create", undefined, undefined, { "X-QuestionId": questionsRes.header })
        if (answersRes.data.message === "Bad request")
          throw new fetchError("answersRes receive status code 400 (bad request)")
      }

      const css = document.createElement('link');
      const tabTitle = document.createElement('title');
      tabTitle.innerText = `${title.innerText}`
      css.rel = 'stylesheet';
      css.href = '/css/adminPanel.css'

      this.load(container, css, tabTitle)
    } catch (error) {
      if (error instanceof cacheError) {
        navigate('/admin/login')
      } else if (error instanceof fetchError) {
        console.log(error.message)
      }
    }
  }

  constructor() {
    super();
    (async () => {
      await this.ready
    })()
  }
}

class AdminEdit extends Page {
  async onInit() {
    const headerFromCache = findInCache("token")
    const res = await fetchData("POST", "/admin", undefined, "User", { "Authorization": headerFromCache })

    document.body.classList.add("edit-page")
    const pollId = window.location.href.split("/")[5]

    const container = document.createElement('div');
    container.classList.add("container");

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

    navbar.append(title, userAction)
    container.append(navbar);

    const wrapper = document.createElement('div');
    wrapper.classList.add("wrapper")

    try {
      const pollData = await fetchData("POST", `/poll/${pollId}`)

      for (let i = 0; i < pollData.data.length; i++) {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add("questionBlock");

        const answerBlock = document.createElement('div');
        answerBlock.classList.add("answerBlock");
        const answersLeft = document.createElement('div');
        answersLeft.classList.add("answersLeft");

        const answersRight = document.createElement('div');
        answersRight.classList.add("answersRight");

        const question = document.createElement("input");
        question.type = "input";
        question.classList.add("question");
        question.value = pollData.data[i].question;

        questionBlock.append(question);
        pollData.data[i].answers.forEach((element, index) => {

          const answer = document.createElement('input');

          answer.type = "input";
          answer.value = element;

          if (index % 2 === 0) {
            answersLeft.append(answer);
          } else {
            answersRight.append(answer);
          }
        })
        answerBlock.append(answersLeft, answersRight);
        questionBlock.append(answerBlock);
        wrapper.append(questionBlock)
      }

      container.append(wrapper)

      const css = document.createElement('link');
      // const tabTitle = document.createElement('title');
      // tabTitle.innerText = `${title.innerText}`
      css.rel = 'stylesheet';
      css.href = "/css/adminPanel.css"

      this.load(container, css)
    } catch (error) {
      if (error instanceof fetchError) {
        console.log(error.message)
      }
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
  } else if (path.includes("topic") && path.includes("edit")) {
    window.currentPage = new AdminEdit();
  } else {
    window.currentPage = new AdminPage();
  }
}
