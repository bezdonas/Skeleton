$(function() {
	$('.js-pluginName').pluginName();
});


(function($) {

	$.fn.pluginName = function(args) {

		return this.each(function() {
			var that = $(this),
				conf = $.extend({}, $.fn.pluginName.defaults, args, that.data('pluginName'));
			
			console.log(conf.message);

		});

	};

	$.fn.pluginName.defaults = {
		message: 'plugin started'
	};

})(jQuery);