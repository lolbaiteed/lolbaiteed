import { Page, fetchData, navigate } from './utils.js'


class HomePage extends Page {
  constructor() {
    super();

    (async () => {
      const response = await fetchData("GET", "/")
      const container = document.createElement('div');
      const title = document.createElement('h1');
      const list = document.createElement('div');
      const shortLinks = [];
      console.log(response)
      for (let i = 0; i < response[1].length; i++) {
        (async () => {
          shortLinks.push(await fetchData("POST", `/api/${response[1][i].id}`));
        })
      }
      console.log(shortLinks);
      title.innerText = "Test";
      response[0].forEach(element => {
        const item = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = element.name;
        button.onclick = () => navigate(`/api/${response[1][0].id}`);
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

