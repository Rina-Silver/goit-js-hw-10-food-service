import galleryCardTemp from '../src/templates/gallery-card.hbs';
import cards from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Отрисовка карточек
const galleryRef = document.querySelector('.js-menu');

const markup = galleryCardTemp(cards);
galleryRef.insertAdjacentHTML('beforeend', markup);

//Изменение темы
const themeToggle = document.getElementById('theme-switch-toggle');

themeToggle.addEventListener('change', handleThemeChange);
function handleThemeChange() {
  const ToggleCheck = themeToggle.checked;

  if (ToggleCheck === false) {
    document.body.classList.add(Theme.LIGHT);
    console.log(Theme.LIGHT);
    //localStorage.setItem('myTheme', JSON.stringify(Theme.LIGHT));
  }
  document.body.classList.add(Theme.DARK);
  console.log(Theme.DARK);
}

//const userJSON = JSON.stringify(Theme);

//localStorage.setItem('myTheme', userJSON);

//const getValue = localStorage.getItem('myTheme');
