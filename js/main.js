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