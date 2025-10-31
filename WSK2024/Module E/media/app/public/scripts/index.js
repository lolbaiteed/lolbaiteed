import { Page, addToCache, fetchData, navigate } from './utils.js'


class HomePage extends Page {
  constructor() {
    super();

    (async () => {
      const response = await fetchData("GET", "/")
      const container = document.createElement('div');
      const title = document.createElement('h1');
      const list = document.createElement('div');
      title.innerText = "Test";
      response[0].forEach((element, index) => {
        const item = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = element.name;
        button.onclick = async () => {
            try {
              const resp = await fetchData("POST", `/${response[1][index].id}`)
              addToCache(resp)
              navigate("/poll")
            } catch (error) {
              console.log(error)              
            }
          } 
        button.style.background = "none";
        item.appendChild(button);
        list.appendChild(item);
      });
      container.append(title, list);
      this.load(container);
    })();
  }
}

window.currentPage = new HomePage;

