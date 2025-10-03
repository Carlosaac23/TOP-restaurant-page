import restaurant from '@/images/restaurant.webp';

export default function about() {
  const container = document.getElementById('container');

  // Delete previous HTML
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const aboutImage = document.createElement('img');
  aboutImage.classList.add('about__img');
  aboutImage.src = restaurant;

  const aboutTitle = document.createElement('h1');
  aboutTitle.classList.add('about__title');
  aboutTitle.textContent = 'About us';

  const aboutText = document.createElement('p');
  aboutText.classList.add('about__text');
  aboutText.innerHTML = `
    <p>
      At La Trattoria di Sole, we believe that a perfect plate of spaghetti
      doesn’t just feed the body — it nourishes the soul. Since opening our
      doors in 1995, we’ve mastered the art of fresh handmade pasta and
      traditional Italian sauces passed down through generations.
    </p>

    <p>
      What makes us unique is not only the quality of our ingredients —
      sun-ripened Mediterranean tomatoes, locally grown fresh basil, and extra
      virgin olive oil — but also the passion we pour into every single dish.
    </p>

    <p>
      Our philosophy is simple: “A better world begins with the perfect plate of
      spaghetti.” That’s why every visit feels like a journey to Italy, filled
      with authentic aromas, rich flavors, and moments that turn into
      unforgettable memories.
    </p>

    <p>
      At La Trattoria di Sole, we don’t just serve food. We serve experiences.
      Come and discover why we’re called the best spaghetti restaurant in the
      world..
    </p>
  `;

  container.appendChild(aboutImage);
  container.appendChild(aboutTitle);
  container.appendChild(aboutText);
}
