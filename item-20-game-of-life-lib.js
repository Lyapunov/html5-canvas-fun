var color = function() {
   return "purple";
}

var GameBoard = function() {
   var self = this;
   this.cells=[];
   this.addCell = function (cx,cy) {
      this.cells.push({x:cx,y:cy});
   };
   this.numberOfNeighbours = function (pxy) {
      var num = 0;
      this.cells.forEach( function( xy ) {
         if ( Math.abs(xy.x - pxy.x) <= 1
              && Math.abs(xy.y - pxy.y) <= 1 ) {
            ++num;
         }
      } );
      return num;
   };
   this.tick = function() {
      var newCells=[];
      this.cells.forEach( function( xy ) {
         var non = self.numberOfNeighbours( xy )-1;
         if ( non == 2 || non == 3 ) {
            newCells.push( xy ); 
         }
      } );
      this.cells = newCells;
   };
   this.getCell = function (cx,cy) {
      var num = false;
      this.cells.forEach( function( xy ) {
         if ( xy.x == cx && xy.y == cy ) {
            num = true;
         }
      } );
      return num;
   };
}

module.exports.color = color;
module.exports.GameBoard = GameBoard;
