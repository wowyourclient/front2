(function(){

    var htmlString = "<a href='results.html'><div class='panel-default'><div class='panel-heading' id='bothRoutes'>Morning and Afternoon Bus Route <i class='fa fa-arrow-circle-right pullRight' aria-hidden='true'></i></div></div></a><a href='results.html'><div class='panel-default'><div class='panel-heading' id='amRoutes'>Morning Bus Route Only <i class='fa fa-arrow-circle-right pullRight' aria-hidden='true'></i></div></div></a><a href='results.html'><div class='panel-default'><div class='panel-heading' id='pmRoutes'>Afternoon Bus Route Only <i class='fa fa-arrow-circle-right pullRight' aria-hidden='true'></i></div></div></a></div><! --/container -->";
    var headingString = "<h4 class='modal-title'>When do you ride the bus?</h4>";

    // Menu settings
    $("#menuToggle, .menu-close").on('click', function(){
        $('#menuToggle, .menu-close').toggleClass('open');
        $('#scrollDownPanel, #reSearchPanel, #resultsPanel, #scrollDownPanel, #mobileScrollDownPanel').toggleClass('lower');
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
    $('#search_button').bind('click', function(e) {
        e.preventDefault();
        $('#myModal').modal('toggle');
    });

    $('.school-submit').bind('click', function(e) {
        e.preventDefault();
        if($( window ).width() < 480){
            $('#innerContent').animate({left: "+=480px"}, function () {
                $('#innerContent').html(htmlString);
                $('.changingHeading').html(headingString);
                console.log("480");
            }).animate({left: "-=480px"});
        }else if($( window ).width() < 980){
            $('#innerContent').animate({left: "+=780px"}, function () {
                $('#innerContent').html(htmlString);
                $('.changingHeading').html(headingString);
                console.log("480");
            }).animate({left: "-=780px"});
        }else if($( window ).width() < 980){
            $('#innerContent').animate({left: "+=1480px"}, function () {
                $('#innerContent').html(htmlString);
                $('.changingHeading').html(headingString);
                console.log("480");
            }).animate({left: "-=1480px"});
        }else{
            $('#innerContent').animate({left: "+=1880px"}, function () {
                $('#innerContent').html(htmlString);
                $('.changingHeading').html(headingString);
                console.log("480");
            }).animate({left: "-=1880px"});
        }

    });

})(jQuery);

