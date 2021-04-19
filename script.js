const burgerIcon = document.querySelector('.burger-icon');
const toggleNav = document.querySelector('.toggle-nav-bar');
const navLinks = document.querySelectorAll('.toggle-nav-link');

let toggle = false;

// fade burgerIcon border in
burgerIcon.addEventListener('mouseover', () => {
  burgerIcon.style.animation = "burgerIconBorder 1s";
  burgerIcon.style.border = "1px solid rgb(0, 150, 255)";
});

// fade burgerIcon border out
burgerIcon.addEventListener('mouseout', () => {
  burgerIcon.style.animation = "burgerIconNoBorder 0.5s";
  burgerIcon.style.border = "1px solid white";
});


burgerIcon.addEventListener('click', () => {
  if(toggle === false){
    toggleNav.style.display = "block";
    burgerIcon.style.animation = "rotate180deg 1s";
    burgerIcon.style.transform = "rotate(180deg)";
    toggleNav.style.animation = "toggleNavTrue 1s";
    toggleNav.style.left = "0px";
    
    toggle = true;

  } else if(toggle === true){
    burgerIcon.style.animation = "rotate-180deg 1s";
    burgerIcon.style.transform = "rotate(180deg)";
    toggleNav.style.animation = "toggleNavFalse 1s";
    toggleNav.style.left = "-200px";

    function hideToggleNav(){
      toggleNav.style.display = "none";
    }
    setTimeout(hideToggleNav, 1000); 

    toggle = false;
  }
});


const toggleNavLinksOnMouseOver = (event) => {
  event.target.style.animation = "onMouseOverToggleNavLinksShiftRight 0.5s, onMouseOverToggleNavLinksColorChange 0.5s, onMouseOverToggleNavLinksBackgroundColorChange 0.5s";
  event.target.style.paddingLeft = "20px";
  event.target.style.color = "snow";
  event.target.style.backgroundColor = "rgb(173, 173, 173)"
}

const onMouseOver = (e) => {
  e.addEventListener('mouseover', toggleNavLinksOnMouseOver);
} 

const toggleNavLinksOnMouseOut = (event) => {
  event.target.style.animation = "onMouseOutToggleNavLinksShiftLeft 0.5s, onMouseOutToggleNavLinksColorChange 0.5s, onMouseOutToggleNavLinksBackgroundColorChange 0.5s";
  event.target.style.paddingLeft = "10px";
  event.target.style.color = "lightslategrey";
  event.target.style.backgroundColor = "lightgrey";
}

const onMouseOut = (e) => {
  e.addEventListener('mouseout', toggleNavLinksOnMouseOut);
} 


navLinks.forEach(element => onMouseOver(element));
navLinks.forEach(element => onMouseOut(element));