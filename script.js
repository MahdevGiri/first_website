/* script.js */

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  };
  
  navSlide();
  
  const slides = document.querySelectorAll('.slide');
  
  const autoSlide = () => {
    const active = document.querySelector('.active');
    const activeIndex = Array.from(slides).indexOf(active);
  
    slides[activeIndex].classList.remove('active');
    slides[(activeIndex + 1) % slides.length].classList.add('active');
  };
  
  setInterval(autoSlide, 5000);
  