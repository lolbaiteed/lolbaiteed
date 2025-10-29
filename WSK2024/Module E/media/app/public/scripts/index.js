import { Page, fetchData, navigate } from './cache.js'


class HomePage extends Page {
  constructor() {
    super();

    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.innerText = "Test";
    container.appendChild(title);
    this.load(container);
    console.log(window.cacheData)
  }
}

window.currentPage = new HomePage;

