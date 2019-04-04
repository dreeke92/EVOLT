import "bootstrap";
import "jquery";
import "webpack-jquery-ui";
import "webpack-jquery-ui/css";
import {WOW} from 'wowjs';

// import local javascript
import { activeNavigation } from '../components/navbar'
import { headerScroll } from '../components/navbar'
import { smoothScroll } from '../components/navbar'
import { smoothScrollButton } from '../components/topbutton'
import { smoothScrollContact } from '../components/topbutton'
import { toTopButton } from '../components/topbutton'
import { bannerVisuals } from '../components/banner'
import { mobileNavigation }  from '../mobile/navigation'

// activate WOW
new WOW().init();

activeNavigation();
headerScroll();
smoothScroll();
smoothScrollButton();
smoothScrollContact();
toTopButton();
mobileNavigation();
bannerVisuals();

