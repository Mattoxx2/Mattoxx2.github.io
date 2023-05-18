const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector
(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")
    
    const ariaToggle = hamburgerToggler.getAttribute
    ("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
    console.log(entries)
    if (entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)

const items = document.querySelectorAll('gif');
const nbSlide = items.lenght;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    }else {
        count = 0;
    }

    items[count].classList.add('active')
}

suivant.addEventListener('click', slideSuivante)