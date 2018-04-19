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
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на крестик внутри поп-апа
    $('#pop_up_btn').click(function () {
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на кнопку на саааамом последнем экране (контакты)
    $('#reserve_btn').click(function () {
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если жмякнули на кнопку "закрыть" после отправки формы
    $('#close_pop_up').click(function () {
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
        $('#last_pop_up').removeClass('last-pop-up--active');
    });

    // Если мимо жмякнули
    $(function($){
        $(document).mouseup(function (e){
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

