// click-scroll.js - DÜZELTİLMİŞ VERSİYON
$(document).ready(function () {
    var sections = ['section_1', 'section_2', 'section_3', 'section_4'];
    var navLinks = $('.navbar-nav .nav-item .nav-link');

    // Tıklama ile scroll
    $('.click-scroll').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top - 90;

        $('html, body').animate({
            scrollTop: offset
        }, 300);

        // Tıklanan linki aktif yap
        navLinks.removeClass('active').addClass('inactive');
        $(this).addClass('active').removeClass('inactive');
    });

    // Scroll ile aktif menü güncelleme
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop() + 100; // 100 = navbar yüksekliği + tolerans

        sections.forEach(function (section, index) {
            var currentSection = $('#' + section);
            if (currentSection.length === 0) return;

            var top = currentSection.offset().top;
            var bottom = top + currentSection.outerHeight();

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.removeClass('active').addClass('inactive');
                navLinks.eq(index).addClass('active').removeClass('inactive');
            }
        });

        // En alta gelindiğinde Contact aktif kalsın
        if ($(document).scrollTop() + $(window).height() > $(document).height() - 50) {
            navLinks.removeClass('active').addClass('inactive');
            navLinks.eq(3).addClass('active').removeClass('inactive'); // Contact
        }
    });

    // Sayfa yüklendiğinde ilk aktif
    navLinks.addClass('inactive');
    navLinks.eq(0).addClass('active').removeClass('inactive');
});