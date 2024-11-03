$(document).ready(function () {
  $(".hamburger").click(function () {
    $("nav").toggleClass("toggle");
    $(".open-in-mobile").toggleClass("active");
  });


  $(".search-bar-open").click(function () {
    $(".search-bar").toggleClass("open");
  });


  $(".hero-sec .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    dots: true,
    dotsContainer: ".custom-dots",  // Specify the custom dots container
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
 
  


  $(".special-view .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: false,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    dots: true,
    dotsContainer: ".special-view-dots",  // Specify the custom dots container
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

});



// Testimonial-start
$('.testimonial-main .owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      768:{
          items:2,
          nav:true
      },
      1000:{
          items:3,
      }
  }
})
// Testimonial-end