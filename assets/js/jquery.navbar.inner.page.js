$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $( ".header #background").fadeIn();
    }
    else {
        console.log('there');
        $(".header #background").fadeOut();
    }
});