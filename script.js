
// Collapsing navber after cicking on apropriate section

var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });


// show more/less button function
const showMoreButton = document.getElementById('showMoreButton');
const hiddenRow = document.getElementById('hiddenRow');
let isHidden = true;

    showMoreButton.addEventListener('click', () => {
      if (isHidden) {
        hiddenRow.style.display = 'flex';
        showMoreButton.innerText = 'Show less';
      } else {
        hiddenRow.style.display = 'none';
        showMoreButton.innerText = 'Show more';
      }
      isHidden = !isHidden;
    });  

// Typing animation

var typedn = new Typed(".typing", {
    strings: ["Portfolio Designs", "UI/UX designs", "E-Commerce Sites", "Interactive Web-Sites","User Friendly Apps"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
}
)


// scroll reveal animation

ScrollReveal({
    reset:true,
    distance:'50%',
    duration:1000,
    delay:200
});
ScrollReveal().reveal('.animationB',{origin: 'bottom'});
ScrollReveal().reveal('.animationl',{origin: 'left'});
ScrollReveal().reveal('.animationR',{origin: 'right'});
ScrollReveal().reveal('.animationT',{origin: 'top'});