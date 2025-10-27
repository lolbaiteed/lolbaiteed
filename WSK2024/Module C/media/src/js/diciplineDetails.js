(async () => {
  const discipline = getQueryParams()
  const data = await disciplineByCountries(discipline.discipline);
  console.log(data);
  for (let i = 0; i < data.length; i++) {

    const title = document.getElementById('name');
    const image = document.getElementById('image');
    const table = document.querySelector('table');
    const link = document.createElement('a');
    const newRow = table.insertRow();
    const cell1= newRow.insertCell(0);
    const cell2= newRow.insertCell(1);
    title.innerHTML = discipline.discipline;
    image.src = `disciplines/${discipline.discipline}.svg`
    link.innerText = data[i].country;
    link.href = `./disciplineDetailsByCountry.html?country=${data[i].country}&discipline=${discipline.discipline}`;
    cell1.appendChild(link)
    cell2.innerText = data[i].total;
  }
})();

