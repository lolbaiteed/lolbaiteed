// const mainBlock = document.getElementById('disciplines');
//
// if (mainBlock) {
//   fetch('http://localhost:3000/countries').then((response) => {
//     return response.json();
//   }).then((data) => {
//     console.log(data)
//     let disciplinesArr = [];
//     for (let index = 0; index < data.length; index++) {
//       const button = document.createElement('button');
//       const image = document.createElement('img');
//       const text = document.createElement('p');
//       const link = document.createElement('a');
//       data[index].disciplines.forEach(discipline => {
//         if(!disciplinesArr.includes(discipline.name)){
//           disciplinesArr.push([discipline.name, discipline.image, discipline.gold, discipline.silver, discipline.bronze]);
//         }
//       });
//
//       image.src = `disciplines/${disciplinesArr[index][1].split('images/')[1]}`;
//       text.innerText = disciplinesArr[index][0];
//       let imageStyles = {
//         width: '50px',
//         height: '50px',
//         marginLeft: '3vw'
//       }
//       Object.assign(image.style, imageStyles);
//       button.appendChild(image);
//       button.appendChild(text);
//       link.href = './disciplinesDetails.html'
//       link.appendChild(button);
//       mainBlock.appendChild(link)
//
//       button.onclick = () => {
//         localStorage.setItem('disciplineData', [disciplinesArr[index][0],disciplinesArr[index][1].split('images/')[1], disciplinesArr[index][2], disciplinesArr[index][3], disciplinesArr[index][4]]);
//       }
//     }
//   })
// }

(async () => {
  const mainBlock = document.getElementById('disciplines');
  const data = await allDisciplines();
  console.log(data.list[1]);
  for (let i = 0; i < data.list.length; i++) {
    const button = document.createElement('button');
    const image = document.createElement('img');
    const text = document.createElement('p');
    const link = document.createElement('a');
    image.src = `./disciplines/${data.list[i].image}`;
    text.innerText = data.list[i].name;
    let imageStyles = {
      width: '50px',
      height: '50px',
      marginLeft: '3vw'
    }
    Object.assign(image.style, imageStyles);
    button.appendChild(image);
    button.appendChild(text);
    link.href = `./disciplinesDetails.html?discipline=${data.list[i].name}`
    link.appendChild(button);
    mainBlock.appendChild(link)
  }
})();
