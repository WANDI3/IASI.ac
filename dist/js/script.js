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


// --- SCRIPT AUTOMATIC SLIDER DOSEN (SETIAP 5 DETIK) ---
const sliders = document.querySelectorAll('.dosen-slider-wrapper');

sliders.forEach((slider) => {
    let currentIndex = 0;
    const cards = slider.querySelectorAll('.pimpinan-card');
    
    // Fungsi untuk menggeser slide
    function geserDosen() {
        const cardStyle = window.getComputedStyle(cards[0]);
        const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginRight || 0);
        
        // Menghitung jumlah kartu maksimal yang bisa digeser berdasarkan lebar kontainer luar
        const visibleCards = Math.round(slider.parentElement.offsetWidth / cardWidth);
        const maxIndex = cards.length - visibleCards;

        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Kembali ke kartu pertama jika sudah mentok di ujung kanan
        }

        // Jalankan pergeseran horizontal menggunakan CSS Translate
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Set interval pergeseran otomatis setiap 5000 milidetik (5 detik)
    setInterval(geserDosen, 5000);
});