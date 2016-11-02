var color = function() {
   return "purple";
}

var GameBoard = function() {
   this.addCell = function (x,y) {
   };
   this.tick = function() {}
   this.getCell = function (x,y) {
      return 0;
   };
}

module.exports.color = color;
module.exports.GameBoard = GameBoard;
