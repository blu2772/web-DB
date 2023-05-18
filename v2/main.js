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