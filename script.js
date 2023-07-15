const sidebar_wrapper=document.querySelector('.sidebar-container-wrapper')

const close_icons=document.querySelector('#iconclose')


const navLinks=document.querySelectorAll('.item-content')
const mobileLinks=document.querySelectorAll('.item-content-sidebar')

const menuBtn = document.querySelector(".mobile-menu-btn");





function close_sidebar(){
    if(sidebar_wrapper.classList.contains('show-sidebar')){
        sidebar_wrapper.classList.remove('show-sidebar')
    }
}

function show_sidebar(){
    if(!sidebar_wrapper.classList.contains('show-sidebar')){
        sidebar_wrapper.classList.add('show-sidebar')
    }
}

  
navLinks.forEach((link) => {
    const subMenu = link.querySelector(".sub-Menu");
    link.addEventListener("click", () => {
      link.classList.toggle("active");
      subMenu.classList.toggle("active-menu");
    });
});

mobileLinks.forEach((link) => {
    const subMenu = link.querySelector(".mobile-sub");
    link.addEventListener("click", () => {
      link.classList.toggle("active");
      subMenu.classList.toggle("active-menu");
    });
});


