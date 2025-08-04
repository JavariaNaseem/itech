// navbar
 function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default navigation
    this.parentElement.classList.toggle('open');
  });
});
// Toggle main menu
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }

  // Toggle Services dropdown on click
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent going to "#"
        this.parentElement.classList.toggle('open');
      });
    });
  });

  //hero
   const text = [
  "Innovating the Future",
  "Empowering Your Digital Growth",
  "Transforming Ideas into Reality"
];
let count = 0, index = 0;
const typingElement = document.querySelector('.typing-text');

function type() {
  if (count === text.length) count = 0;
  let currentText = text[count];
  let letter = currentText.slice(0, ++index);
  typingElement.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
}
document.addEventListener('DOMContentLoaded', type);
    //services
    const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card);
});

    

    //why itech//
   document.addEventListener("DOMContentLoaded", function () {
  const text = "Why Choose iTech Search?";
  const typingSpeed = 100;  
  const erasingSpeed = 50;  
  const delayBetween = 1500; 
  const typingElement = document.getElementById("typing-text");
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting && index <= text.length) {
      typingElement.textContent = text.substring(0, index++);
      setTimeout(typeEffect, typingSpeed);
    } 
    else if (isDeleting && index >= 0) {
      typingElement.textContent = text.substring(0, index--);
      setTimeout(typeEffect, erasingSpeed);
    }
    else if (index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetween);
    } 
    else if (index < 0) {
      isDeleting = false;
      setTimeout(typeEffect, typingSpeed);
    }
  }

  typeEffect();
});