// var jquery = require("jquery");
// window.$ = window.jQuery = jquery;

import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider.js';
import {showHide} from "../../components/menu/menu";
import "lightgallery.js";
import "glider-js";


lightGallery(document.getElementById("lightgallery"), {
    mode: "lg-slide",
});

let slider = tns({
    container: '.slider__slides',
    items: 1,
    slideBy: 'page',
    controlsText: ['', ''],
    controlsContainer: '.slider__controls',
    navContainer: '.slider__nav',
});

let reviewsSlider = tns({
    container: '.reviews__slides',
    items: 1,
    slideBy: 1,
    controlsText: ['', ''],
    controlsContainer: '.reviews__controls',
    navContainer: '.reviews__nav',
});

function stubVideoSlide (slideEl, video) {
    let slide = document.querySelector(slideEl);
    
    let buttons = document.querySelectorAll(".tns-controls button");
    let content = slide.innerHTML;
    slide.addEventListener("click", () => {
        slide.innerHTML = video;
    })

    slider.events.on('indexChanged', (v) => {
        slide.innerHTML = content;
    });
}
//
stubVideoSlide('.slider__slide--clip', '<div class="you-tube__relation"><div class="you-tube__ratio"></div><iframe class="you-tube__content" src="https://www.youtube.com/embed/TNwfr313Tsg?autoplay=1" frameborder="0" allow="accelerometer; gyroscope; " allowfullscreen></iframe></div>');
stubVideoSlide('.slider__slide--promo', '<div class="you-tube__relation"><div class="you-tube__ratio"></div><iframe class="you-tube__content" src="https://www.youtube.com/embed/6HeeDmfQWgc?autoplay=1" frameborder="0" allow="accelerometer; gyroscope; " allowfullscreen></iframe></div>');

showHide({
    clickEl: ".hamburger",
    clckToggleEl: ".hamburger__layers",
    clickToggleClass: "hamburger__layers--disclosed",
    showHideEl: ".menu",
    showHideToggleClass: "menu--disclosed",
    clickBreakEl: ".menu__link"
});



// toggleClass(".dropdown__heading", ".dropdown__wrap", "dropdown__wrap--active");
// setMask('text-field__input--masked-date');
// setMask('text-field__input--masked-email', 'email');

