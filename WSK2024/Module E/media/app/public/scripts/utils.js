window.currentPage = null;

export function addToCache(data) {
  if (!Array.isArray(window.cacheData)) {
    window.cacheData = [];
  }
  window.cacheData.push(data);
}

export function loadScript(path) {

  if (window.currentPage?.unload) {
    window.currentPage.unload();
  }

  const oldScript = document.getElementById('pageScript');
  if (oldScript) oldScript.remove();

  const page = window.location.pathname === "/" ? "index" : path.slice(1);
  const scriptFile = document.createElement("script");
  scriptFile.src = `/scripts/${page}.js`;
  scriptFile.id = 'pageScript';
  scriptFile.type = 'module';
  document.body.appendChild(scriptFile);
}

export function navigate(path) {
  history.pushState({}, '', path);
  loadScript(path);
}


export async function fetchData(method, url, data) {
  const base = "http://localhost:3000/api";
  try {
    const res = await fetch(base + url, {
      headers: { "Content-Type": "application/json" },
      method: method,
      body: data?.value 
    });
    if (!res.ok) {
      throw new Error(res.body)
    }
    return res.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}

export class Page {
  constructor() {
    this.container = null;
  }

  load(container) {
    this.container = container;
    document.body.appendChild(container);
  }

  unload() {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
  }
}

window.addEventListener('popstate', () => loadScript(window.location.pathname))

loadScript(window.location.pathname)
