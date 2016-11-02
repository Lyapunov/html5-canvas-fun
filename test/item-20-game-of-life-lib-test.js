var buster = require("buster");
var assert = buster.referee.assert;

var subj = require("../item-20-game-of-life-lib");

buster.testCase("Game of life lib", {
   "uses the right color" : function() {
      assert.equals(subj.color(), "purple");
   },
   "lonely cell dies" : function() {
      var game = new subj.GameBoard();
      game.addCell(1,1);
      game.tick();
      assert.equals(game.getCell(0,0), 0);
   }
});
