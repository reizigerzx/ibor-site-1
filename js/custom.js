// PORTFOLIO FILTERING - ISOTOPE
//**********************************
jQuery.noConflict()(function($){
"use strict";
var $container = $('.oi_port_container');
		
if($container.length) {
	$container.waitForImages(function() {
		
		// initialize isotope
		$container.isotope({
		  itemSelector : '.oi_strange_portfolio_item',
		  layoutMode : 'masonry',
		});
		
		$('#filters a:first-child').addClass('filter_current');
		// filter items when filter link is clicked
		$('#filters a').click(function(){
		  var selector = $(this).attr('data-filter');
		  $container.isotope({ filter: selector });
		  $(this).removeClass('filter_button').addClass('filter_button filter_current').siblings().removeClass('filter_button filter_current').addClass('filter_button');
		  
		  return false;
		});
		
	},null,true);
}});

// Load More Masorny PORTFOLIO
//**********************************

jQuery.noConflict()(function($){
"use strict";

	$( "#load_more_port_masorny_posts" ).each(function() {
		$(this).click(function(e) {
				var tempurl = oi_theme.theme_url;
				var url = tempurl+'/framework/ajax-portfolio.php';
				var $offset = $( "#load_more_port_masorny_posts" ).attr('data-offset');
				var $load_posts_count = $( "#load_more_port_masorny_posts" ).attr('data-load-posts_count');
				var $layout_mode = $( "#load_more_port_masorny_posts" ).attr('data-layout-mode');
				var $column_count = '123';
				var $tag = $( "#load_more_port_masorny_posts" ).attr('data-tag');
				
				$column_count = parseInt($column_count,10)
				$offset = parseInt($offset,10)
				$load_posts_count = parseInt($load_posts_count,10)
				
				var $oi_mas_post_count = $('.oi_strange_portfolio_item').length;
				$('#load_more_port_masorny_posts:not(disabled)').html('<span style=""> <i class="fa fa-spinner fa-spin"></i></span>');
				$('#load_more_port_masorny_posts').addClass('do_not_hover');
				$.get
				  (
				  url,"oi_modal="+$offset+"&oi_post_count="+$oi_mas_post_count+"&oi_tag="+$tag+"&oi_load_post_count="+$load_posts_count+"&oi_layout_mode="+$layout_mode+"&oi_column_count="+$column_count,function(result,status)
					{
						
						$(result.new_posts).imagesLoaded( function(){
						$('.oi_port_container').isotope( 'insert', $(result.new_posts) );
						$('.oi_strange_portfolio_item_holder').css('opacity',1);
						$offset = $( "#load_more_port_masorny_posts" ).attr('data-offset',$offset + $load_posts_count);
						$('#oi_masorny_posts_per_page').html($('.oi_strange_portfolio_item').length);
						$('#load_more_port_masorny_posts').html(result.loading)
						$('#load_more_port_masorny_posts').removeClass('do_not_hover');
							$("html, body").animate({ scrollTop: $('.oi_footer').offset().top }, 1000);
						if ( parseInt($('#oi_max_masorny_posts').html()) == $('.oi_strange_portfolio_item').length ){
							$('#load_more_port_masorny_posts').html(result.all_loaded);
							$('#load_more_port_masorny_posts').addClass('disabled');
							$('.oi_load_more.disabled').click(function(e){$('#load_more_port_masorny_posts:not(disabled)').html('<span style="">NO MORE PROJECTS</span>');})
						};
						});
						
						
					},
				  "json"
				 );
			e.preventDefault();
		}); 
	});
});


jQuery.noConflict()(function($){
"use strict";
	$('.oi_slider').flexslider({
		prevText: "",           //String: Set the text for the "previous" directionNav item
		nextText: "",  
		animation: "fade",
		useCSS: true,
		controlNav: false,
		animationLoop: true,
		slideshow: true,
		slideshowSpeed: 3000,
		pauseOnHover: true, 
		start: function(slider) {
			slider.removeClass('oi_flex_loading');
		}  
	});
});



jQuery.noConflict()(function($){
"use strict";
	$('#port_slider').flexslider({
		prevText: "",           //String: Set the text for the "previous" directionNav item
		nextText: "",  
		animation: "fade",
		useCSS: false,
		controlNav: false,
		animationLoop: true,
		slideshow: true,
		slideshowSpeed: 3000,
		pauseOnHover: true, 
		start: function(slider) {
			slider.removeClass('oi_flex_loading');
		}  
	});
	
	
	if ($('body').width()>640) {
	$(window).load(function(){
		if(($( "body" ).height() - $( window ).height())> 300){
			var stickyNavTop = $('.oi_head_holder').offset().top + $(".oi_head_holder .row").outerHeight();
			$(window).scroll(function () {
				if ($(this).scrollTop() > stickyNavTop) {
					$('.oi_st_menu_holder').fadeIn('fast');
				} else {
					$('.oi_st_menu_holder').fadeOut('fast');
				}
			});
		};
	});
	};
});

jQuery.noConflict()(function($){
"use strict";
	$('.wp-smiley').removeClass('img-responsive')
	$('.wp-caption img').removeAttr('height');
	$('.wp-caption img').removeAttr('width')
	$('.wp-caption').removeAttr('style');
	$('table:not(#wp-calendar)').addClass('table table-striped table-bordered')
});






jQuery.noConflict()(function($){
	"use strict";
	$('.oi_vc_clock').click(function(){
		$('#clockmodal').modal('toggle')
	});
});

jQuery.noConflict()(function($){
	"use strict";
	$(window).load(function() {
		$('#blog_snipet_slider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			prevText: "Previous",
			nextText: "Next",  
		});
	});
});


jQuery.noConflict()(function($){

var stickyNavTop = $('.oi_head_holder').offset().top;
stickyNavTopp = stickyNavTop + $('.oi_head_holder').outerHeight();
$(window).scroll(function () {
	if ($(this).scrollTop() > stickyNavTopp) {
		$('.oi_head_holder').addClass('oi_sticky');
		
	} else {
		$('.oi_head_holder').removeClass('oi_sticky');
	}
});


$('.oi_xs_menu').click(function(){
		$('.oi_header_menu').toggleClass('oi_v_menu');
	});
});
