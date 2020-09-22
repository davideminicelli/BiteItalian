// Collapses menu for small devices
if (window.screen.width<=600) {
    document.getElementById('menu-list').classList.add("collapsed");
}



// Collapser function
function collapser(toCollapse) {
    if (toCollapse.classList.contains("collapsed")) {
        toCollapse.classList.remove("collapsed")
    } else {
        toCollapse.classList.add("collapsed")
    }
    console.log("funziona");
};



// When the user scrolls the page, execute sticker
window.onscroll = function() {sticker()};

var navbar = document.getElementById("main-menu");

var sticky = navbar.offsetTop;

function sticker() {
    if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}