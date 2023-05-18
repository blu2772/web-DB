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
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight-300;
    var progress = (scrollTop / scrollHeight) * 100;


    if(progress < 25){
      sidebar.style.position = "absolute";
      sidebar.style.top = "100vh";
      progressBar.style.height = progress + "%";
        
    }else if(progress < 99){
      sidebar.style.position = "fixed";
      sidebar.style.top = "0";
      progressBar.style.height = progress + "%";
    }else{
        sidebar.style.position = "absolute";
        sidebar.style.top = "400vh"
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