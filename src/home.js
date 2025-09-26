import spaghetti from './spaghetti.jpg';

export default function home() {
  const container = document.getElementById('container');

  // Delete previous HTML
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const image = document.createElement('img');
  const title = document.createElement('h1');
  const text = document.createElement('p');

  image.src = spaghetti;
  image.width = '400';

  title.textContent = "¡The best spaghetti's restaurant in the world!";

  text.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit unde aut dignissimos hic minima quo alias dolor amet, quia rem saepe iusto ipsum blanditiis corporis quidem doloremque facere earum? Sapiente nesciunt consequatur optio consequuntur, aliquid tenetur, voluptas reprehenderit provident nisi fugit cumque? Aliquam laboriosam natus eveniet ea iste nulla sapiente. Similique dolor mollitia ipsa perspiciatis omnis! Distinctio, totam officiis?';

  container.appendChild(image);
  container.appendChild(title);
  container.appendChild(text);
}
