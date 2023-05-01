// #BANNER SWIPER 

let swiper1 = new Swiper(".banner__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 700,
    effect: 'slide',
    ease: 'easeInOut',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

});


// #WORK SWIPER
let swiper2 = new Swiper(".work__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


// #TESTIMONIAL SWIPER
let swiper3 = new Swiper(".testimonial__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// #POPULAR PROGRAM SWIPER
let swiper4 = new Swiper(".popular_program__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});



function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}