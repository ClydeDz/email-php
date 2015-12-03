;(function(){
			// Menu settings
			$('#menuToggle,#closeMenu, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				//$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');				
			});
})(jQuery)