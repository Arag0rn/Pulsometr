$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../src/icons/chevron-left-solid.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../src/icons/chevron-right-solid.png"</button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                  arrows: false,
                  dots: true,
                },
            },
        ]
      });
  });