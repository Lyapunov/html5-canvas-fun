var buster = require("buster");
var assert = buster.referee.assert;

var subj = require("../item-20-game-of-life-lib");

buster.testCase("Game of life lib", {
   "lonely cell dies" : function() {
      var game = new subj.GameBoard();
      game.addCell(1,1);
      game.tick();
      assert.equals(game.getCell(0,0), false);
   },
   "middle cell survives" : function() {
      var game = new subj.GameBoard();
      game.addCell(1,1);
      game.addCell(2,1);
      game.addCell(3,1);
      game.tick();
      assert.equals(game.getCell(2,1), true);
   }
});
