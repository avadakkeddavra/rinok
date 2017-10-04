$(document).ready(function(){
	$('#show_menu').on('click',function(){
		$('.mobile-menu').slideToggle(500,function(){
			if($(this).is(':visible')){
				$('#show_menu').html('<i class="fa fa-close"></i>')
			}else{
				$('#show_menu').html('<i class="fa fa-bars"></i>')
			}
		});
	})
})
$(document).ready(function(){
	var window_width = $(window).width();
	if(window_width > 900){
		$('#archive_slider').slick({
			slidesToShow:4,
			slidesToScroll:1,
			arrows:true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
		})
		$('#sales_slider').slick({
			slidesToShow:3,
			slidesToScroll:1,
			arrows:true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
		})
	}else if(window_width < 900 && window_width > 500){
		$('#archive_slider').slick({
			slidesToShow:2,
			slidesToScroll:1,
			arrows:false,
			dots:true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
		})
	}else if(window_width < 500){
		$('#archive_slider').slick({
			slidesToShow:1,
			slidesToScroll:1,
			arrows:false,
			dots:true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
		})
	}
})