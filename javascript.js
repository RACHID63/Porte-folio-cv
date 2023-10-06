


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













