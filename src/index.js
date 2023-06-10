import './styles.css';
import createHeader from './header';
import createContent from "./content";
const body = document.querySelector('body');

// Создание заголовка и добавление его в DOM
const header = createHeader();
const content = createContent();
body.appendChild(header);
body.appendChild(content);