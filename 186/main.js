const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtni = document.querySelector('.toggle_btn i');
const dropdown = document.querySelector('.dorp_menu');

toggleBtn.onclick = function (){
  dropdown.classList.toggle('open');
  const isOpen = dropdown.classList.contains('open');

  if(isOpen){
    toggleBtn.style.backgroundImage = 'url("img/icons8-close-100.png")'
  }else{
    toggleBtn.style.backgroundImage = 'url("img/icons8-menü-abgerundet-100.png")'
  }

}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  // Überprüft, ob das Element horizontal sichtbar ist
  var horizontalVisible = rect.left < windowWidth && rect.right > 0;

  // Überprüft, ob das Element vertikal sichtbar ist (nur der obere Teil)
  var verticalVisible = rect.top < windowHeight 

  return horizontalVisible && verticalVisible;
}

function animateOnScroll() {
  var elements = document.querySelectorAll('.animateT, .animateB, .animateR, .animateL, .animate');

  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }else element.classList.remove('visible');
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);