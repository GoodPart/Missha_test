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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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



var header = document.querySelector(".module--navigation");
var btns = header.getElementsByClassName("navigation-list");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    e.preventDefault()
  var current = document.getElementsByClassName("is_active");
  current[0].className = current[0].className.replace(" is_active", "");
  this.className += " is_active";
  });
}


// const moduleNavigation = document.querySelector(".module--navigation");
// const moduleList = document.querySelector(".navigation-list >.module-link");
// console.log("moduleNavigation",moduleNavigation)
// console.log("moduleList",moduleList)

// moduleNavigation.children.forEach((btn)=> {
// })



// for(var i = 0; i<moduleNavigation.children.length; i++) {
//   // console.log(moduleNavigation.children[i])
//   moduleNavigation.children[i].addEventListener('click', function(e){
//     e.preventDefault()
//     // console.log("moduleNavigation.children[e]", e.path[1].classList.contains("is_active"))
//     var current = document.querySelector(".is_active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " is_active";



//     // if(e.path[1].classList.contains("is_active")) {
//     //   // for(var j = 0; j<moduleNavigation.children.length; j++){
//     //   //   e.path[j].classList.remove("is_active")
//     //   //   console.log("rr")
//     //   // }
//     //   // console.log("add class", e.path)
//     //   // console.log("remove class", e.target)
//     // }else {
//     //   e.path[1].classList.add("is_active")
      
      
//     // }
//   })

// }
