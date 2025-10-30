import { Page, fetchData, navigate } from './utils.js'


class HomePage extends Page {
  constructor() {
    super();

    (async () => {
      const response = await fetchData("GET", "/")
      const container = document.createElement('div');
      const title = document.createElement('h1');
      const list = document.createElement('div');
      title.innerText = "Test";
      response[0].forEach(element => {
        const item = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = element.name;
        button.onclick = () => navigate("/admin");
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

