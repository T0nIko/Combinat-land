// Третья карусель на главной
var swiper_3 = new Swiper('.swiper-container-3', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '#arrow_prev_3',
        prevEl: '#arrow_next_3',
    },
});