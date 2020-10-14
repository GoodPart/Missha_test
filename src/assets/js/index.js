import Swiper from 'swiper';

console.log("asd")

const freeSwiper = new Swiper('.free-swiper', {
    spaceBetween: 30,
    freeMode: true,
    slidesPerView: 'auto'
})

const mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
});



var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
  document.getElementById("count").innerHTML =  (hours < 10 ? '0'+hours :hours) + " : "
  + (minutes < 10 ? '0'+minutes :minutes) + " : " + (seconds < 10 ? '0'+seconds :seconds) ;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "ERROR";
  }
}, 1000);
