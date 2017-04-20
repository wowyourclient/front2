(function(){

    // Static Maps


    var height = Math.floor($(window).height()/2);
    var width = Math.floor($(window).width()/2);
    var googleStaticMaps = 'http://maps.googleapis.com/maps/api/staticmap?sensor=false&zoom=7&size='+width+'x'+height+'&center="35.845626,-86.390778"&style=feature:all|element:geometry|visibility:simplified&style=feature:administrative|element:geometry.fill|visibility:off|color:0x000000&style=feature:administrative|element:labels.text.fill|color:0x444444&style=feature:administrative|element:labels.icon|hue:0xff0000&style=feature:administrative.country|element:labels|visibility:off&style=feature:administrative.province|element:all|visibility:on&style=feature:administrative.province|element:geometry|hue:0xff0000|visibility:off&style=feature:administrative.province|element:geometry.stroke|visibility:on&style=feature:administrative.province|element:labels|visibility:off&style=feature:administrative.locality|element:labels|visibility:off&style=feature:landscape|element:all|color:0xf2f2f2&style=feature:landscape.man_made|element:labels|saturation:36&style=feature:poi|element:all|visibility:off&style=feature:poi.park|element:geometry|visibility:on&style=feature:poi.park|element:geometry.fill|color:0xecd7eb&style=feature:poi.park|element:labels.text|color:0xb17117&style=feature:road|element:all|saturation:-100|lightness:45&style=feature:road.highway|element:all|visibility:simplified&style=feature:road.highway|element:labels|visibility:off&style=feature:road.arterial|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:all|color:0xff9100|visibility:on&style=feature:water|element:geometry.fill|color:0xec971f&key=AIzaSyAtBGtxDTLNMKuOVPI3OZKgr4AIiHeYTqs';

    console.log(googleStaticMaps);
    $('#googlemaps').html("<img src='" + googleStaticMaps + "'/>");

    // Menu settings
    $("#menuToggle, .menu-close").on('click', function(){
        $('#menuToggle, .menu-close').toggleClass('open');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
        $('#search').toggleClass('hidden-sm');
    });

    $('#nav-icon1, .sidenav-background').click(function(){
        $('.main-navigation, #nav-icon1').toggleClass('open');
        $('.sidenav-background').toggle();
    });


    // Bus Creation Toggle Settings
    $('.switch-control').bind('click', function() {
        if($(this).is(':checked')) {
            $('.added-form-fields').show()
        }else {
            $('.added-form-fields').hide()
        }
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
        $("#mobileTogglePanel").toggleClass("mobileOpenDownPanel mobileOpenUpPanel");
        $("#mobileControls").fadeToggle();
        $("#toggles").fadeToggle();
        if ($('.resultsDesktopNav').is(":visible")) {
            $(".resultsDesktopNav").fadeToggle(function () {
                $(".mobileNav").fadeToggle("fast")
            });
        } else {
            $(".mobileNav").fadeToggle(function () {
                $(".resultsDesktopNav").fadeToggle("fast")
            });
        }
    });

    $('.antiMobileAlert').delay(4000).hide(1000);

    $('#busDropdown').click(function(e){
        e.preventDefault();
        $('.busMenuDiv').toggle();
    });

    $('.adminEditSave').click(function(){
        alert("Would you like to confirm your changes?");
    });

    // IndexAdmin controls

    $('#deleteBusButton').click(function(){
        $('#busMenuState').hide();
        $('.nbs').hide();
        $("#busDeleteState").show();
        $('.home').show();
    });
    $('#editBusButton').click(function(){
        $('#busMenuState').hide();
        $('.nbs').hide();
        $("#busEditState").show();
        $('.home').show();
    });
    $('#addBusButton').click(function(){
        $('#busMenuState').hide();
        $('.nbs').hide();
        $("#addBusForm").show();
        $('.home').show();
    });
    $('#backToAdminHome').click(function(){
        $('#addBusForm').hide();
        $('#busDeleteState').hide();
        $('#busEditState').hide();
        $('.home').hide();
        $("#busMenuState").show();
        $('.nbs').show();
    });

    $('.deleteBusOption').hover(function(){
        $( "i", this).toggleClass("fa-bus fa-times-circle");
    }).click(function(e){
        e.preventDefault();
        $('#addBusButton').click(function(){
            $('#busMenuState').hide();
            $('.nbs').hide();
            $("#addBusForm").show();
            $('.home').show();
        });
    });

    $('.editBusOption').hover(function(){
        $( "i", this).toggleClass("fa-bus fa-edit");
    }).click(function(e){
        e.preventDefault();
        $('.editBusOption').click(function(){
            $('#busEditState').hide();
            $("#addBusForm").show();
            $('.home').show();
        });
    });

})(jQuery);

