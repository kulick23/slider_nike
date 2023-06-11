import { createSlider } from './slider.js';
import "./content.css"
import arrow from "../../assets/icons/arrow.svg"


const { sliderDiv, sliderLineDiv } = createSlider();
const createContent = () => {
    let offset = 0;

    const content = document.createElement('content');
    content.classList.add('content');

    const ellipseButton1 = document.createElement('button');
    ellipseButton1.classList.add('content__button')
    ellipseButton1.addEventListener('click', function (){
        offset += 500
        if (offset > 0){
            offset = -1500
        }
        sliderLineDiv.style.left = offset + "px"
        console.log(sliderLineDiv.style.left)
    })
    const ellipseImg1 = document.createElement('img');
    ellipseImg1.classList.add('button__arrow');
    ellipseImg1.src = arrow;
    ellipseImg1.alt = "arrow";
    ellipseButton1.appendChild(ellipseImg1);



    const ellipseButton2 = document.createElement('button');
    ellipseButton2.classList.add('content__button','button--reverse');
    ellipseButton2.addEventListener('click', function (){
        offset -= 500
        if (offset < -1500){
            offset = 0
        }
        sliderLineDiv.style.left = offset + "px"
        console.log(sliderLineDiv.style.left)

    })
    const ellipseImg2 = document.createElement('img');
    ellipseImg2.classList.add('button__arrow');
    ellipseImg2.src = arrow;
    ellipseImg2.alt = "arrow";
    ellipseButton2.appendChild(ellipseImg2);

    content.appendChild(ellipseButton1);
    content.appendChild(sliderDiv);
    content.appendChild(ellipseButton2);

    return content;
}
export default createContent;