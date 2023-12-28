let hamButton = document.getElementById('menu-button')
let crosshambtn = document.getElementById('cross-menu-button')
let responsiveNav = document.getElementById('responsive-header')
let header = document.getElementsByClassName('header')[0]
let content = document.getElementsByClassName('content')[0]
let scrollToTop = document.getElementsByClassName('scroll-top-btn')[0]
hamButton.addEventListener('click', ()=>{
    responsiveNav.style.display='block'
    header.style.boxShadow='none'
    hamButton.style.display='none'
    crosshambtn.style.display='block'
    content.style.marginTop='0vh'
})
crosshambtn.addEventListener('click', ()=>{
    responsiveNav.style.display='none'
    header.style.boxShadow='0px 0px 5px rgb(180, 178, 178)'
    crosshambtn.style.display='none'
    hamButton.style.display='block'
    content.style.marginTop='15vh'
})
function scrollFunc() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    scrollToTop.style.display='block'
}
window.onscroll = function(){
    scrollFunc()
}