


const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".projects-layer", {
  duration: 1000,
  interval: 500,
});


ScrollReveal().reveal(".projects-box", {
  duration: 1000,
  interval: 500,
});
ScrollReveal().reveal(".input-box", {
  duration: 1000,
  interval: 500,
});

const readMoreLink = document.querySelectorAll('.about-btn');
const hiddenText = document.querySelectorAll('.hidden-text');

readMoreLink.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    hiddenText[index].style.display = 'block';
    button.style.display = 'none';
  });
});



let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const typed=new Typed('.multiple-text' ,{
  strings: ['Java Developer', 'Web Designer'  , 'Data Analyst'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});




