// Четвертая карусель на главной
var swiper_4 = new Swiper('.swiper-container-4', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'vertical',
    navigation: {
        nextEl: '#arrow_prev_4',
        prevEl: '#arrow_next_4',
    },
});