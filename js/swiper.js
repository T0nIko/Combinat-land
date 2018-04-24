var swiper_1 = new Swiper('.swiper-container-1', {
    direction: 'vertical',
    navigation: {
        nextEl: '#arrow_prev_1',
        prevEl: '#arrow_next_1',
    },
});

var swiper_2 = new Swiper('.swiper-container-2', {
    direction: 'vertical',
    navigation: {
        nextEl: '#arrow_prev_2',
        prevEl: '#arrow_next_2',
    },
});

var swiper_3 = new Swiper('.swiper-container-3', {
    direction: 'horizontal',
    navigation: {
        nextEl: '#arrow_prev_3',
        prevEl: '#arrow_next_3',
    },
});

var swiper_4 = new Swiper('.swiper-container-4', {
    direction: 'vertical',
    navigation: {
        nextEl: '#arrow_prev_4',
        prevEl: '#arrow_next_4',
    },
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.prev',
        prevEl: '.next',
    },
});