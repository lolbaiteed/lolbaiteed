const mainBlock = document.getElementById('countries');

if (mainBlock) {
  fetch('http://localhost:3000/countries').then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)
    for (let index = 0; index < data.length; index++) {
      const button = document.createElement('button');
      const image = document.createElement('img');
      const text = document.createElement('p');
      const link = document.createElement('a');
      image.src = `flags/${data[index].flag.split('images/')[1]}`;
      text.innerText = data[index].name;
      let imageStyles = {
        width: '50px',
        height: '50px',
        marginLeft: '3vw'
      }
      Object.assign(image.style, imageStyles);
      button.appendChild(image);
      button.appendChild(text);
      link.href = './countryDetails.html'
      link.appendChild(button);
      mainBlock.appendChild(link)

      button.onclick = () => {
        localStorage.setItem('countryData', [data[index].id, data[index].name, data[index].flag.split('images/')[1], data[index].medals.gold,data[index].medals.silver, data[index].medals.bronze]);
      }
    }
  })
}
