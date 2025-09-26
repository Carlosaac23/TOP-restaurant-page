export default function about() {
  const container = document.getElementById('container');

  // Delete previous HTML
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const title = document.createElement('h1');

  title.textContent = 'Desde About';

  container.appendChild(title);
}
