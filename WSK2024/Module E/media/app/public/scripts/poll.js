import { fetchData, setStatus, Page, findInCache, deleteFromCache } from "./utils.js";

const data = findInCache("questions")

class PollPageSent extends Page {
  constructor() {
    super();

    const container = document.createElement('div');
    const title = document.createElement('h1');
    const mainText = document.createElement('p');
    title.innerText = "Thanks for copletion!"
    mainText.innerText = "Your answers has been sent"
    container.append(title, mainText);
    this.load(container)
  }
}


class PollPage extends Page {
  constructor() {
    super();

    const form = document.createElement('form');
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'submit';
    for (let i = 0; i < data.length; i++) {
      const questionBlock = document.createElement('div')
      const title = document.createElement('h3');
      title.innerText = data[i].question;
      questionBlock.appendChild(title)
      data[i].answers.forEach((element, index) => {
        const answer = document.createElement('label')
        const radioBox = document.createElement('input')
        radioBox.type = 'radio';
        radioBox.id = `question${i}_answer${index}`
        radioBox.name = `question${i}`
        radioBox.value = element
        answer.htmlFor = radioBox.id
        answer.innerText = element
        questionBlock.append(radioBox, answer)
      });
      form.appendChild(questionBlock)
    }

    form.appendChild(submit);

    this.load(form);

    submit.addEventListener('click', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const answers = {};
      for (const [name, value] of formData.entries()) {
        answers[name] = value;
      }
      const data = [{ 'answers': answers }, { 'User-Agent': navigator.userAgent }, { 'submitedAt': new Date().toISOString() }, { 'pollId': window.location.pathname.split("/").filter(Boolean).pop() }]
      console.log(data);
      (async () => {
        const resp = await fetchData("POST", "/poll/submit", data)
        console.log(resp)
        setStatus("sent")
        deleteFromCache("questions")
        this.unload()
        window.currentPage = new PollPageSent
      })();
    })
  }
}


const params = new URLSearchParams(window.location.search);
const status = params.get("status");

if (status === "sent") {
  window.currentPage = new PollPageSent;
} else {
  window.currentPage = new PollPage;
}
