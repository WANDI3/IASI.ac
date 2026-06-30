/* const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    
    if (window.scrollY >  500) {
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }

}); */

const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    // Mengubah window.scroll menjadi window.scrollY
    if (window.scrollY > 500) { 
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }
});

// Logika Buka-Tutup Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const navbarMenu = document.getElementById("navbar-menu");

menuToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

// Otomatis menutup menu kembali ketika salah satu link menu diklik
const menuLinks = document.querySelectorAll(".navbar-box .menu li a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
    });
});