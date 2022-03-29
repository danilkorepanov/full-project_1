(function ($) {


	$.fn.burgerMenu = function() {

		$(this).click(function(event) {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('.header__menu-social').toggleClass('active');

	})
	};


})(jQuery);
