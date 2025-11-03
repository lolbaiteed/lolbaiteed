import { Page, addToCache, fetchData, navigate } from './utils.js'


class HomePage extends Page {
  constructor() {
    super();

    (async () => {
      const response = await fetchData("GET", "/")
      console.log(response.header)
      const container = document.createElement('div');
      const title = document.createElement('h1');
      const list = document.createElement('div');
      title.innerText = "Test";
      response.data[0].forEach((element, index) => {
        const item = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = element.name;
        button.onclick = async () => {
          try {
            const resp = await fetchData("POST", `/${response.data[1][index].id}`)
            console.log(resp.data)
            addToCache(resp.data)
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
      this.load(container);
    })();
  }
}

window.currentPage = new HomePage;
