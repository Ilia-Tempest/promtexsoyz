$(document).ready(function() {
    $('.hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay:true,
        appendDots: $('.hero-dots'),
       
    });
    $('.action-block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        centerMode: true,
    
        autoplay:true,
        appendDots: $('.action-dots'),
        variableWidth: true,
        prevArrow:'.action-left',
        nextArrow:'.action-right',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                infinite: true,
                variableWidth: false,
                
              }
            },
          
            {
              breakpoint: 1000,
              settings: {
                dots: false,
                infinite: true,
                slidesToShow: 1, 
                adaptiveHeight: false,
               
            
              }
            },
            
          ]

        
       
    });
});

