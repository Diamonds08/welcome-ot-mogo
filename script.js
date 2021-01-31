var menu_icon = document.getElementById('menu_icon');
console.log(menu_icon);
if (menu_icon){
    menu_icon.onclick = function () {
        var menu = document.getElementById('my_topnav');
        menu.classList.add('open')
    }
}
var menu_icon_close = document.getElementById('menu_icon_close');
console.log(menu_icon);
if (menu_icon_close){
    menu_icon_close.onclick = function () {
        var menu = document.getElementById('my_topnav');
        menu.classList.remove('open')
    }
}
                                      //slider page 5,7
$(document).ready(function(){
    $('.slaider_wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
$(document).ready(function(){
    $('.slaider_page7').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

