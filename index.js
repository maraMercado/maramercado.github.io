window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
            },
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
        ]
    });
});
