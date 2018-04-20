// Анимация якорей
$(document).ready(function () {
    // Для меню и соответствующих блоков
    $('a.nav-item-link').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 20;
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
    $('#aside_btn').click(function () {
        $('#pop_up').addClass('pop-up--active');
        $('.aside').addClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на крестик внутри поп-апа
    $('#pop_up_btn').click(function () {
        $('#pop_up').removeClass('pop-up--active');
        $('.aside').removeClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на кнопку на саааамом последнем экране (контакты)
    $('#reserve_btn').click(function () {
        $('#pop_up').addClass('pop-up--active');
        $('.aside').addClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на кнопку "закрыть" после отправки формы
    $('#close_pop_up').click(function () {
        $('#pop_up').removeClass('pop-up--active');
        $('.aside').removeClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });
});

$(document).ready(function () {
    // Если мимо жмякнули
    $(function ($) {
        $(document).mouseup(function (e) {
            let popup = $('#pop_up');
            if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                popup.removeClass('pop-up--active');
                $('#last_pop_up').removeClass('last-pop-up--active');
            }
        });
    });
});

// Валидация

// После валидации и отправки формы
$(document).ready(function () {
    $('#form_btn').click(function () {
        $('#last_pop_up').addClass('last-pop-up--active');
        $(' input ').val('');
    });
});

/*--------------------------------------------------------------------------------------------------------------------*/

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

// Мувы объектов
$(document).ready(function () {

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
        // Второй заголовок
        $('#parallax_caption_2').css({
            transform: "translate3d(0," + this.speed03 + "px,0)",
            "-webkit-transform": "translate3d(0," + this.speed03 + "px,0)",
            "-moz-transform": "translate3d(0," + this.speed03 + "px,0)",
            "-o-transform": "translate3d(0," + this.speed03 + "px,0)",
            "-ms-transform": "translate3d(0," + this.speed03 + "px,0)"
        });

    }
});


