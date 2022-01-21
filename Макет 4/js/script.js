$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
    dots:true,
		initialSlide:0,
		infinite:true,
		autoplay:true,
		autoplaySpeed: 10000,
		pauseOnFocus:true,
		pauseOnHover:true,
    pauseOnDotsHover:true,
		fade:true,	
	});

});

$(document).ready(function(){
	$('.slider-2').slick({
		arrows:false,
    dots:false,
    slidesToShow:3,
    slidesToScroll:3,
		infinite:false,
		autoplay:true,
		autoplaySpeed: 10000,
		pauseOnHover:true,
        responsive: [
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots:true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
              }
            }
        ]
    });
});

 