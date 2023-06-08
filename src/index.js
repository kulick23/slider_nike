
import './styles.css'

const body = document.querySelector('body');

const header = document.createElement('header');
header.classList.add('header');

const logoImg = document.createElement('img');
logoImg.src = 'pictures/icons/logo.svg';

const heading = document.createElement('p');
heading.textContent = 'WOOCOMMERCE  PRODUCT  SLIDER';

const socialDiv = document.createElement('div');
socialDiv.classList.add('header__social');

const twitterLink = document.createElement('a');
twitterLink.href = '#';
const twitterImg = document.createElement('img');
twitterImg.src = 'pictures/icons/twitter.svg';
twitterLink.appendChild(twitterImg);

const instLink = document.createElement('a');
instLink.href = '#';
const instImg = document.createElement('img');
instImg.src = 'pictures/icons/inst.svg';
instLink.appendChild(instImg);

const facebookLink = document.createElement('a');
facebookLink.href = '#';
const facebookImg = document.createElement('img');
facebookImg.src = 'pictures/icons/facebook.svg';
facebookLink.appendChild(facebookImg);

const cartLink = document.createElement('a');
cartLink.href = '#';
cartLink.textContent = 'CART (0)';

const content = document.createElement('content');
content.classList.add('content');

const ellipseDiv1 = document.createElement('div');
ellipseDiv1.classList.add('content__ellipse');
const ellipseImg1 = document.createElement('img');
ellipseImg1.src = 'pictures/icons/ellipse.svg';
ellipseDiv1.appendChild(ellipseImg1);

const jordanImg = document.createElement('img');
jordanImg.src = 'pictures/images/jordan.png';
jordanImg.classList.add('content__imag');

const ellipseDiv2 = document.createElement('div');
ellipseDiv2.classList.add('content__ellipse');
const ellipseImg2 = document.createElement('img');
ellipseImg2.src = 'pictures/icons/ellipse.svg';
ellipseDiv2.appendChild(ellipseImg2);

// Добавление элементов в DOM
header.appendChild(logoImg);
header.appendChild(heading);
header.appendChild(socialDiv);
socialDiv.appendChild(twitterLink);
socialDiv.appendChild(instLink);
socialDiv.appendChild(facebookLink);
header.appendChild(cartLink);

content.appendChild(ellipseDiv1);
content.appendChild(jordanImg);
content.appendChild(ellipseDiv2);

body.appendChild(header);
body.appendChild(content);