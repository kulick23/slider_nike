import jordan from "../../assets/images/jordan.png"
import cryptokick1 from "../../assets/images/cryptokick1.png"
import cryptokick2 from "../../assets/images/cryptokick2.png"
import mag from "../../assets/images/mag.png"
import shadow from "../../assets/icons/shadow.svg"
export const createSlider = () => {

    const sliderDiv = document.createElement('div');
    sliderDiv.classList.add('slider');

    const shadowImg = document.createElement("img");
    shadowImg.classList.add('slider__shadow');
    shadowImg.src = shadow;
    shadowImg.alt = "shadow img";

    const sliderLineDiv = document.createElement('div');
    sliderLineDiv.classList.add('slider--line');

    const sliderElementDiv = document.createElement('div');
    sliderElementDiv.classList.add('slider__element');

    const jordanImg = document.createElement('img');
    jordanImg.classList.add('slider__img--size');
    jordanImg.src = jordan;
    jordanImg.alt = "jordan img";

    const jordanText = document.createElement('h1');
    jordanText.classList.add('slider__text');
    jordanText.textContent = 'NIKE AIR JORDAN';
    const jordanText2 = document.createElement('h1');
    jordanText2.classList.add('slider__text','slider__text--opacity');
    jordanText2.textContent = 'NIKE AIR JORDAN';

    const sliderElementDiv2 = document.createElement('div');
    sliderElementDiv2.classList.add('slider__element');

    const cryptokickImg = document.createElement('img');
    cryptokickImg.classList.add('slider__img--size');
    cryptokickImg.src = cryptokick1;
    cryptokickImg.alt = "cryptokick img";

    const cryptokickText = document.createElement('h1');
    cryptokickText.classList.add('slider__text','slider__text--black');
    cryptokickText.textContent = 'NIKE CRYPTOKICK';

    const cryptokickText2 = document.createElement('h1');
    cryptokickText2.classList.add('slider__text','slider__text--opacity','slider__text--black-opacity');
    cryptokickText2.textContent = 'NIKE CRYPTOKICK';

    const sliderElementDiv3 = document.createElement('div');
    sliderElementDiv3.classList.add('slider__element');

    const cryptokickImg2 = document.createElement('img');
    cryptokickImg2.classList.add('slider__img--size','slider__text--black');
    cryptokickImg2.src = cryptokick2;
    cryptokickImg2.alt = "cryptokick2 img";
    const cryptokick2Text = document.createElement('h1');
    cryptokick2Text.classList.add('slider__text','slider__text--black');
    cryptokick2Text.textContent = 'NIKE CRYPTOKICK';

    const cryptokick2Text2 = document.createElement('h1');
    cryptokick2Text2.classList.add('slider__text','slider__text--opacity','slider__text--black-opacity');
    cryptokick2Text2.textContent = 'NIKE CRYPTOKICK';

    const sliderElementDiv4 = document.createElement('div');
    sliderElementDiv4.classList.add('slider__element');
    const magImg = document.createElement('img');
    magImg.classList.add('slider__img--size');
    magImg.src = mag;
    magImg.alt = "mag img";
    const magText = document.createElement('h1');
    magText.classList.add('slider__text');
    magText.textContent = 'NIKE MAG BACK TO THE FUTURE';

    const magText2 = document.createElement('h1');
    magText2.classList.add('slider__text','slider__text--opacity');
    magText2.textContent = 'NIKE MAG BACK TO THE FUTURE';

    sliderElementDiv.appendChild(jordanImg);
    sliderElementDiv.appendChild(jordanText);
    sliderElementDiv.appendChild(jordanText2);
    sliderElementDiv2.appendChild(cryptokickImg);
    sliderElementDiv2.appendChild(cryptokickText);
    sliderElementDiv2.appendChild(cryptokickText2);
    sliderElementDiv3.appendChild(cryptokickImg2);
    sliderElementDiv3.appendChild(cryptokick2Text);
    sliderElementDiv3.appendChild(cryptokick2Text2);
    sliderElementDiv4.appendChild(magImg);
    sliderElementDiv4.appendChild(magText);
    sliderElementDiv4.appendChild(magText2);

    sliderLineDiv.appendChild(sliderElementDiv);
    sliderLineDiv.appendChild(sliderElementDiv2);
    sliderLineDiv.appendChild(sliderElementDiv3);
    sliderLineDiv.appendChild(sliderElementDiv4);
    sliderDiv.appendChild(sliderLineDiv);
    sliderDiv.appendChild(shadowImg);

    return { sliderDiv, sliderLineDiv };
};