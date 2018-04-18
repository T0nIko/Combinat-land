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

$(document).ready( function() {
    var i = 0;
    var tumyukseklik = 0;
    var yukseklik = $('#slider .slide').height();

    $('#slider').css('height', ($('#slider .slide').length * yukseklik));
    function animasyon(px){
        $('#slider').stop(false, false).animate({
            top: -px
        }, 300);
    }

    $('#sayfalama a').click(function(){
        var index = $(this).index();
        pozisyon = index * yukseklik;
        animasyon(pozisyon);
        if(index == $('#slider .slide').length - 1){
            i = 0;
        }else{
            i = index + 1;
        }
        return false;
    });

    var zamanlayici = setInterval(function() {
        tumyukseklik = i * yukseklik;
        if(i == $('#slider .slide').length - 1){
            i = -1;
        }
        animasyon(tumyukseklik);
        i++;
    }, 2000);
});
