import galleryCardTemp from '../src/templates/gallery-card.hbs';
import cards from './menu.json';
import './styles.css';

const galleryRef = document.querySelector('.js-menu');

const markup = galleryCardTemp(cards);
galleryRef.insertAdjacentHTML('beforeend', markup);
