
const createContent = () => {
    let offset = 0;

    const content = document.createElement('content');
    content.classList.add('content');

    const ellipseButton1 = document.createElement('button');
    ellipseButton1.addEventListener('click', function (){
        offset += 450
        if (offset > 0){
            offset = -1350
        }
        sliderLineDiv.style.left = offset + "px"
        console.log(sliderLineDiv.style.left)
    })
    const ellipseImg1 = document.createElement('img');
    ellipseImg1.classList.add('button__arrow');
    ellipseImg1.src = 'pictures/icons/arrow.svg';
    ellipseButton1.appendChild(ellipseImg1);

    const sliderDiv = document.createElement('div');
    sliderDiv.classList.add('slider');
    const sliderLineDiv = document.createElement('div');
    sliderLineDiv.classList.add('slider--line');
    const jordanImg = document.createElement('img');
    jordanImg.classList.add('slider__img--size');
    jordanImg.src = 'pictures/images/jordan.png';
    const cryptokickImg = document.createElement('img');
    cryptokickImg.classList.add('slider__img--size');
    cryptokickImg.src = 'pictures/images/cryptokick.png';
    const cryptokickImg2 = document.createElement('img');
    cryptokickImg2.classList.add('slider__img--size');
    cryptokickImg2.src = 'pictures/images/cryptokick2.png';
    const magImg = document.createElement('img');
    magImg.classList.add('slider__img--size');
    magImg.src = 'pictures/images/mag.png';
    sliderLineDiv.appendChild(jordanImg);
    sliderLineDiv.appendChild(cryptokickImg);
    sliderLineDiv.appendChild(cryptokickImg2);
    sliderLineDiv.appendChild(magImg);
    sliderDiv.appendChild(sliderLineDiv);



    const ellipseButton2 = document.createElement('button');
    ellipseButton2.classList.add('button--reverse');
    ellipseButton2.addEventListener('click', function (){
        offset -= 450
        if (offset < -1350){
            offset = 0
        }
        sliderLineDiv.style.left = offset + "px"
        console.log(sliderLineDiv.style.left)

    })
    const ellipseImg2 = document.createElement('img');
    ellipseImg2.classList.add('button__arrow');
    ellipseImg2.src = 'pictures/icons/arrow.svg';
    ellipseButton2.appendChild(ellipseImg2);

    content.appendChild(ellipseButton1);
    content.appendChild(sliderDiv);
    content.appendChild(ellipseButton2);

    return content;
}
export default createContent;