



$(document).ready(function(){
    $('#navbar').load('/navbar.html');
    $('#footer').load('/footer.html');
});

$(document).ready(function () {
    $('.gallery-button').click(function () {
        var gallery = $(this).data('gallery');
        $('.gallery').hide();
        $('#' + gallery + '-gallery').show();
    });
});

$(document).ready(function(){
    $('.gallery-button').click(function(){
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











