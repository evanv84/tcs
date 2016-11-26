$(document).ready(function() {
	
	//Nav scroll
	  $(window).scroll(function(event) {
	    if ($(window).scrollTop()>=300){
	      $('nav .main-nav').addClass('nav-scroll');
	      $('.pre-nav').css('transform', 'translateY(-30px)');
	    } else {
	      $('nav .main-nav').removeClass('nav-scroll');
	      $('.pre-nav').css('transform', 'translateY(0px)');
	    }

	    if ($(window).scrollTop()<=299){
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
		.to('.main_700 .container .pre_700 .pre_img', 1, {y: 70, ease: Power2.easeInOut})
		.to('.main_700 .container .pre_700 .pre_text', 1, {y: -120, ease: Power2.easeInOut}, "-=1");

	var featuresScene = new ScrollMagic.Scene({
		triggerElement: ".main_700",
		triggerHook: "0.8",
		duration: 500
	})
	.setTween(features)
	//.addIndicators()
	.addTo(controller);

	//MAIN 682 ANIM
	var main700 = new TimelineMax();

	main700
		.to('.rec_700 h2', 1, {x: 80, autoAlpha: 1, ease: Power2.easeInOut})
		.to('.main_700 .container .rec_700 .img_700', 1, {y: -70, ease: Power2.easeInOut}, "-=1")
		.to('.main_700 .container .rec_700 .desc_700', 1, {y: 120, ease: Power2.easeInOut}, "-=1");

	var main682Scene = new ScrollMagic.Scene({
		triggerElement: ".rec_700",
		triggerHook: "0.6",
		duration: 900
	})
	.setTween(main700)
	//.addIndicators()
	.addTo(controller);

	//MAIN 700 ANIM
	var main682 = new TimelineMax();

	main682
		.to('.main_682 h2', 1, {x: -80, autoAlpha: 1, ease: Power2.easeInOut})
		.to('.main_682 .container .img_682', 1, {y: -100, ease: Power2.easeInOut}, "-=1")
		.to('.main_682 .container .desc_682', 1, {y: 120, ease: Power2.easeInOut}, "-=1");

	var main700Scene = new ScrollMagic.Scene({
		triggerElement: ".main_682",
		triggerHook: "0.7",
		duration: 900
	})
	.setTween(main682)
	//.addIndicators()
	.addTo(controller);


	//CONSTRUCTOR CONFIG //////////////////////////////////
	var type = $('#type').val();
	var product = $('#product-type').val();
	var rashod = $('#rashod').val();
	var rec = $('#recorder').val();

	$('#product1').hide();
	$('#product2').hide();
	$('#product3').hide();
	$('#product4').hide();
	$('#product5').hide();
	$('#product6').hide();
	$('#product7').hide();
	$('#product8').hide();
	$('#product9').hide();
	$('#rashod1').hide();
	$('#rashod2').hide();
	$('#rashod3').hide();
	$('#rashod4').hide();
	$('#rashod5').hide();
	$('#rashod6').hide();
	$('#rashod7').hide();
	$('#rashod8').hide();
	$('#rashod9').hide();
	$('#rashod10').hide();
	$('#recorder1').hide();
	$('#recorder2').hide();
	$('#recorder3').hide();
	$('#recorder4').hide();
	$('#recorder5').hide();
	$('#add4').prop('disabled', true);
	$('#add5').prop('disabled', true);
	$('#add6').prop('disabled', true);

	
	$('#type').change(function(event) {
		var type = $('#type').val();
		$('#product-type').val('def');
		$('#rashod').val('def');
		$('#recorder').val('def');

		if (type == 'type1') {
			$('#product1').show();
			$('#product2').show();
			$('#product3').show();
			$('#product4').show();
			$('#product5').show();
			$('#product6').show();
			$('#product7').show();
			$('#product8').show();
			$('#product9').show();
		}

		if (type == 'type2') {
			$('#product1').show();
			$('#product2').show();
			$('#product3').show();
			$('#product4').hide();
			$('#product5').hide();
			$('#product6').show();
			$('#product7').show();
			$('#product8').show();
			$('#product9').show();
		}
	});
		


	$('#product-type').change(function(event) {
		var type = $('#type').val();
		var product = $('#product-type').val();
		$('#rashod').val('def');
		$('#recorder').val('def');

		if (type == 'type1') {

			if (product == 'product1') {
				$('#rashod1').hide();
				$('#rashod2').show();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').show();
				$('#rashod6').hide();
				$('#rashod7').show();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product2') {
				$('#rashod1').hide();
				$('#rashod2').show();
				$('#rashod3').show();
				$('#rashod4').show();
				$('#rashod5').show();
				$('#rashod6').show();
				$('#rashod7').show();
				$('#rashod8').show();
				$('#rashod9').show();
				$('#rashod10').show();
			}

			if (product == 'product3') {
				$('#rashod1').hide();
				$('#rashod2').hide();
				$('#rashod3').show();
				$('#rashod4').show();
				$('#rashod5').show();
				$('#rashod6').show();
				$('#rashod7').show();
				$('#rashod8').show();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product4') {
				$('#rashod1').hide();
				$('#rashod2').show();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').show();
				$('#rashod6').hide();
				$('#rashod7').show();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product5') {
				$('#rashod1').hide();
				$('#rashod2').show();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').show();
				$('#rashod6').hide();
				$('#rashod7').show();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product6') {
				$('#rashod1').hide();
				$('#rashod2').hide();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').show();
				$('#rashod6').hide();
				$('#rashod7').show();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product7') {
				$('#rashod1').hide();
				$('#rashod2').hide();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product8') {
				$('#rashod1').hide();
				$('#rashod2').hide();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}
			if (product == 'product9') {
				$('#rashod1').hide();
				$('#rashod2').hide();
				$('#rashod3').show();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}
		}

		if (type == 'type2') {

			if (product == 'product1') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product2') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product3') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product4') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product5') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product6') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product7') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}

			if (product == 'product8') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}
			if (product == 'product9') {
				$('#rashod1').show();
				$('#rashod2').hide();
				$('#rashod3').hide();
				$('#rashod4').hide();
				$('#rashod5').hide();
				$('#rashod6').hide();
				$('#rashod7').hide();
				$('#rashod8').hide();
				$('#rashod9').hide();
				$('#rashod10').hide();
			}
		}
	});

	$('#rashod').change(function(event) {
		var product = $('#product-type').val();
		var rashod = $('#rashod').val();
		$('#recorder').val('def');
		$('#recorder1').show();
		$('#recorder2').show();
		$('#recorder3').show();
		$('#recorder4').show();
		$('#recorder5').show();
		
	});

	$('#recorder').change(function(event) {
		var rec = $('#recorder').val();

		if ((rec == 'recorder2') || (rec == 'recorder3') || (rec == 'recorder4')) {
			$('#add4').prop('disabled', true);
			$('#add5').prop('disabled', false);

			if (rec == 'recorder4') {
				$('#add8').prop('checked', true);
			}
		}

		if (rec == 'recorder1') {
			$('#add4').prop('disabled', false);
			$('#add5').prop('disabled', true);
		}

		if (rec == 'recorder5') {
			$('#add4').prop('disabled', true);
			$('#add5').prop('disabled', true);
		}
	});

	$('#add1').click(function(event) {

		if (($('#add1').is(':checked')) || ($('#add2').is(':checked')) || ($('#add9').is(':checked'))) {
			$('#add6').prop('disabled', false);
		}

		else {
			$('#add6').prop('disabled', true);
		}
	});

	$('#add2').click(function(event) {

		if (($('#add1').is(':checked')) || ($('#add2').is(':checked')) || ($('#add9').is(':checked'))) {
			$('#add6').prop('disabled', false);
		}

		else {
			$('#add6').prop('disabled', true);
		}
	});

	$('#add9').click(function(event) {

		if (($('#add1').is(':checked')) || ($('#add2').is(':checked')) || ($('#add9').is(':checked'))) {
			$('#add6').prop('disabled', false);
		}

		else {
			$('#add6').prop('disabled', true);
		}
	});


	$('#calc').click(function(event) {
		var type = $('#type').val();
		var product = $('#product-type').val();
		var rashod = $('#rashod').val();
		var rec = $('#recorder').val();

		if ($('#add1').is(':checked')) {
			var add1 = 1;
		}
		else {
			var add1 = 0;
		}
		if ($('#add2').is(':checked')) {
			var add2 = 1;
		}
		else {
			var add2 = 0;
		}
		if ($('#add3').is(':checked')) {
			var add3 = 1;
		}
		else {
			var add3 = 0;
		}
		if ($('#add4').is(':checked')) {
			var add4 = 1;
		}
		else {
			var add4 = 0;
		}
		if ($('#add5').is(':checked')) {
			var add5 = 1;
		}
		else {
			var add5 = 0;
		}
		if ($('#add6').is(':checked')) {
			var add6 = 1;
		}
		else {
			var add6 = 0;
		}
		if ($('#add7').is(':checked')) {
			var add7 = 1;
		}
		else {
			var add7 = 0;
		}
		if ($('#add8').is(':checked')) {
			var add8 = 1;
		}
		else {
			var add8 = 0;
		}
		if ($('#add9').is(':checked')) {
			var add9 = 1;
		}
		else {
			var add9 = 0;
		}		
		var img682 = "<img src='../img/682.jpg'>";
		var img700 = "<img src='../img/700.jpg'>";

		if (type == 'type1') {
			$("div.result").empty()
			$('.result').append(img700);
		}
		
		if (type == 'type2') {
			$("div.result").empty()
			$('.result').append(img682);
		}

		return false;

	});

	// .END CONSTRUCTOR CONFIG /////////////////////////

});