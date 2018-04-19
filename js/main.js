// Анимация якорей
$(document).ready(function () {
    // Для меню и соответствующих блоков
    $('a.nav-item-link').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
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

// Open reserved's pop-up
$(document).ready(function () {
    $('#aside_btn').click(function () {
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
    });

    $('#pop_up_btn').click(function () {
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
    });

    $('#reserve_btn').click(function () {
        $('#pop_up').toggleClass('pop-up--active');
        $('.aside').toggleClass('aside--active');
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