const sections = document.querySelectorAll('section');
const navlia = document.querySelectorAll('nav .navigation ul li');


    window.addEventListener('scroll', ()=> {
        let current = '';

        sections.forEach( section =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
            }
        })
        
        navlia.forEach( li => {
            li.classList.remove('aktif');
            if (li.classList.contains(current)) {
                li.classList.add('aktif')
            }
            })
    })  




    // Hamburger menu
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    const overlay = document.querySelector("#overlay");
    

    

  
  function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");
  
    //   Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
  
    if (overlay.classList.contains("overlay-active")) {
      // Animate In - Overlay
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  
      // Animate In - Nav Items
      navAnimation("out", "in");
    } else {
      // Animate Out - Overlay
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  
      // Animate Out - Nav Items
      navAnimation("in", "out");
    }
  }
  
  // Events Listeners
  hamburgerMenu.addEventListener("click", toggleNav);
  navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });
  