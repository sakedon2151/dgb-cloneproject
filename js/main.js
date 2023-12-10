$(function(){

    // button toggleClass popup
    $(".lang button").click(function(){
        $(".langPopup").toggleClass("active");
    });
    $(".itemBtn").click(function(){
        $(".lineTwo").toggleClass("active");
    });
    $(".snsTab button").click(function(){
        $(".snsTab").toggleClass("active");
    });
    $(".groupTab button").click(function(){
        $(".groupTab").toggleClass("active");
    });
    $(".familyTab button").click(function(){
        $(".familyTab").toggleClass("active");
    });

    // visual swiper
    const swiper = new Swiper('.swiper', {
        speed: 1000,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });

    // visual swiper player
    $(".player button").click(function(){
        $(".player button").addClass("active");
        $(this).removeClass("active");
        if($(".play").hasClass("active")){
            swiper.autoplay.stop();
        } else if($(".pause").hasClass("active")){
            swiper.autoplay.start();
        }
    });

    // menu swap
    $(".newsBtn").click(function(){
        $(".eventBtn").removeClass("activeBtn");
        $(this).addClass("activeBtn");
        $(".bEvent").removeClass("activeList");
        $(".bNews").addClass("activeList");
    });
    $(".eventBtn").click(function(){
        $(".newsBtn").removeClass("activeBtn");
        $(this).addClass("activeBtn");
        $(".bNews").removeClass("activeList");
        $(".bEvent").addClass("activeList");
    });

});


