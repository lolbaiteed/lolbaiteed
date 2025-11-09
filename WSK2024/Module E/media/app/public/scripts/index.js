import { Page, addToCache, fetchData, navigate } from './utils.js'

//TODO: copmplete the design 
class HomePage extends Page {
  constructor() {
    super();

    (async () => {
      const response = await fetchData("GET", "/")
      const container = document.createElement('div');
      const title = document.createElement('h1');
      const list = document.createElement('div');

      const css = document.createElement('link');
      const tabTitle = document.createElement('title');
      title.innerText = "Test";
      tabTitle.innerText = `${title.innerText}`
      css.rel = 'stylesheet';
      css.href = '../css/adminLogin.css'

      response.data[0].forEach((element, index) => {
        const item = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = element.name;
        button.onclick = async () => {
          try {
            const resp = await fetchData("POST", `/poll/${response.data[1][index].id}`)
            console.log(resp.data)
            addToCache("questions", resp.data)
            navigate(`/poll/${response.data[1][index].id}?status=inProgress`)
          } catch (error) {
            console.log(error)
          }
        }
        button.style.background = "none";
        item.appendChild(button);
        list.appendChild(item);
      });
      container.append(title, list);
      this.load(container, css, tabTitle);
    })();
  }
}

window.currentPage = new HomePage;
