$(document).ready(function () {
    $('.mainSlider').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        fade: true,
        easing: 'easeInOutQuart',
        slide: '.mainSlide'
    });
})