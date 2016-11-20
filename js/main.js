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

});