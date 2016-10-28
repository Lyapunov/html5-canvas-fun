//var lib = require('item-20-game-of-life-lib');
require(['item-20-game-of-life-lib'], function() {

var mainItem     = document.getElementById('canvas');
var context      = mainItem.getContext('2d');

var screenWidth  = mainItem.width  = window.innerWidth  - 20;
var screenHeight = mainItem.height = window.innerHeight - 20;
var screenScale  = Math.min( screenWidth, screenHeight ) / 2;

var fps = 25;
var ANIMATION;

function drawBackground() {
   context.fillStyle = color();
   context.fillRect(0,0,screenWidth,screenHeight);
}

// common functions 
function drawScene() {
   setTimeout( function() {
      drawBackground();
      ANIMATION = requestAnimationFrame(drawScene);
   }, 1000 / fps );
}

function initCanvas() {
   screenWidth  = mainItem.width  = window.innerWidth  - 20;
   screenHeight = mainItem.height = window.innerHeight - 20;
   screenScale  = Math.min( screenWidth, screenHeight ) / 2;

   // starting the engine only if it is not running
   if ( !ANIMATION ) {
      drawScene();
   }
}

//init
(function() {
   initCanvas();
   addEventListener('resize', initCanvas, false);
})();

});
