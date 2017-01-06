(function(){

    // Menu settings
    $("#menuToggle, .menu-close").on('click', function(){
        $('#menuToggle, .menu-close').toggleClass('open');
        if ($( window ).width() < 992) {
            $('#scrollDownPanel, #reSearchPanel, #resultsPanel, .resultsNav, #scrollDownPanel, .mobileOpenUpPanel,' +
                ' .mobileOpenDownPanel').toggleClass('lower');
        }
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
        $('#search').toggleClass('hidden-sm');
    });


    // Modal Settings
    $('#search').bind('keypress', function(e) {
        if(e.keyCode==13){
            e.preventDefault();
            $('#myModal').modal('toggle');
        }
    });
    $('.searchButton').bind('click', function(e) {
        e.preventDefault();
        $('#myModal').modal('toggle');
    });

    $('#scrollDownImg').bind('click', function(e) {
        e.preventDefault();
        $("#mobileTogglePanel").toggleClass("mobileOpenUpPanel mobileOpenDownPanel");
        $("#mobileControls").fadeToggle();
        $("#overlay").toggleClass('visible-xs hidden-xs');
        $("#toggles").fadeToggle();
        if ($('.desktopNav').is(":visible")) {
            $(".desktopNav").fadeToggle(function () {
                $(".mobileNav").fadeToggle("fast")
            });
        } else {
            $(".mobileNav").fadeToggle(function () {
                $(".desktopNav").fadeToggle("fast")
            });
        }
    });

    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });

})(jQuery);

