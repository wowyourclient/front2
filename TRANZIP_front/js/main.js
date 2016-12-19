(function(){

			// Menu settings
			$("#menuToggle, .menu-close").on('click', function(){
                $('#menuToggle, .menu-close').toggleClass('open');
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

})(jQuery);