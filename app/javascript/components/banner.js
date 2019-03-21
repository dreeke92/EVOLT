function bannerVisuals() {

/*
 * jQuery Words Rotator plugin
 *
 * Copyright (c) 2013 Andrea Pace
 * licensed under MIT license.
 *
 * https://github.com/andreapace/wordsrotator
 * http://andreapace.co.uk/wordsrotator
 *
 * Version: 0.9.0
 */
  (function ( $ ) {

    $.fn.wordsrotator = function(options){
      var defaults = {
        autoLoop: true,
        randomize: false,
        stopOnHover: false,
        changeOnClick: false,
        words: null,
        animationIn: "flipInY",
        animationOut: "flipOutY",
        speed: 2000
      };
      var settings = $.extend({}, defaults, options);
      var listItem
      var array_bak = [];

      return this.each(function(){
        var el = $(this)
        var cont = $("#" + el.attr("id"));
        var array = [];

        //if array is not empty
        if ((settings.words) || (settings.words instanceof Array)) {
          array = $.extend(true, [], settings.words);

          //In random order, need a copy of array
          if (settings.randomize) array_bak = $.extend(true, [], array);


          listItem = 0
          //if randomize pick a random value for the list item
          if (settings.randomize) listItem = Math.floor(Math.random() * array.length)

          //init value into container
          cont.html(array[listItem] );


          // animation option
          var rotate = function() {

            cont.html("<span class='wordsrotator_wordOut'><span>" + array[listItem] + "</span></span>");

            if (settings.randomize) {
              //remove printed element from array
              array.splice(listItem, 1);
              //refill the array from his copy, if empty
              if (array.length==0) array = $.extend(true, [], array_bak);
              //generate new random number
              listItem = Math.floor(Math.random() * array.length);
            } else {
              //if reached the last element of the array, reset the index
              if (array.length==listItem+1) listItem=-1;
              //move to the next element
              listItem++;
            }

            $("<span class='wordsrotator_wordIn'>" + array[listItem] + "</span>").appendTo(cont);
            cont.wrapInner("<span class='wordsrotator_words' />");
            cont.find(".wordsrotator_wordOut").addClass("animated " + settings.animationOut);
            cont.find(".wordsrotator_wordIn").addClass("animated " + settings.animationIn);
          };



            cont.on("click", function() {
              if (settings.changeOnClick) {
                rotate();
                return false;
              };
            });

            if (settings.autoLoop) {
              var t = setInterval(rotate, settings.speed);
              if (settings.stopOnHover) {
                cont.hover(function() {
                  window.clearInterval(t)
                },function() {
                  t = setInterval(rotate, settings.speed);

                });
              };
            }

          };

        });
      }

  }( jQuery ));
  /*
AUTHOR   : rakesh535
URL      : http://themeforest.net/user/rakesh535
TEMPLATE : Spirit 404 - Animated 404 Error Page
VERSION  : 1.0

TABLE OF CONTENTS
1.0 Spirit Bubbles Formation
2.0 document.ready FUNCTION
  2.1 activate wow js
  2.2 activate wordsrotator
*/
  (function ($) {
    "use strict";

    /*-- ================================ --
        1.0 Spirit Bubbles Formation
    /*-- ================================ --*/
    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {
        x: 0,
        y: height
      };

      largeHeader = document.getElementById('wrapper-large');
      largeHeader.style.height = height + 'px';

      canvas = document.getElementById('canvas');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create particles
      circles = [];
      for (var x = 0; x < width * 0.5; x++) {
        var c = new Circle();
        circles.push(c);
      }
      animate();
    }

    // Event handling
    function addListeners() {
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + 'px';
      canvas.width = width;
      canvas.height = height;
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in circles) {
          circles[i].draw();
        }
      }
      requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
      var _this = this;

      // constructor
      (function () {
        _this.pos = {};
        init();
      })();

      function init() {
        _this.pos.x = Math.random() * width;
        _this.pos.y = height + Math.random() * 100;
        _this.alpha = 0.1 + Math.random() * 0.3;
        _this.scale = 0.1 + Math.random() * 0.3;
        _this.velocity = Math.random();
      }

      this.draw = function () {
        if (_this.alpha <= 0) {
          init();
        }
        _this.pos.y -= _this.velocity;
        _this.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
        ctx.fill();
      };
    }
    //-- end Spirit Bubbles Formation

    /*-- ================================ --
        2.0 document.ready FUNCTION
    /*-- ================================ --*/
    $(document).ready(function () {
      //-- 2.1 activate wow js
      // new WOW().init();
      //-- 2.2 activate wordsrotator
      $("#sub-title").wordsrotator({
        autoLoop: true, //auto rotate words
        randomize: false, //show random entries from the words array
        stopOnHover: false, //stop animation on hover
        changeOnClick: false, //force animation run on click
        animationIn: "flipInY", //css class for entrace animation
        animationOut: "flipOutY", //css class for exit animation
        speed: 3000, //delay in milliseconds between two words
        words: ['<span class=red>OOPS</span>, something went wrong', "Don't worry, you arrived at <span class=green>Evolt</span>!"] //Array of words, it may contain HTML values
      });
    });
  //-- end document.ready function
  })(jQuery);

}

export { bannerVisuals };
