import Swiper from 'swiper';

console.log("asd")

const freeSwiper = new Swiper('.free-swiper', {
    spaceBetween: 30,
    freeMode: true,
    slidesPerView: 'auto'
})

const mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});