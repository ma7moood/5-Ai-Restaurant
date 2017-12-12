$(document).ready(function(){
	var header = $('header');
	header .find(".nav-but").click(function(){
		$(this).parent().toggleClass('active');
	});
	var mainSection = $('.main-section');
	$(document).scroll(function(){
		if($(window).scrollTop() >= mainSection.height()-100){
			header.addClass('sticky');
		}else{
			header.removeClass('sticky');
		}
	});


	function menuSlider(){
		var sliderContainer = $('.menu-slider');
		var slider = sliderContainer.find('.slider-panner');
		var sliderItems = slider.find('slider-item');
		var itemsLength = sliderItems.length;
		var nextBtn = sliderContainer.find('.arrow.next');
		var prevBtn = sliderContainer.find('.arrow.prev');
		var itemWidth = $('.menu-slider .slider-item').outerWidth();
		$(window).resize(function(){
			itemWidth= $('.menu-slider .slider-item').outerWidth();
		});
		nextBtn.click(function(){
			slider.css('left', -itemWidth);
		});
	}menuSlider();















});