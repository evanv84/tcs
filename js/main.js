$(document).ready(function() {
	
	//Nav scroll
	  $(window).scroll(function(event) {
	    if ($(window).scrollTop()>=700){
	      $('nav .main-nav').addClass('nav-scroll');
	      $('.pre-nav').css('transform', 'translateY(-30px)');
	    } else {
	      $('nav .main-nav').removeClass('nav-scroll');
	      $('.pre-nav').css('transform', 'translateY(0px)');
	    }

	    if ($(window).scrollTop()<=699){
	      $('nav .main-nav').removeClass('nav-scroll');
	      $('.pre-nav').css('transform', 'translateY(0px)');
	    } else {
	      $('nav .main-nav').addClass('nav-scroll');
	      $('.pre-nav').css('transform', 'translateY(-30px)');
	    }
	  });

	 // Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});

	//ANIMATION BLOCK////////////////////////////////////==============================
	//init scrolmagic
	var controller = new ScrollMagic.Controller();

	//MAIN PAGE ///////////////////////////
	var features = new TimelineMax();

	features
		.to('.main_682 .container .pre_682 .pre_img', 1, {y: 50, ease: Power2.easeInOut})
		.to('.main_682 .container .pre_682 .pre_text', 1, {y: -70, ease: Power2.easeInOut}, "-=1");

	var featuresScene = new ScrollMagic.Scene({
		triggerElement: ".main_682",
		triggerHook: "0.8",
		duration: 500
	})
	.setTween(features)
	//.addIndicators()
	.addTo(controller);

	//MAIN 682 ANIM
	var main682 = new TimelineMax();

	main682
		.to('.rec_682 h2', 1, {x: 80, autoAlpha: 1, ease: Power2.easeInOut})
		.to('.main_682 .container .rec_682 .img_682', 1, {y: -40, ease: Power2.easeInOut}, "-=1")
		.to('.main_682 .container .rec_682 .desc_682 .text_682', 1, {y: 50, ease: Power2.easeInOut}, "-=1");

	var main682Scene = new ScrollMagic.Scene({
		triggerElement: ".rec_682",
		triggerHook: "0.6",
		duration: 700
	})
	.setTween(main682)
	//.addIndicators()
	.addTo(controller);

	//MAIN 700 ANIM
	var main700 = new TimelineMax();

	main700
		.to('.main_700 h2', 1, {x: -80, autoAlpha: 1, ease: Power2.easeInOut})
		.to('.main_700 .container .img_700', 1, {y: -40, ease: Power2.easeInOut}, "-=1")
		.to('.main_700 .container .desc_700 .text_700', 1, {y: 60, ease: Power2.easeInOut}, "-=1");

	var main700Scene = new ScrollMagic.Scene({
		triggerElement: ".main_700",
		triggerHook: "0.7",
		duration: 700
	})
	.setTween(main700)
	//.addIndicators()
	.addTo(controller);

});