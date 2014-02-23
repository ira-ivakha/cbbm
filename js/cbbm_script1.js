$(function(){
	$('.first-level-span').click(function() {
		if ( $(this).next().is( ":hidden" ) ) 
			{
				$(".submenu").slideUp( "slow" );	
				$(this).next().slideDown( "slow" );	
				return false;	
			} 
			else	
			{
				$(".submenu").slideUp( "slow" );				
				return false;	
			};
		$('li').siblings('.submenu li').css('color','green');
	});
	
	$('.slider-radio li').click(function() {
		var i=$(this).index();
		$(".slider-content ").children('li').fadeOut(1000, function() {
		});
		$(".slider-content li").eq(i).fadeIn(1000, function() {
		});
		$(this).siblings('li').removeClass('active-radio');
		$(this).addClass('active-radio');
	});
	$('.slider-radio li').click(function() {
	for (var j=0; j<=4; j++) 
		{	
			$(".slider-content ").children('li').fadeOut(1000, function() {});
			$(".slider-content li").eq(j).fadeIn( 1000, function() {});
			//.animate( { width:"0%" }, { queue:false, duration:10000 } ).animate( { width:"100%" }, { queue:false, duration:10000 } );
			$(".slider-radio li").removeClass('active-radio');
			$(".slider-radio li").eq(j).addClass('active-radio');
			
			
		};
	});

	
});
