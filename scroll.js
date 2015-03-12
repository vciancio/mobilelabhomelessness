$(document).ready(function () {

	var mn = $(".nav");
	
	$(window).scroll(function() {
		if( $(this).scrollTop() > 0 ) {
			mn.addClass("sticky");
		}
		else {
			mn.removeClass("sticky");
		}
	});
	
});