$(document).ready(function () {
    $('.cv-list-skills').addClass('owl-carousel').owlCarousel({
        items: 20,
        loop: true,
        autoplay: false,
        margin:20,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navigation: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
          0: {
            items: 3
          },
          536: {
            items: 3
          },
          1170: {
            items: 5
          }
        }
      });
});
