import Swiper from 'swiper';
import Masonry from 'masonry-layout'
import AOS from 'aos';




var nestCurrent = 0;

// const paginationName = ['시즌 이벤트', '신제품', '구매사은품', '1+1품목', '기획전'];
let nestSlideLength = [];
let nestSlideMaxCount = ''

// console.log("nestCurrent-초기값", nestCurrent)


const swiper2 = new Swiper('.swiper2', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const verticalSwiper = new Swiper('.vertical-swiper', {
  direction: "vertical",
  slidesPerView: 3,
  // height: 49,
  spaceBetween: 18,
  slidesOffsetBefore: 10,
  // slidesOffsetBefore: 39,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


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
  navigation: {
    nextEl: '.swiper-button-n',
    prevEl: '.swiper-button-p',
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


function appendArrow(slides, index) {

}


function appendSlide(slides, index) {
  const mainTab = document.querySelector(".main-visual-tab");
  const slide = document.createElement("li")
  const tabTitle = slides.attributes[1].value;
  const maxCount = mainSwiperSlides.length;
  const nestSlide = slides.querySelectorAll(".swiper-slide");
  nestSlideMaxCount = nestSlide.length;

  const arrowBox = document.createElement("div");
  // const arrowItem = document.createElement("p");

  arrowBox.className = "arrow-box"
  // arrowItem.className = "arrow-item"

  const arrowLayout = `
    <p class="arrow arrow--prev">
    </p>
    <p class="arrow arrow--next">
    </p>
  `


  //arrow-box에 추가
  arrowBox.innerHTML = arrowLayout

  

  


  //카운트 백틱
  const count =`
  <span class="count-container">
    <span class="count-${index}">${nestCurrent+1}</span> / <span>${nestSlideMaxCount}</span>
  </span>
  `
  const countNone = `
  <span class="count-container is_disabled">
  </span>
  `

  slide.className = "tab-list"  
  console.log("append", nestSlideMaxCount)
  nestSlideMaxCount <=0 ? slide.innerHTML=tabTitle+ countNone : slide.innerHTML=tabTitle+ count
  slide.style.width = 100/ maxCount+'%'
  
  mainTab.appendChild(slide)
  nestSlideMaxCount <=0 ? slide :slide.appendChild(arrowBox)
  // slide.appendChild(arrowBox)
  
}


const mainSwiperSlides = document.querySelectorAll(".main-swiper > .swiper-wrapper >.swiper-slide");
const mainVisualTab = document.querySelector(".main-visual-tab");
mainSwiperSlides.forEach((slides, index) => {
  const nestSlides = slides.querySelectorAll(".swiper-slide");
  
  appendSlide(slides, index);

  if(nestSlides.length === 0) {
    nestSlideLength.push(0)
  }else {
    nestSlideLength.push(nestSlides.length)
  }

  
  // console.log("nestSlideLength", nestSlideLength)
})




const mySwiper = new Swiper('.main-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
  })
})

const mainVisualArrowBoxs = document.querySelectorAll(".arrow-box");
const nesteds = document.querySelectorAll(".nest-container");
mainVisualArrowBoxs.forEach((mainVisualArrowBox, index) => {
  console.log("mainVisualArrows", mainVisualArrowBox)

  mainVisualArrowBox.children[0].addEventListener("click", (e)=> {
    if(index === mySwiper.activeIndex) {
      nesteds[index].children[1].click();
    }

  })
  mainVisualArrowBox.children[1].addEventListener("click", (e)=> {
    if(index === mySwiper.activeIndex) {
      nesteds[index].children[2].click();
    }
    
    //   console.log("mainVisualArrowBoxChild -click ", e)
    // console.log("mainVisualArrowBoxChild -click index", index)
  })

  // mainVisualArrowBox.children.addEventListener("click", (e)=> {
  //   console.log("mainVisualArrows -click ", e)
  //   console.log("mainVisualArrows -click index", index)
  // })
  
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

reviewId.forEach(id => {
  const userId = id.innerHTML;
  const resultId = userId.slice(0,-3)+'***'
  
  return id.innerHTML = resultId
})
  
//랭크
const ranks = document.querySelectorAll(".rank")
ranks.forEach(rank => {
  const rankData = rank.attributes[1].value;
})

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  gutter: 40
  // columnWidth: 200
});
