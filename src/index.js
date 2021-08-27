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
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('myTheme', Theme.LIGHT);
  } else {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('myTheme', Theme.DARK);
  }
}

//При загрузке страницы
const getValue = localStorage.getItem('myTheme');
if (getValue === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeToggle.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
  themeToggle.checked = false;
}
