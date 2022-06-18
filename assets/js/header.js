const sections = document.querySelectorAll('section');
const navlia = document.querySelectorAll('section .container ul li');


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

// Hamburger Menu 
let navbar = document.querySelector('.navbar');
let hamburgerMenu = document.querySelector("#hamburger");

hamburgerMenu.onclick = () => {
    navbar.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
}

// Menutup Class avtive jika user telah mengklik salah satu navbar
window.onscroll = () =>{
    navbar.classList.remove('active');
    hamburgerMenu.classList.remove('active');
}