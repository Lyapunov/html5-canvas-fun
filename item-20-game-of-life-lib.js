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
              && Math.abs(xy.y - pxy.y) <= 1
              && !( xy.x == pxy.x && xy.y == pxy.y ) ) {
            ++num;
         }
      } );
      return num;
   };
   this.tick = function() {
      var newCells=[];
      this.cells.forEach( function( xy ) {
         var non = self.numberOfNeighbours( xy );
         if ( non == 2 || non == 3 ) {
            newCells.push( xy ); 
         }
      } );
      var memory = [];
      this.cells.forEach( function( xy ) {
         for ( var i = -1; i <= 1; ++i ) {
            for ( var j = -1; j <= 1; ++j ) {
               if ( i == 0 && j == 0 ) {
                  continue;
               }
               var nxy = {x:xy.x+i,y:xy.y+j};
               var marker = nxy.x+"_"+nxy.y;
               if ( !(marker in memory ) ) {
                  if ( self.numberOfNeighbours( nxy ) == 3 ) {
                     newCells.push( nxy );
                  }
                  memory[ marker ]=1;
               }
            }
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
