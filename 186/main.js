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