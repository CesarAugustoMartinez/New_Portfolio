
  $(document).ready(function(){
    $('.sidenav').sidenav();    
    // Initialize collapse button
    $(".scrollspy").scrollSpy();
    $('.modal').modal();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
  });
