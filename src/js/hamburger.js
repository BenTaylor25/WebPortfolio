
const toggleButton = document.getElementsByClassName('toggle_button')[0];
const navbarLinks = document.getElementsByClassName('navbar__container')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    console.log("hello?");
})
