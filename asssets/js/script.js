$(document).ready(function(){
    $(".toggle-icon").click(function(){
        $(".menu-items").slideToggle();
        return false;
    });
    //Sticky Header 
    $(window).scroll(function(){
        if ($(document).scrollTop () < 1){
            $(".header-area").removeClass("fixed");
            $(".header-area").removeClass("active-bg");
        }
        else if ($(document).scrollTop () > 300){
            $(".header-area").removeClass("fixed");
            $(".header-area").addClass("active-bg");
        }
        else{
            $(".header-area").addClass("fixed");
        }
    });

    // owl carousel
    $('.slider-items').owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:false,
        autoplay:true,
    })
    // service owl Carousel
    $('.service-items').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

   // Project Owl carousel 
    $('.portfolio-content').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30,
        dots:true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    // Counter Up
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    // Wow Js
    new WOW().init();

});