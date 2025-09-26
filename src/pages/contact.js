export default function contact() {
  const container = document.getElementById('container');

  // Delete previous HTML
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const contactTitle = document.createElement('h1');
  contactTitle.classList.add('contact__title');
  contactTitle.textContent = 'Contact';

  const contactForm = document.createElement('div');
  contactForm.classList.add('contact__form');
  contactForm.innerHTML = `
    <form class="form">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>

      <div>
        <label for="message">Message</label>
        <textarea rows="6"></textarea>
      </div>
    </form>
  `;

  container.appendChild(contactTitle);
  container.appendChild(contactForm);
}
