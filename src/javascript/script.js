const btnMobile = document.getElementById('mobile_btn')
const mobileMenu = document.getElementById('mobile_menu')

btnMobile.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active')

    const icon = btnMobile.querySelector('i');

    if (icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    } else {
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    }

})

function scrollAnimation(){
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function (){

        const scrollPosition = window.scrollY - header.offsetHeight;

        if (scrollPosition <= 0){
            header.classList.remove('header-move');
        } else {
            header.classList.add('header-move')
        }

    })
}






document.addEventListener('DOMContentLoaded', ()=>{
    scrollAnimation();
})