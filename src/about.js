export default function about() {
  const container = document.getElementById('container');

  const title = document.createElement('h1');

  title.textContent = 'Desde About';

  container.appendChild(title);
}
