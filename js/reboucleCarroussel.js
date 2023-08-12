$(document).ready(function(){
    $('#banner_slider').on('slid.bs.carousel', function () {
        var $this = $(this);
        if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
            $this.carousel('pause').removeData();
            $this.carousel(0);
            $this.carousel('cycle');
        }
    });
});