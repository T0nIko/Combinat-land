var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.prev',
        prevEl: '.next',
    },
});