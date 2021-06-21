var myVideo = document.getElementById("video1");
var playButton = document.getElementById("play-video"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

// clients logo slider

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// navigation collapse
function toggle(){
  var x = document.getElementById('mobile-nav')
  var y = document.getElementById('togg')
  if(x.className == 'mobile-nav'){
    x.className = 'mobile-nav closed';
    y.className = 'toggle';
  }
  else{
    x.className = 'mobile-nav';
    y.className = 'toggle-close';
  }
}




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "block";
  }
}

// viewportscroll
ScrollReveal({ reset: true });
//ScrollReveal().reveal('.about-left-content', { delay: 100 });
//ScrollReveal().reveal('.about-right-content', { delay: 200 });
ScrollReveal().reveal('.one', { delay: 400 });
ScrollReveal().reveal('.two', { delay: 800 });
ScrollReveal().reveal('.three', { delay: 1100 });
ScrollReveal().reveal('.use-4', { delay: 300 });
ScrollReveal().reveal('.use-5', { delay: 500 });
ScrollReveal().reveal('.use-6', { delay: 700 });


gsap.registerPlugin(ScrollTrigger);
const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

gsap.utils.toArray('section').forEach((section, index) => {
  const w = section.querySelector('.wrapper');
  const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
  gsap.fromTo(w, { x }, {
    x: xEnd,
    scrollTrigger: {
      trigger: section,
      scrub: 0.5 } });


});
};

