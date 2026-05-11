const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".effect");

menuBtn.addEventListener("click", function () {

    navLinks.forEach((link) => {
        link.classList.toggle("active");
    });

}); 

const footerTitles = document.querySelectorAll(".footer-title");

footerTitles.forEach((title) => {

    title.addEventListener("click", () => {

        title.parentElement.classList.toggle("active");

    });

});