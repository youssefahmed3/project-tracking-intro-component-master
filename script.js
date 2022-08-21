const navMenu = document.querySelector('.nav-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuAttr = hamburgerMenu.getAttribute('src');

hamburgerMenu.addEventListener('click', modifyImage);

function modifyImage() {
    if (hamburgerMenu.src.match("images/icon-hamburger.svg")) {
        
        hamburgerMenu.src = "images/icon-close.svg";
        navMenu.style.display = "flex";
        
    }
    else if (hamburgerMenu.src.match("images/icon-close.svg")) {
            console.log('fail');
            hamburgerMenu.src = "images/icon-hamburger.svg";
            navMenu.style.display = "none";
        }

}










/* 
       edit_save.src = "../template/save.png";              */
