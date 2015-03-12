/*$(document).ready(function () {

    var nav = $('.nav');
    var origOffsetY = nav.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.nav').addClass('sticky');
            $('.roundedWrapper').addClass('nav-padding');
        } else {
            $('.nav').removeClass('sticky');
            $('.roundedWrapper').removeClass('nav-padding');
        }


    }

    document.onscroll = scroll;

});*/

$(document).ready(function () {

	var mn = $(".nav");
	
	$(window).scroll(function() {
		if( $(this).scrollTop() > 65 ) {
			mn.addClass("sticky");
		}
		else {
			mn.removeClass("sticky");
		}
	});
	
});