async function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (container) {
    const res = await fetch(file);
    const html = await res.text();
    container.innerHTML = html;
  }
}

loadComponent("header-container", "header.html");