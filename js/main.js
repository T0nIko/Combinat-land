// Анимация якорей
$(document).ready(function () {
    // Для навигации
    $('a.nav-item-link').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 20;
        $('html').animate({
                scrollTop: destination
            }
            , 350);
        return false;
    });
    // Для мобильной навигации
    $('a.nav-mob-item-link').click(function () {
        $('#mob_menu').removeClass('nav--active');
        $('.burger').removeClass('cross');
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 70;
        $('html').animate({
                scrollTop: destination
            }
            , 350);
        return false;
    });
    // Для меню
    $('a.menu-item-link').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 50;
        $('html').animate({
                scrollTop: destination
            }
            , 350);
        return false;
    });
    // Для кнопки скролла вверх
    $('a.button-up').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({
                scrollTop: destination
            }
            , 350);
        return false;
    });

});

// Для кнопки скролла вверх
function toTop() {
    let destination = $('#top').offset().top;
    $('html').animate({
            scrollTop: destination
        }
        , 350);
    return false;
}

/*--------------------------------------------------------------------------------------------------------------------*/

// Стили для кнопки скролла вверх
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a.button-up').addClass('active');
        } else {
            $('a.button-up').removeClass('active');
        }
    });
});

/*--------------------------------------------------------------------------------------------------------------------*/

