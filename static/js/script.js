// MOBILE MENU
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}

// SEARCH BOX
function toggleSearch() {
    const search = document.getElementById("searchBox");
    search.classList.toggle("hidden");
}
tailwind.config = {
    theme: {
        extend: {
            colors: {
                neoYellow: "#EFFF00",
                neoPurple: "#6C2BD9",
                darkBg: "#0F0F1A"
            }
        }
    }
}
