let text = document.getElementById('text');
let sub = document.getElementById('sub');

window.addEventListener('scroll',function() {
    let value = window.scrollY;

    text.style.marginTop = value *1.5 + 'px';
    sub.style.marginTop = value *1.5 + 'px';
});

$('.btn_nav').click(function() {
    // animate content
    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
  
  });
  
  window.onscroll = function() {myFunction()};

var navigation a= document.getElementById("navigation a");
var navigation a = navigation.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("navigation a")
  } else {
    navigation.classList.remove("navigation a");
  }
}