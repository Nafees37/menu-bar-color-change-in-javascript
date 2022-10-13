const bg_menu = document.getElementById("menu_item");

window.onscroll = function () {
    let menu_colorChange = window.scrollY;

    if ( menu_colorChange >= 100 ) {
        bg_menu.classList.add("bd_colorAdd");
    } else {
        bg_menu.classList.remove("bd_colorAdd");
    }
};
