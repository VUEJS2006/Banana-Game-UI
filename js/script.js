const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {

    if (mobileMenu.style.right === "0px") {

        mobileMenu.style.right = "-100%";
        overlay.classList.add("hidden");

    } else {

        mobileMenu.style.right = "0";
        overlay.classList.remove("hidden");

    }

}


function toggleSearch() {
    const search = document.getElementById("searchBox");
    search.classList.toggle("hidden");
}



var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

