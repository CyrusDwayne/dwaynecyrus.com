  // adapted from http://jsfiddle.net/mariusc23/s6mLJ/31/

  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navigation').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('body').removeClass('scroll-show').addClass('scroll-hide');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('body').removeClass('scroll-hide').addClass('scroll-show');
        }
    }
    
    lastScrollTop = st;
}