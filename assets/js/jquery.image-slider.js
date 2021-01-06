// $('.image-slider-box').slick({
//     autoplay: true,
//     autoplaySpeed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false
// });

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.image-slider-box');

let current_card = 0;

next.addEventListener('click', () => {
    images.style.transitionDuration = "0.5s";
    images.style.transform = "translate(-200px)";
});




document.addEventListener('DOMContentLoaded', () => {
    const images = document.getElementsByClassName('image-slider-box');
    const first_card_clone = images.children[0].cloneNode(true);
    const last_card_clone = images.children[images.children.length - 1].cloneNode(true);
    images.appendChild(first_card_clone);
    images.insertBefore(last_card_clone, images.children[0]);
    images.style.transitionDuration = "0.0s";
    images.style.transform = 'translate(-200px)';
});

let current_card=1;
next.addEventListener('click', e=> {
    if(!(current_card > images.children.length)) {
        setTimeout(() => {
            current_card++;
            images.style.transitionDuration = "0.5s";
            images.style.transform = 'translate(-${current_card*200}px)';
        }, 10);
    } else {
        return;
    }
});

prev.addEventListener('click', e => {
    if(current_card > 0) {
        setTimeout(() => {
            current_card--;
            images.style.transitionDuration = "0.5s";
            images.style.transform = 'translate(-${current_card*200}px)';
        }, 10);
    } else {
        return;
    }
});
