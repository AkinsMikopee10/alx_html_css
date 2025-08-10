document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav_links");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("show");
    });
});