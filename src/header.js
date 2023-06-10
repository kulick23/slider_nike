const createHeader = () => {
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

    // Добавление элементов в заголовок
    header.appendChild(logoImg);
    header.appendChild(heading);
    header.appendChild(socialDiv);
    socialDiv.appendChild(twitterLink);
    socialDiv.appendChild(instLink);
    socialDiv.appendChild(facebookLink);
    header.appendChild(cartLink);

    return header;
};

export default createHeader;