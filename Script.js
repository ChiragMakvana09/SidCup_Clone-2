var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x +15 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
    // console.log(elem)
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var ArrowHover = document.querySelectorAll(".arrow")
ArrowHover.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

document.querySelector('.arrow').addEventListener('click', function() {
        window.location.href = "#page2"; // Scroll to #page2 on click
    });

gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger : {
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to ("#main", {
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        start : "top -25%",
        end : "top -70%",
        scrub : 2
    }
})

gsap.from("#aboutUS img, #aboutUS-in" ,{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger : {
        trigger:"#aboutUS",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

// gsap.from(".card" ,{
//     y:50,
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger : {
//         trigger:".card",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scrub:2
//     }
// })
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})

var swiper = new Swiper('.swiper-container', {
        loop: true,
        loopedSlides: 4,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

