(async () => {
  const params = getQueryParams()
  const data = await disciplineByCountry(params.discipline, params.country);
  console.log(data);
  const title = document.getElementById('name');
  const image = document.getElementById('image');
  const table = document.querySelector('table');
  const newRow = table.insertRow();
  const gold = newRow.insertCell(0);
  const silver = newRow.insertCell(1);
  const bronze = newRow.insertCell(2); 
  const total = newRow.insertCell(3);
  title.innerHTML = params.country;
  image.src = `disciplines/${params.discipline}.svg`
  gold.innerText = data.gold;
  silver.innerText = data.silver;
  bronze.innerText = data.bronze;
  total.innerText = data.total
})();

