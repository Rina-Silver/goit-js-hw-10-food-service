import galleryCardTemp from '../src/templates/gallery-card.hbs';
import cards from './menu.json';
import './styles.css';

const galleryRef = document.querySelector('.js-menu');

const markup = galleryCardTemp(cards);
galleryRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const userJSON = Json.stringify(Theme);

localStorage.setItem('my-key', userJSON);

//const getValue = localStorage.getItem('my-key');
