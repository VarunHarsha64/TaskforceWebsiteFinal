// for adding active class to nav link once it is clicked
var header = document.getElementById("for-active");
var btns = header.getElementsByClassName("act");
for( var i=0 ; i < btns.length ; i++) {
        btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if( current.length > 0) {
                        current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
        });
}

// for adding and removing active class on nav links while scrolling
$(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }