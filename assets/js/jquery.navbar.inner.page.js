$(window).scroll(function() {
    if ($(this).scrollTop() > -10) {
        $( ".header #background").fadeIn();
    }
    else {
        console.log('there');
        $(".header #background").fadeOut();
    }
});