import home from '@/pages/home';
import about from '@/pages/about';
import contact from '@/pages/contact';
import './style.css';

home();

const buttons = document.querySelectorAll('button');
buttons.forEach((button: HTMLButtonElement) => {
  if (button.textContent === 'Home') {
    button.addEventListener('click', home);
  } else if (button.textContent === 'About') {
    button.addEventListener('click', about);
  } else {
    button.addEventListener('click', contact);
  }
});
