var color = function() {
   return "purple";
}

var GameBoard = function() {
   this.cells=[];
   this.addCell = function (cx,cy) {
      this.cells.push({x:cx,y:cy});
   };
   this.tick = function() {}
   this.getCell = function (x,y) {
      console.log(this.cells.length > 2);
      return ( this.cells.length > 2 );
   };
}

module.exports.color = color;
module.exports.GameBoard = GameBoard;
