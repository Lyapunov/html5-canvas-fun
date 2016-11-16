//var lib = require('item-20-game-of-life-lib');
require(['item-20-game-of-life-lib'], function() {

var mainItem     = document.getElementById('canvas');
var context      = mainItem.getContext('2d');

var screenWidth  = mainItem.width  = window.innerWidth  - 20;
var screenHeight = mainItem.height = window.innerHeight - 20;
var screenScale  = Math.min( screenWidth, screenHeight );

var board;
var tiles = 25;

var fps = 10;
var ANIMATION;
var noColor = "black";
var yesColor = "green";

function drawBackground() {
   context.fillStyle = color();

   if ( board !== 'undefined' ) {
      for ( var x = 0; x < tiles; ++ x ) {
         for ( var y = 0; y < tiles; ++ y ) {
            var ax = ( x * screenScale ) / tiles;
            var ay = ( y * screenScale ) / tiles;
            var bx = ( (x+1) * screenScale ) / tiles;
            var by = ( (y+1) * screenScale ) / tiles;
            context.fillStyle = board.getCell(x,y) ? yesColor : noColor;
            var shift = (screenWidth - screenScale) / 2;
            context.fillRect(ax+shift,ay,(bx-ax),(by-ay));
         }
      }
   }
}

// common functions 
function drawScene() {
   setTimeout( function() {
      drawBackground();
      ANIMATION = requestAnimationFrame(drawScene);
      if ( board !== 'undefined' ) {
         board.tick();
      }
   }, 1000 / fps );
}

function initCanvas() {
   screenWidth  = mainItem.width  = window.innerWidth  - 20;
   screenHeight = mainItem.height = window.innerHeight - 20;
   screenScale  = Math.min( screenWidth, screenHeight );

   context.fillStyle = noColor;
   context.fillRect(0,0,screenWidth,screenHeight);

   board = new GameBoard;
   board.addCell(1,0);
   board.addCell(2,1);
   board.addCell(0,2);
   board.addCell(1,2);
   board.addCell(2,2);

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
