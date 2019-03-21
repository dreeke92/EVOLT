import "bootstrap";
import "jquery";
import "webpack-jquery-ui";
import "webpack-jquery-ui/css";

// import local javascript
import { activeNavigation } from '../components/navbar'
import { headerScroll } from '../components/navbar'
import { smoothScroll } from '../components/navbar'
import { bannerVisuals } from '../components/banner';

activeNavigation();
headerScroll();
smoothScroll();
bannerVisuals();


