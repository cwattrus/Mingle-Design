if (Modernizr.csstransitions){
	$(function() {
		$('.work').each( function() { $(this).hoverdir(); } );
	});
} 
	
$(document).ready(function(){

	fix_green_border();
	
	consolidateworks();
	
	// carousel
	
	$('.carousel').cycle({
		fx:'scrollHorz',
    	speed:  400,
        timeout: 5000,
        pager:  '#carousel_nav'
    });
    
    $('.indicator').html($(window).width());
    
    $('.nav').width($('.wrapper').innerWidth());
    
    $('.top_menu').find('li:first-child').hover(function(){
    	if ($(window).width() > 644){
    		$(this).find('.sub-menu').fadeIn(300);
    	}
    }, function(){
    	if ($(window).width() > 644){
    		$(this).find('.sub-menu').fadeOut(500);
    	}
    });
    
    $(window).resize(function(){
    	resizeJobs();
    });	
    
    $(window).afterResize( function() {
    	callbackAfterResize();
    });
    
    $('.top_menu_button').click(function(){
    	if($('.top_menu').is(':visible')){
    		$('.top_menu').slideUp('fast');
    		$('.top_menu').animate({
    			'padding-top':'0px'
    		});
    	}else{
    		$('.top_menu').slideDown('fast');
    		$('.top_menu').animate({
    			'padding-top':'10px'
    		});
    	}
    });
	
	//ipad and iphone fix
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$('.top_menu_button').click(function(){
			$('.top_menu_button').addClass('active');
			setTimeout(function(){
				$('.top_menu_button').removeClass('active');
			},200);
		});
	}else{
		$('.top_menu_button').mouseover(function(){ $(this).addClass('hover') });
		$('.top_menu_button').mouseout(function(){ $(this).removeClass('hover') });
		$('.top_menu_button').click(function(){ 
			$('.top_menu_button').addClass('active');
			setTimeout(function(){
				$('.top_menu_button').removeClass('active');
			},50);
		});
	}
	
	$('.gototop').click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop:0
		});
	});
	
	// SCROLL
	
	$(window).scroll(function(){
		sticky_relocate();
		
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
			$('.gototop').css('bottom','0');
		}else {
			$('.gototop').removeAttr('style');
		}
		
		if($('.contactbit').css('margin-top') == '0px'){
			$('.contactbit').animate({
				'margin-top': -1 * $('.contactbit').outerHeight(),
				'margin-bottom':'0px'
			},200);
		}
		
	});
	sticky_relocate();	
	
	// Trigger contact
	
	$('.menu-contact').click(function(){
		var mb;
		if($(window).width() < 1025){
			mb = '-20px';
		}else{
			mb = '-57px';
		}
		
		//$('.contactbit').addClass('open');
		$('.contactbit').animate({
			'margin-top':'0px',
			'margin-bottom':mb
			
		});
	});
	
	$('.close').click(function(){
		//$('.contactbit').removeClass('open');
		$('.contactbit').animate({
			'margin-top': -1 * $('.contactbit').outerHeight(),
			'margin-bottom':'0px'
		},200);
	});

	
});

function updatesize(){
	$('.indicator').html($(window).width());
}

function resizeJobs(){
	$('.nav').width($('.wrapper').innerWidth());
	$('.carousel_wrapper').width($('.wrapper').innerWidth());

	$('.indicator').html($(window).width());
	
	if ($(window).width() > 644){
		$('.top_menu').show();
		$('.top_menu').css('padding-top','0px');
		$('.sub-menu').hide();
	} else {
		$('.top_menu').hide();
		$('.sub-menu').show();
	}
	
	if($('.contactbit').css('margin-top') != '0px')
		$('.contactbit').removeAttr('style');
	
	consolidateworks();
	fix_green_border();
}

function callbackAfterResize(){
	$('.carousel').cycle('destroy');
	$('.carousel_item').each(function(){
		$(this).removeAttr('style');
	});
	
	setTimeout(function(){
		$('.carousel').cycle({
			fx:'scrollHorz',
			speed:  400,
			timeout: 5000,
			pager:  '#carousel_nav'
		});
	}, 500);	
	
	
}

function sticky_relocate() {
	var window_top = $(window).scrollTop() + 50;
	var div_top = $('#sticky-anchor').offset().top - 12;
	
	if ((window_top > div_top) && ($(window).width() > 645) ) {
		$('.nav').addClass('stick');
	} else {
		$('.nav').removeClass('stick');
	}
}

function fix_green_border(){
	if ($(window).height() > $('.wrapper.content').height()){
		$('.wrapper.content').css('min-height',$(window).height());
	}
}
