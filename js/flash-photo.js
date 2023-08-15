$(document).ready(function() {
    $('#banner_slider').on('slide.bs.carousel', function() {
        // Lorsque le carrousel commence à changer d'élément
        $('.flash-effect').animate({
            opacity: 1
        }, 100, function() {
            // Une fois l'animation terminée, remettez l'opacité à 0
            $('.flash-effect').animate({
                opacity: 0
            }, 100);
        });
    });
});