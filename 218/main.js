
const listContainer = document.getElementsByClassName("list-container")[0];

function load(){
    var te = document.querySelector(".text");
    var me = document.querySelectorAll("#L");
    setTimeout(() => {
        te.style.opacity = 1;
        te.style.transform="translateY(0)";
        me.forEach(element => {
            element.style.marginLeft="10px";
        });
    }, 1000);
    
}

function togle(){
    const element = document.getElementById("tg");
     element.classList.toggle("active");
}


window.onscroll = function() {
    
    var cover = document.querySelector(".cover");
    progress = (window.scrollY/ ( document.body.scrollHeight - window.innerHeight ) ) * 100;
    if(progress > 20 && progress < 55){
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

    }
    let elementt = document.querySelectorAll(".ani")
 

  elementt.forEach(page => {
        if (page.getBoundingClientRect().top < visualViewport.height-300) {
            page.style.opacity = "1";
     
            
        }else{
            page.style.opacity = "0";
                  
        }
  });

};

function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
  
    var rect = el.getBoundingClientRect();
  
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }