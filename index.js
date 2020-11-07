let menuIcon = document.querySelector('.menu-invisible');
let menu = document.querySelector('.nav-wrapper-my');
let menuTextMobile= document.querySelector('.menu-my')

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('menuMobile');
  menuTextMobile.classList.toggle('.menuMobile')
});
