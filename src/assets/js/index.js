import Swiper from 'swiper';
import Masonry from 'masonry-layout'


var nestCurrent = 0;

const paginationName = ['시즌 이벤트', '신제품', '구매사은품', '1+1품목', '기획전'];
let nestSlideLength = [];


console.log("nestCurrent-초기값", nestCurrent)


const freeSwiper = new Swiper('.free-swiper', {
    spaceBetween: 30,
    freeMode: true,
    slidesPerView: 'auto'

})

const nested = new Swiper('.nest-container', {
  parallax: true,
  nested: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on:{
    init: function() {
      //init function
    },
    slideChange: function() {

      nestCurrent = this.activeIndex+1;
      const index = this.activeIndex;
      console.log(mySwiper.activeIndex, index);
      
      document.querySelector(".count-"+mySwiper.activeIndex).innerHTML= nestCurrent
      // nestCurrent = 0;
      
      
    }
  }
});




function appendSlide(slides, index) {
  const mainTab = document.querySelector(".main-visual-tab");
  const slide = document.createElement("li")
  const tabTitle = slides.attributes[1].value;
  const maxCount = mainSwiperSlides.length;
  const nestSlide = slides.querySelectorAll(".swiper-slide");
  const nestSlideMaxCount = nestSlide.length;

  //카운트 백틱
  const count =`
  <span class="count-container">
    <span class="count-${index}">${nestCurrent+1}</span> / <span>${nestSlideMaxCount}</span>
  </span>
  `

  slide.className = "tab-list"
  slide.innerHTML=tabTitle+ count
  slide.style.width = 100/ maxCount+'%'
  mainTab.appendChild(slide)
  
}


const mainSwiperSlides = document.querySelectorAll(".main-swiper > .swiper-wrapper >.swiper-slide");
const mainVisualTab = document.querySelector(".main-visual-tab");
mainSwiperSlides.forEach((slides, index) => {
  const nestSlides = slides.querySelectorAll(".swiper-slide");
  

  appendSlide(slides, index);
  // addName(slides);

  console.log("mySwiper 슬라이드 갯수", slides.length)

  if(nestSlides.length === 0) {
    nestSlideLength.push(0)
  }else {

    nestSlideLength.push(nestSlides.length)



  }
  console.log("nestSlideLength", nestSlideLength)
})




const mySwiper = new Swiper('.main-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span alt='+paginationName[index]+' class="' + className + '">'+ paginationName[index] + nestCurrent +'/'+ nestSlideLength[index] + '</span>';
    }
  },
  on:{
    init: function() {
      const tab = document.querySelectorAll(".tab-list");
      const countContainer = document.querySelectorAll(".count-container");

      tab[this.activeIndex].classList.add("is_active")
      countContainer[this.activeIndex].classList.add("is_active")

    },
    slideChange: function() {

      document.querySelector(".main-visual-tab")
      const index = this.activeIndex;

      const tabArray = document.querySelectorAll(".tab-list");
      const countContainer = document.querySelectorAll(".count-container");



      tabArray.forEach((tab, index)=> {
        if(this.activeIndex ===index) {
          tab.classList.add("is_active")
          countContainer[index].classList.add("is_active")
        }else {
          tab.classList.remove("is_active")
          countContainer[index].classList.remove("is_active")
        }
      })

    }
  }
});

const tt = document.querySelectorAll(".tab-list");
tt.forEach((t,index)=> {
  t.addEventListener("click", function(e) {
    mySwiper.slideTo(index, 500);
    console.log("hit", e)
    console.log("hit--t", t)
  })
})



/*
///////////////////////////////////////////////////
*/


var countDownDate = new Date("Jan 5, 2021 11:20:00").getTime();


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



//리뷰 아이디 **표시
const reviewId = document.querySelectorAll(".comment-id");
// console.log(reviewId)
reviewId.forEach(id => {
  const userId = id.innerHTML;

  const resultId = userId.slice(0,-3)+'***'
  

  return id.innerHTML = resultId
  // return id.innerText = userId;
})
  
const ranks = document.querySelectorAll(".rank")
// console.log("rank", rank)
ranks.forEach(rank => {
  const rankData = rank.attributes[1].value;
  // console.log(rankData)
})




// for(var i = 0; i <moduleNavigation.children.length; i++) {
  
// }

// const buttons = document.querySelectorAll("#select .button")

// var elem = document.querySelector('.grid');
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  gutter: 40
  // columnWidth: 200
});



