const countryData = localStorage.getItem('countryData').split(',');

addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('name');
  const flag = document.getElementById('flag');
  const table = document.querySelector('table');
  title.innerText = countryData[1];
  flag.src = `flags/${countryData[2]}`
  const gold = table.rows[1].cells[0]; 
  const silver = table.rows[1].cells[1];
  const bronze = table.rows[1].cells[2];
  const total = table.rows[1].cells[3];
  silver.innerText = countryData[4];
  gold.innerText = countryData[3]
  bronze.innerText = countryData[5];
  total.innerText = Number(countryData[4]) + Number(countryData[3]) + Number(countryData[5])
})
