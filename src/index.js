import home from './home';
import about from './about';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  if (button.textContent === 'Home') {
    button.addEventListener('click', home);
  } else if (button.textContent === 'About') {
    button.addEventListener('click', about);
  }
});
