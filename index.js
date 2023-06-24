const menuHamburger = document.querySelector('.repo') 
const navLinks = document.querySelector('.dddd') 

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})