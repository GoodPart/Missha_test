import Swiper from 'swiper';
import Masonry from 'masonry-layout'

var nestCurrent, nestTotal;



const freeSwiper = new Swiper('.free-swiper', {
    spaceBetween: 30,
    freeMode: true,
    slidesPerView: 'auto'
})





const nested = new Swiper('.nest-container', {
  nested: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on:{
    init: function() {
      console.log("init", nested)
      console.log("init", document.querySelector(".nest-container"))
      
    },
    slideChange: function() {
      // console.log("change", )
      console.log("change2", this.activeIndex)
      
      return nestCurrent = this.activeIndex;
      
    }
  }
});

// nested.init(
  // console.log("nested.current", nested),
  // console.log("nested-slides.length", nested.slides.length),
  
  // console.log("nestTotal", nestTotal)
// )

// nested.updateSlides(
//   console.log("nested updated",nested)
// )

// console.log("bullets",mySwiper.pagination.bullets[1])

const mainSwiperPagination = document.querySelector(".main-swiper__pagination")
const msps= mainSwiperPagination.querySelectorAll("span")
const testNestedNumber = [4,2,5,1,0];
// console.log("mainSwiperPagination", mainSwiperPagination)
// console.log("msps", msps)

// msps.forEach((msp, index)=> {
//   console.log("nestCurrent", nestCurrent)
//   // msp.innerHTML = testNestedNumber[index];
//   // msp.innerHTML = `${nestCurrent} / ${testNestedNumber[index]}`;
//   // nestCurrent
//   console.log("asdasdasdasdasd", nestCurrent)
// })
console.log("nestCurrentnestCurrent",nested.nestCurrent)
// console.log("nestCurrentnestCurrent",nested[1].slides)

const mySwiper = new Swiper('.main-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    clickable: true,
    renderBullet: function(index, className, nestCurrent) {
      return '<span class="' + className + '">' + nestCurrent +'/'+ testNestedNumber[index] + '</span>';
    }
  },
  // nested: true
});



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

const moduleNavigation = document.querySelector(".module--navigation");
const moduleList = moduleNavigation.querySelectorAll(".navigation-list");
// console.log("moduleNavigation",moduleNavigation)
// console.log("moduleList",moduleList)

moduleList.forEach( module=> {
  module.addEventListener("click", e=> {
    e.preventDefault()
      // console.log("module", module)

      // console.log("asdasdasd", e)
      // console.log("asdasdasd", e.path)

      // moduleList.forEach(module => {
      //   setTimeout(()=> {

      //     module.classList.contains("is_active")? module.classList.remove("is_active") : module.classList.add("is_active")
      //   },1000)
      // })
      
        // for(var i = 0; i<moduleList.length; i++) {
        //   if(moduleList[i].classList.contains("is_active") ) {
        //     module.classList.remove("is_active")
        //     // console.log("active 제거")
        //   }else {
        //     // console.log("active 추가")
        //     module.classList.add("is_active")
        //   }

        // }

      
      // ? module.classList.remove("is_active") : module.classList.add("is_active")

  })

  
})




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
  console.log(rankData)
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



