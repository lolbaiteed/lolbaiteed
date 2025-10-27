(async () => {
 const country = getQueryParams();
  const data = await countrySummary(country.country)
  const title = document.getElementById('name');
  const flag = document.getElementById('flag');
  const table = document.querySelector('table');
  const link = document.createElement('a'); 
  const button = document.getElementsByClassName('button');
  link.append(button)
  link.href = `./countryDetailsByDisciplines..html?country=${data.country}`;
  title.innerText = data.country; 
  flag.src = `./flags/${data.flag.split('images/')[1]}`;
  const gold = table.rows[1].cells[0]; 
  const silver = table.rows[1].cells[1];
  const bronze = table.rows[1].cells[2];
  const total = table.rows[1].cells[3];
  silver.innerText = data.silver;
  gold.innerText = data.gold
  bronze.innerText = data.bronze;
  total.innerText = data.total;
})();
