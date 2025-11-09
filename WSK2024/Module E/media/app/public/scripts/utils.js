// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

window.currentPage = null;

// export const __filename = fileURLToPath(import.meta.url);
// export const __dirname = dirname(__filename);


export class cacheError extends Error {
  constructor(message) {
    super(message);
    this.name = "CacheError"
  }
}

export class fetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError"
  }
}

/**
 * adds data to session storage
 * @param {string} key - the key to store data
 * @param {string|object} value - value or object to store
*/
export function addToCache(key, value) {
  if (typeof value === "object") {
    sessionStorage.setItem(key, JSON.stringify(value))
  } else if (typeof value === 'string') {
    sessionStorage.setItem(key, value)
  }
}

/**
 * Searches for a given key in the cache
 * @param {string} key- The key to search for in each cache entry.
 * @returns {object|null} The value found in the cache
 * @throws {Error} If key not found
 */
export function findInCache(key) {
  if (sessionStorage.length === 0) {
    throw new cacheError("cache is empty")
  }
  const found = sessionStorage.getItem(key)
  if (found === null) {
    throw new cacheError("cannot find data in cache")
  }
  try {
    return JSON.parse(found)
  } catch {
    return found
  }
}

/**
 * Deletes pair of key:value from cache
 * @param {string} key - key to delete
 */
export function deleteFromCache(key) {
  sessionStorage.removeItem(key)
}

export function loadScript(path) {

  if (window.currentPage?.unload) {
    window.currentPage.unload();
  }

  const oldScript = document.getElementById('pageScript');
  if (oldScript) oldScript.remove();

  const page = window.location.pathname === "/" ? "index" : path.includes("poll") ? "poll" : path.includes("admin") ? "admin" : path.slice(1);

  const scriptFile = document.createElement("script");
  scriptFile.src = `/scripts/${page}.js`;
  scriptFile.id = 'pageScript';
  scriptFile.type = 'module';

  document.body.appendChild(scriptFile);

  scriptFile.onload = () => {
    if (window.location.pathname.includes('admin')) {
      window.initAdminPage();
    }
  }
}

export function navigate(path) {
  history.pushState({}, '', path);
  loadScript(path);
}

export async function fetchData(method, url, data, getHeader, sendHeader) {
  const base = "http://localhost:3000/api";
  const res = await fetch(base + url, {
    headers: {
      "Content-Type": "application/json",
      ...sendHeader
    },
    method: method,
    body: JSON.stringify(data),
    redirect: 'follow'
  });

  if (res.redirected) {
    const pathName = new URL(res.url).pathname
    return navigate(`${pathName}`)
  }

  if (!res.ok && res.status != 302) {
    throw new fetchError(res.text())
  }

  const json = await res.json();
  const headerVal = getHeader ? res.headers.get(getHeader) : null;
  return { data: json, header: headerVal }
}

export class Page {
  constructor() {
    this.container = null;
    this.ready = this.init();
  }

  async init() {
    try {
      await this.onInit()
      return true
    } catch (error) {
      console.error("Error initialzing page: ", error);
    }
  }

  async onInit() {

  }

  load(container, style, title) {
    this.container = container;
    this.style = style;
    this.title = title;
    document.body.appendChild(container);
    document.head.append(style, title);
  }

  unload() {
    if (this.style && this.container) {
      this.container.remove();
      this.style.remove();
      if (this.title) {
        this.title.remove();
      }
      this.container = null;
      this.style = null;
    } else if (this.container) {
      this.container.remove();
      this.container = null;
    }
  }
}

export function setStatus(status) {
  const url = new URL(window.location);
  url.searchParams.set("status", status);
  history.pushState({}, "", url);
}

window.addEventListener('popstate', () => loadScript(window.location.pathname))

loadScript(window.location.pathname)
