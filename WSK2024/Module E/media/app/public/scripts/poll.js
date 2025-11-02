import { fetchData, Page } from "./utils.js";

const data = window.cacheData;

class PollPage extends Page {
  constructor() {
    super();

    const form = document.createElement('form');
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'submit';

    for (let i = 0; i < data[0].length; i++) {
      const questionBlock = document.createElement('div')
      const title = document.createElement('h3');
      title.innerText = data[0][i].question;
      questionBlock.appendChild(title)
      data[0][i].answers.forEach((element, index) => {
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

    submit.addEventListener('click', (event) => {
      (async () => {
        event.preventDefault();

        const formData = new FormData(form);

        const answers = {};
        for (const [name, value] of formData.entries()) {
          answers[name] = value;
        }

        await fetchData('POST', '/submit', [answers, navigator.userAgent, new Date().toUTCString(), window.location.href]);
      })();
    })

    document.body.appendChild(form)
  }
}

window.currentPage = new PollPage;
