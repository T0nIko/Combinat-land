// Вторая карусель на главной
var swiper_2 = new Swiper('.swiper-container-2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'vertical',
    navigation: {
        nextEl: '#arrow_prev_2',
        prevEl: '#arrow_next_2',
    },
});