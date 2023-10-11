

$(document).ready(function(){
    $('#navbar').load('/asset/layout/navbar.html');
    $('#footer').load('/asset/layout/footer.html');
});

$(window).on('load', function () {
    var hash = window.location.hash.slice(1); // Utilisez slice au lieu de substr
    if (hash) {
        // Utilisez trigger('click') au lieu de click()
        $('.gallery-button[data-gallery="' + hash + '"]').trigger('click');
    }

    $('.gallery-button').on('click', function (event) {
        event.stopPropagation();
        var gallery = $(this).data('gallery');
        $('.gallery').hide();
        $('#' + gallery + '-gallery').show();
    });
    
    $('.gallery-button').on('click', function(event){
        event.stopPropagation();
        $('.gallery-button').removeClass('btn-active');
        $(this).addClass('btn-active');
    });
    
});


window.onload = function() {
    var navbar = document.getElementById('navbar');
    if (window.location.href.indexOf('index') > -1) {
        navbar.style.background = 'blue';
    } else if (window.location.href.indexOf('galerie') > -1) {
        navbar.style.background = 'green';
    }
}











