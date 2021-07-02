jQuery(document).ready(function() {
    wowo(jQuery);
		ready_to_do(jQuery);
		slider(jQuery);
		resize_to_do(jQuery);
});
jQuery(window).scroll(function() {
    wowo(jQuery);
});
jQuery(window).resize(function() { 
		resize_to_do(jQuery);
});
  function wowo($) {
		setTimeout(function () {
			jQuery('html').addClass("hidden-c");
			
			var wTop = jQuery(window).scrollTop(), wHeight = jQuery(window).height(), wBottom = wTop + wHeight;
			jQuery(".wowo:not(.animated)").each(function () {
				var me = jQuery(this), meTop = me.offset().top, meHeight = me.height(), meBottom = meTop + meHeight,
						limitTop = wTop - meHeight, limitBottom = wBottom + meHeight;
				if (meTop > limitTop && meBottom < limitBottom) {
					me.addClass("animated");
					setTimeout(function () {
						me.removeClass("animated wowo");
					}, 1500);
				}
			})
		}, 100);
		
  }
	

	
	
	
	function ready_to_do($){
		
		$('.accordion h4').on('click',function(){
			if($(this).is('.open')){
				$(this).removeClass('open');
				$(this).next('.text-box').slideUp(250);
			}else{
				$('.accordion h4').removeClass('open');
				$('.accordion .text-box').slideUp(250);
				$(this).addClass('open');
				$(this).next('.text-box').slideDown(250);
			}
		});
		
		
		$('.inner-section .nav-box h3').on('click',function(){
			if($(window).outerWidth() < 768){
				if($(this).is('.open')){
					$(this).removeClass('open');
					$(this).next('ul').slideUp(250);
				}else{
					$('.inner-section .nav-box h3').removeClass('open');
					$('.inner-section .nav-box ul').slideUp(250);
					$(this).addClass('open');
					$(this).next('ul').slideDown(250);
				}
			}
		});
		
		
		$('.play-v').on('click',function(){
			$('.full-width-video').fadeIn(300);
		});
		$('.full-width-video').on('click',function(){
			$('.full-width-video').fadeOut(300);
		});
		$('.full-width-video .close-btn').on('click',function(){
			$('.full-width-video').fadeOut(300);
		});
		$('.full-width-video .video-box').on('click',function(){
			event.stopPropagation();
		});
		
		
		$('.skip-content').on('click',function(){
			var top = $('.skip-the-content').eq(0).offset().top;
			$("html,body").finish().animate({"scrollTop":top},400);
		});
		
		var num = 0;
		$("body").keydown(function(event){
			if(num == 0){
				if(event.which == 9){
					$('.skip-content').fadeIn(200);
					num++;
				}
			}else{
				$('.skip-content').fadeOut(200);
			}
		});
		
		if($('.slick-next').length>0){
			$('.slick-prev').prop('title','Previous');
			$('.slick-next').prop('title','Next');
		}
	}
	
	function resize_to_do($){
		if($(window).outerWidth() < 992){
			var num = 1;
			$('.block-list .item').each(function(){
				if(num%4 == 3){
					$(this).css('order',num+1);
				}else if(num%4 == 0){
					$(this).css('order',num-1);
				}else{
					$(this).css('order',num);
				}
				num++;
			})
		}
	}
	
	
	function slider($){
		if($('.slider-quote').length>0){
			$('.slider-quote').slick({
				//fade: true,
				arrows:false,
				dots:true,
				pauseOnHover:false,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				//swipe:false,
				//touchMove:false,
				swipeToSlide:true,
				autoplay:true,
				autoplaySpeed:6000,
			});
		}
	}
	
	
	
	