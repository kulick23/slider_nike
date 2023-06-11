import "./footer.css"
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('footer__details');
    const numberP = document.createElement('p');
    numberP.className = "footer__number--size";
    numberP.textContent = '$749';

    var ul = document.createElement("ul");
    ul.className = "footer__rating";
    var stars = [];

    for (var i = 0; i < 5; i++) {
        var li = document.createElement("li");
        li.className = "rating__star";
        li.innerHTML = "&#9733;";
        ul.appendChild(li);
        stars.push(li);
    }
    stars.forEach((star) => {
        star.addEventListener('click', () => {
            star.classList.toggle('checked');
        });
    });

    const textP = document.createElement('p');
    textP.className = "footer__text--margin";
    textP.textContent = 'A Woocommerce product gallery Slider for Slider\n' +
        'Revolution with mind-blowing visuals.';

    detailsDiv.appendChild(numberP);
    detailsDiv.appendChild(ul);
    detailsDiv.appendChild(textP);
    const buyButton = document.createElement('button');
    buyButton.classList.add('footer__button');
    buyButton.textContent = 'BUY NOW'
    const buttonHr = document.createElement('hr');
    buttonHr.classList.add('button__hr');
    buyButton.appendChild(buttonHr);
    footer.appendChild(detailsDiv);
    footer.appendChild(buyButton);

    return footer
}
export default createFooter;