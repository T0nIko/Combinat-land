// Первая карусель на главной
var swiper = new Swiper('.swiper-container-1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'vertical',
    navigation: {
        nextEl: '#arrow_prev_1',
        prevEl: '#arrow_next_1',
    },
});