// N способов скрыть попап
$(document).ready(function () {
    // Если жмякнули на кнопку с сайд-бара
    $('.aside-btn').click(function (e) {
        e.preventDefault();
        $('#pop_up').addClass('pop-up--active');
        $('.aside').addClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на крестик внутри поп-апа
    $('#pop_up_btn').click(function (e) {
        e.preventDefault();
        $('#pop_up').removeClass('pop-up--active');
        $('.aside').removeClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на кнопку на саааамом последнем экране (контакты)
    $('#reserve_btn').click(function (e) {
        e.preventDefault();
        $('#pop_up').addClass('pop-up--active');
        $('.aside').addClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на кнопку "закрыть" после отправки формы
    $('#close_pop_up').click(function (e) {
        e.preventDefault();
        $('#pop_up').removeClass('pop-up--active');
        $('.aside').removeClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
        $('#mob_menu').removeClass('nav--active');
        $('.burger').removeClass('cross');
    });
});

// Если мимо жмякнули. Пока недоступно из-за проблем с календарем(
/*$(document).ready(function () {
    $(function ($) {
        $(document).mouseup(function (e) {
            let popup = $('#pop_up');
            if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                popup.removeClass('pop-up--active');
                $('#last_pop_up').removeClass('last-pop-up--active');
            }
        });
    });
});*/

/*--------------------------------------------------------------------------------------------------------------------*/

// Валидация
$(document).ready(function () {
    $('#form_btn').click(function () {
        $('#order_form input').each(function() {
            if ($('#order_form input').val() === '') {
                $('#order_form input').addClass('empty');
                setTimeout( function () {
                    $('#order_form input').removeClass('empty');
                }, 410);
            }
            else if ($('#order_form input#date').val() === '') {
                $('#order_form input').addClass('empty');
                setTimeout( function () {
                    $('#order_form input').removeClass('empty');
                }, 410);
            }
            else if ($('#order_form input#name').val() === '') {
                $('#order_form input').addClass('empty');
                setTimeout( function () {
                    $('#order_form input').removeClass('empty');
                }, 410);
            }
            else if ($('#order_form input#phone').val() === '') {
                $('#order_form input').addClass('empty');
                setTimeout( function () {
                    $('#order_form input').removeClass('empty');
                }, 410);
            }
            else if ($('#order_form input#email').val() === '') {
                $('#order_form input').addClass('empty');
                setTimeout( function () {
                    $('#order_form input').removeClass('empty');
                }, 410);
            }
            else {
                // После валидации и отправки формы
                setTimeout( function () {
                    $('#last_pop_up').addClass('last-pop-up--active');
                    $('#order_form input').val(''); // Очистить все формы
                }, 100);
            }
        });
    });
});


/*--------------------------------------------------------------------------------------------------------------------*/

// Показать блок с временем и датой, анимация
$(document).ready(function () {
    $('#date').click(function () {
        $('.data__container').addClass('data--active');
        $('.data__container').removeClass('data--hide');
    });
});

// Чтобы закрыть окно с датой и временем
$(document).ready(function () {

    $(function ($) {
        $(document).mouseup(function (e) {
            let popup = $('#calendar');
            if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                popup.removeClass('pop-up--active');
                $('.data__container').removeClass('data--active');

                // Подчистить стили после выбора
                if ($('td.day').hasClass('active-day')) {
                    $('td.day').removeClass('active-day');
                }

            }
        });
    });
});

/*--------------------------------------------------------------------------------------------------------------------*/

// Открыть мобильное меню
$(document).ready(function ($) {
    $('.burger').click(function () {
        if (!$('.burger').hasClass('cross')) {
            $('.burger').addClass('cross');
            $('#mob_menu').addClass('nav--active');
            $('.aside').addClass('aside--active');
            $('.footer-btn-wrapper').css({display: 'none'});
        }
        else {
            $('#mob_menu').removeClass('nav--active');
            $('.burger').removeClass('cross');
            $('.footer-btn-wrapper').css({display: 'block'});
            $('#last_pop_up').removeClass('last-pop-up--active');
            $('#pop_up').removeClass('pop-up--active');
        }
    });
});

/*--------------------------------------------------------------------------------------------------------------------*/

// Какая-то неудача(((
$(document).ready(function () {
    let count = 1;
    $('#count').attr('value', count);

    $('#add').click(function () {
        $('#count').attr('value', count++);
    });

    $('#remove').click(function () {
        let regressCount = count--;
        if (regressCount >= 1) {
            $('#count').attr('value', regressCount);
        }
        else {
            $('#count').attr('value', 1);
        }
    });
});

/*--------------------------------------------------------------------------------------------------------------------*/

// Анимация блоков только для дисплеев, чья ширина больше или равна 768
$(document).ready(function () {
    if ($(window).width() >= '768') {

        $(window).scroll(function (e) {
            parallaxScroll();
        });

        function parallaxScroll() {
            let scrolled = $(window).scrollTop();

            // Блиц, Блиц - скорость без границ
            this.speed03 = .05 * $(this).scrollTop();
            this.speed1 = .1 * $(this).scrollTop();
            this.speed2 = .2 * $(this).scrollTop();
            this.speed3 = .15 * $(this).scrollTop();
            this.speed4 = .4 * $(this).scrollTop();

            // Первый заголовок
            $('#parallax_caption_1').css({
                transform: "translate3d(0," + this.speed3 + "px,0)",
                "-webkit-transform": "translate3d(0," + this.speed3 + "px,0)",
                "-moz-transform": "translate3d(0," + this.speed3 + "px,0)",
                "-o-transform": "translate3d(0," + this.speed3 + "px,0)",
                "-ms-transform": "translate3d(0," + this.speed3 + "px,0)"
            });
            // Белый блок на первом экране
            $('#parallax_obj_1').css({
                transform: "translate3d(0%," + this.speed1 + "px,0)",
                "-webkit-transform": "translate3d(0%," + (-1) * this.speed1 + "px,0)",
                "-moz-transform": "translate3d(0%," + (-1) * this.speed1 + "px,0)",
                "-o-transform": "translate3d(0%," + (-1) * this.speed1 + "px,0)",
                "-ms-transform": "translate3d(0%," + (-1) * this.speed1 + "px,0)"
            });
            // Блюдо
            $('#menu-bg').css({
                transform: "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-webkit-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-moz-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-o-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-ms-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)"
            });
            // Креведка н.1
            $('#action-bg').css({
                transform: "translate3d(0," + this.speed1 + "px,0)",
                "-webkit-transform": "translate3d(0," + this.speed1 + "px,0)",
                "-moz-transform": "translate3d(0," + this.speed1 + "px,0)",
                "-o-transform": "translate3d(0," + this.speed1 + "px,0)",
                "-ms-transform": "translate3d(0," + this.speed1 + "px,0)"
            });
            // Креведка н.2
            $('#slider-bg').css({
                transform: "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-webkit-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-moz-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-o-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)",
                "-ms-transform": "translate3d(0," + (-1) * this.speed2 + "px,0)"
            });
        }
    }
});

/*--------------------------------------------------------------------------------------------------------------------*/

