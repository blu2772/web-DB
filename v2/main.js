document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.logo');
  
    if (box) {
      document.addEventListener('mousemove', function(event) {
        
        const { clientX, clientY } = event;
        const { left, top, width, height } = box.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
  
        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;
  
        const shadowX = offsetX * 0.05;
        const shadowY = offsetY * 0.05;
  
        box.style.setProperty('--shadow-x', `${shadowX}px`);
        box.style.setProperty('--shadow-y', `${shadowY}px`);
      });
    }
  });
  
function nav(){
    var progressBar = document.querySelector(".prog");
    var sidebar = document.querySelector(".sidebar");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight1 = document.documentElement.scrollHeight - document.documentElement.clientHeight-300;
    var scrollHeight2 = 300;
    var progress = (scrollTop / scrollHeight1) * 100;
    var progress2 = 1-((scrollTop-(visualViewport.height*4))/scrollHeight2)


    if(progress < 25){
      sidebar.style.opacity = (progress/250*10);
      progressBar.style.height = progress + "%";
        
    }else if(progress < 100){
      sidebar.style.opacity = 1;
      sidebar.style.position = 'fixed';
      sidebar.style.top = '10vh';
      progressBar.style.height = progress + "%";
    }else{
      sidebar.style.opacity = progress2
    }
    if(progress > 60){
      document.querySelector('#S1').style.width = '90%';
      document.querySelector('#S2').style.width = '60%';
      document.querySelector('#S3').style.width = '50%';
      document.querySelector('#S4').style.width = '75%';
      document.querySelector('#S5').style.width = '85%';
    }else{
      document.querySelector('#S1').style.width = '0%';
      document.querySelector('#S2').style.width = '0%';
      document.querySelector('#S3').style.width = '0%';
      document.querySelector('#S4').style.width = '0%';
      document.querySelector('#S5').style.width = '0%';
    }
    
    if(progress > 23 && progress <27){
      document.querySelector('.pg1').style.backgroundColor = '#13789d';
      document.querySelector('.pg1').style.width ='15px';  
      document.querySelector('.pg1').style.height ='15px';
    }else{
      document.querySelector('.pg1').style.backgroundColor = '#666565';
      document.querySelector('.pg1').style.width ='10px';  
      document.querySelector('.pg1').style.height ='10px';
    }
    if(progress > 48 && progress <52){
      document.querySelector('.pg2').style.backgroundColor = '#13789d';
      document.querySelector('.pg2').style.width ='15px';  
      document.querySelector('.pg2').style.height ='15px';
    }else{
      document.querySelector('.pg2').style.backgroundColor = '#666565';
      document.querySelector('.pg2').style.width ='10px';  
      document.querySelector('.pg2').style.height ='10px';
    }
    if(progress > 73 && progress <77){
      document.querySelector('.pg3').style.backgroundColor = '#13789d';
      document.querySelector('.pg3').style.width ='15px';  
      document.querySelector('.pg3').style.height ='15px';
    }else{
      document.querySelector('.pg3').style.backgroundColor = '#666565';
      document.querySelector('.pg3').style.width ='10px';  
      document.querySelector('.pg3').style.height ='10px';
    }
    if(progress > 98 && progress < 102){
      document.querySelector('.pg4').style.backgroundColor = '#13789d';
      document.querySelector('.pg4').style.width ='15px';  
      document.querySelector('.pg4').style.height ='15px';
    }else{
      document.querySelector('.pg4').style.backgroundColor = '#666565';
      document.querySelector('.pg4').style.width ='10px';  
      document.querySelector('.pg4').style.height ='10px';
    }
}

function submitForm() {
    var form = document.getElementById("form");
    var formData = new FormData(form);
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send-email.php", true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Hier können Sie mit der Antwort arbeiten
        document.querySelector(".respons").innerHTML = xhr.responseText;
        
      }
    };
  
    xhr.send(formData);
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
  
  