import spaghetti from '../images/spaghetti.jpg';

export default function home() {
  const container = document.getElementById('container');

  // Delete previous HTML
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const homeImage = document.createElement('img');
  homeImage.classList.add('home__img');
  homeImage.src = spaghetti;

  const homeTitle = document.createElement('h1');
  homeTitle.classList.add('home__title');
  homeTitle.textContent = 'La Trattoria di Sole';

  const homeText = document.createElement('p');
  homeText.classList.add('home__text');
  homeText.textContent =
    'Imagine a place where the air is filled with the comforting aroma of fresh pasta, simmering tomato sauces, and fragrant herbs. A place where every plate tells a story — of tradition, passion, and the timeless Italian art of bringing people together around the table. That place is La Trattoria di Sole. For over 25 years, we’ve dedicated ourselves to crafting what many call the best spaghetti in the world. From our secret family recipes to the freshest seasonal ingredients, every detail matters. Our chefs handcraft pasta daily, ensuring that every strand of spaghetti is silky, delicate, and ready to carry the rich, flavorful sauces that have made us a culinary landmark. But La Trattoria di Sole is more than just food — it’s an experience. Whether you’re joining us for a romantic evening, a family celebration, or simply to treat yourself to a perfect meal, you’ll find a warm, inviting atmosphere that feels like home. Our rustic Italian-inspired interiors, paired with fine wines and attentive service, set the stage for unforgettable dining moments. We’re proud to serve not only locals who have made us part of their lives but also travelers from across the globe who come to taste what makes our spaghetti so unique. Each plate is prepared with love, respect for tradition, and a touch of creativity that keeps our guests returning again and again. So take a seat, raise your glass, and let us transport you to the heart of Italy — right here at La Trattoria di Sole. Because here, pasta isn’t just food… it’s a celebration of life.';

  container.appendChild(homeImage);
  container.appendChild(homeTitle);
  container.appendChild(homeText);
}
