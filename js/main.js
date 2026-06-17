$(document).ready(function(){

    let
    btnShowHideMenu = jQuery('#header #top-right .btn-menu'),
    btnCloseMenu = jQuery('#header #top-right .btn-close'),
    topMenu = jQuery('#header #top-nav-menu'),
    windowWidth = Number($(document).width());

    if( windowWidth > 768 ) return false;
    //---------------------------

    //---------------------------
    window.rememberStateForMenuAgb = 'hide';
    topMenu.css('display', 'none');
    topMenu.css('width', windowWidth+'px');
    topMenu.css('left', '-'+windowWidth+'px');
    topMenu.css('display', 'block');
    //---------------------------

    btnShowHideMenu.click(function(){

        if(window.rememberStateForMenuAgb == 'show'){

            topMenu.animate({
                left: -windowWidth,
            }, 200, "linear", function() {
                window.rememberStateForMenuAgb = 'hide';
            });
        }else{

            topMenu.animate({
                left: 0,
            }, 200, "linear", function() {
                window.rememberStateForMenuAgb = 'show';
            });
        }
    });

    btnCloseMenu.click(function(){

        topMenu.animate({
            left: -windowWidth,
        }, 200, "linear", function() {
            window.rememberStateForMenuAgb = 'hide';
        });
    });
});