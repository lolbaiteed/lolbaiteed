let cache = null; 

async function fetchFromEndpoint() {
    if (cache) return cache;
    try {
        const response = await fetch('http://localhost:3000/countries');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        cache = data;
        return data;
    } catch (error) {
        console.error('Failed to fetch data from endpoint:', error);
        return [];
    }
}

async function countryMedalsByDisciplines(countryName) {
const countries = await fetchFromEndpoint();
    const country = countries.find(c => c.name === countryName);
    if (!country) return null;

    const disciplines = country.disciplines.map(d => ({
        name: d.name,
        image: `media/${d.image}`,
        gold: d.gold,
        silver: d.silver,
        bronze: d.bronze,
        total: d.gold + d.silver + d.bronze
    })).sort((a, b) => b.total - a.total);

    return {
        country: country.name,
        flag: `media/${country.flag}`,
        summary: { ...country.medals, total: country.medals.gold + country.medals.silver + country.medals.bronze },
        disciplines
    };
}

async function countryMedalsByType(countryName, medalType) {
    const countries = await fetchFromEndpoint();
    const country = countries.find(c => c.name === countryName);
    if (!country) return [];
    return country.disciplines
        .filter(d => d[medalType] > 0)
        .map(d => ({
            discipline: d.name,
            count: d[medalType]
        }))
        .sort((a, b) => b.count - a.count);
}

async function disciplineByCountries(disciplineName) {
    const countries = await fetchFromEndpoint();
    const result = [];
    for (const country of countries) {
        const disc = country.disciplines.find(d => d.name === disciplineName);
        if (disc && (disc.gold + disc.silver + disc.bronze > 0)) {
            result.push({
                country: country.name,
                flag: country.flag,
                gold: disc.gold,
                silver: disc.silver,
                bronze: disc.bronze,
                total: disc.gold + disc.silver + disc.bronze
            });
        }
    }
    return result.sort((a, b) => b.total - a.total);
}

async function disciplineByCountry(disciplineName, countryName) {
    const countries = await fetchFromEndpoint();
    const country = countries.find(c => c.name === countryName);
    if (!country) return [];
    const disc = country.disciplines.find(d => d.name === disciplineName);
    if (!disc) return [];
    return {
        discipline: disc.name,
        country: country.name,
        gold: disc.gold,
        silver: disc.silver,
        bronze: disc.bronze,
        total: disc.gold + disc.silver + disc.bronze
    };
}

async function allCountries() {
    const countries = await fetchFromEndpoint();
    return countries.map(c => ({
        name: c.name,
        flag: c.flag,
        total: c.medals.gold + c.medals.silver + c.medals.bronze
    }));
}

async function allDisciplines() {
    const countries = await fetchFromEndpoint();
    const list = [];
    const byName = {};

    countries.forEach(country => {
        country.disciplines.forEach(d => {
            const fullPath = d.image.split('images/')[1]; 
            if (!byName[d.name]) {
                byName[d.name] = fullPath;
                list.push({ name: d.name, image: fullPath });
            }
        });
    });

    list.sort((a, b) => a.name.localeCompare(b.name));

    return { list, byName };
}

async function countrySummary(countryName) {
    const countries = await fetchFromEndpoint();
    const country = countries.find(c => c.name === countryName);
    if (!country) return [];
    return {
        country: country.name,
        flag: country.flag,
        gold: country.medals.gold,
        silver: country.medals.silver,
        bronze: country.medals.bronze,
        total: country.medals.gold + country.medals.silver + country.medals.bronze
    };
}

function getQueryParams() {
    const params = {};
    new URLSearchParams(window.location.search).forEach((value, key) => {
        params[key] = decodeURIComponent(value);
    });
    return params;
}
