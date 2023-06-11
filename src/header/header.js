import './header.css'
import nikeLogo from "../../assets/icons/logo.svg"
import twitterLogo from "../../assets/icons/twitter.svg"
import instagramLogo from "../../assets/icons/inst.svg"
import facebookLogo from "../../assets/icons/facebook.svg"

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const logoImg = document.createElement('img');
    logoImg.src = nikeLogo;
    logoImg.alt = "Nike Logo";

    const heading = document.createElement('p');
    heading.textContent = 'WOOCOMMERCE  PRODUCT  SLIDER';

    const socialDiv = document.createElement('div');
    socialDiv.classList.add('header__social');

    const twitterLink = document.createElement('a');
    twitterLink.href = '#';
    const twitterImg = document.createElement('img');
    twitterImg.src = twitterLogo;
    twitterImg.alt = "Twitter Logo";
    twitterLink.appendChild(twitterImg);

    const instLink = document.createElement('a');
    instLink.href = '#';
    const instImg = document.createElement('img');
    instImg.src = instagramLogo;
    instImg.alt = "Instagram Logo";
    instLink.appendChild(instImg);

    const facebookLink = document.createElement('a');
    facebookLink.href = '#';
    const facebookImg = document.createElement('img');
    facebookImg.src = facebookLogo;
    facebookImg.alt = "Facebook Logo";
    facebookLink.appendChild(facebookImg);

    const cartLink = document.createElement('a');
    cartLink.href = '#';
    cartLink.textContent = 'CART (0)';


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