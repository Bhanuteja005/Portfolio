(function($) {

    // Wait for the DOM to be fully loaded
    var ssPreloader = function() {
        var $WIN = $(window);

    // Force page scroll position to top at page refresh
    $('html, body').animate({ scrollTop: 0 }, 'normal');

    // Hide Pace.js progress bar
    Pace.on('done', function () {
        $('.pace-inactive').fadeOut('slow');
    });

    // Hide the preloader
    $WIN.on('load', function() {
        $("#loader").fadeOut("slow", function() {
            $("#preloader").delay(100).fadeOut("slow");
        });
    });

    };

    // Initialize preloader function
    ssPreloader();
    
    


})(jQuery);
