import "bootstrap";
import "jquery";

// import local javascript
import { activeNavigation } from '../components/navbar'
import { bannerVisuals } from '../components/banner';



  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }




activeNavigation();
bannerVisuals();


