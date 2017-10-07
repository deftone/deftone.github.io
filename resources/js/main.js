$(document).ready(function() {

	//dropdown
	$("nav li:has(ul)").hover(function(){
		$(this).find("ul").slideDown();
	}, function(){
		$(this).find("ul").hide();
	});

	// menu for small devices
	$('.menu_button').on('click', function(){
		$('.menu_items').toggleClass('hidden');
	});
	$('.menu_items li').click(function(){
		$('.menu_items').addClass('hidden');
	});

	//jumbotron carousel
	$('.carousel').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,//4000,
	slidesToScroll: 1,
	pauseOnFocus: false,
	pauseOnHover: false,
	draggable: false
	});

});
