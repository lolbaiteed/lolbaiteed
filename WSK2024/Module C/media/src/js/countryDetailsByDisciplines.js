(async () => {
 const country = getQueryParams();
  const data = await countryMedalsByDisciplines(country.country)
  const title = document.getElementById('name');
  const flag = document.getElementById('flag');
  const table = document.querySelector('table');
  const goldMedals = document.getElementById('goldMedalsAmount');
  goldMedals.innerText = data.summary.gold;
  title.innerText = data.country; 
  flag.src = `./flags/${data.flag.split('images/')[1]}`;
  for (let i = 0; i < data.disciplines.length; i++) {
    const newRow = table.insertRow()
    const discipline = newRow.insertCell(0);
    discipline.innerText = data.disciplines[i].name;
    const medals = newRow.insertCell(1)
    medals.innerText = data.disciplines[i].total;
  }
})();
