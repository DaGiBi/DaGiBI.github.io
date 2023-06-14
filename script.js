// smooth scrolling reveal
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    
    for( let i = 0; i < reveals.length; i++){
        if(reveals[i].getBoundingClientRect().top < window.innerHeight){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Smooth scrolling to sections on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId == "#home"){
        scrollDownButton.classList.remove('hide');
      }
      const targetSection = document.querySelector(targetId);
      
      targetSection.scrollIntoView({ behavior: 'smooth' });
  
      // Add active class to the clicked navigation link
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      link.classList.add('active');
    });
  });

// navigation active
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollButton = document.querySelector('.scroll-down-button');

  function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
        
        // Hide scroll button if scrolled to last section
    if (index === 0) {
        scrollButton.classList.remove('hide');
    } else {
        scrollButton.classList.add('hide');
    }
    
  }

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);

// navigation button

const scrollDownButton = document.querySelector('.scroll-down-button');

scrollDownButton.addEventListener('click', () => {
  scrollDownButton.classList.add('hide');
});