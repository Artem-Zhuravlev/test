$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false
	});
	$('a[href*="#"]').click(function(){
		var target = jQuery(this).attr('href');
		$('html, body').animate({scrollTop: jQuery(target).offset().top - 0}, 500);
		return false;
   	});
	$(window).scroll(function(){
  		if ($(this).scrollTop() > 50) {
   			$('.header-top').addClass('scroll');
  		}else{
   			$('.header-top').removeClass('scroll');
  		}
 	});
});

