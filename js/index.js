// AOS.init();
new WOW().init();

var myFullpage = new fullpage('#fullpage', {
    anchors: ['01', '02', '03', '04', '05', '06', '07', '08'],
    sectionsColor: ['#fff100', '#fff', '#fff', '#000', '#fff', '#fff', '#fff', '#fff100'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08'],
    scrollBar: true,
    responsiveWidth: 320
});

$('#moveSectionUp').click(function(e){
    e.preventDefault();
    myFullpage.moveSectionUp();
});

$('#moveSectionDown').click(function(e){
    e.preventDefault();
    myFullpage.moveSectionDown();
});

$('.slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.close').on('click', function(){
    $('.popup').removeClass('is-acted');
    $('input:text').val('');
    $('.message').val('');
});


