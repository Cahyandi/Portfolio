const sections = document.querySelectorAll('section');
const navlia = document.querySelectorAll('nav .container ul li');


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
            li.classList.remove('active');
            if (li.classList.contains(current)) {
                li.classList.add('active');
            }
            })
    })  


    
//     // Hamburger menu
//     const hamburgerMenu = document.querySelector("#hamburger-menu");
//     const overlay = document.querySelector("#overlay");
//     const nav1 = document.querySelector("#nav-1");
//     const nav2 = document.querySelector("#nav-2");
//     const nav3 = document.querySelector("#nav-3");
//     const nav4 = document.querySelector("#nav-4");
//     const nav5 = document.querySelector("#nav-5");
//     const nav6 = document.querySelector("#nav-6");
//     const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];

    
// // Control Navigation Animation
// function navAnimation(val1, val2) {
//     navItems.forEach((nav, i) => {
//       nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
//     });
//   }
  
//   function toggleNav() {
//     // Toggle: Hamburger Open/Close
//     hamburgerMenu.classList.toggle("active");
  
//     //   Toggle: Menu Active
//     overlay.classList.toggle("overlay-active");
  
//     if (overlay.classList.contains("overlay-active")) {
//       // Animate In - Overlay
//       overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  
//       // Animate In - Nav Items
//       navAnimation("out", "in");
//     } else {
//       // Animate Out - Overlay
//       overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  
//       // Animate Out - Nav Items
//       navAnimation("in", "out");
//     }
//   }
  
//   // Events Listeners
//   hamburgerMenu.addEventListener("click", toggleNav);
//   navItems.forEach((nav) => {
//     nav.addEventListener("click", toggleNav);
//   });
  