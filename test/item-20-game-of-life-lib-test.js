var buster = require("buster");
var assert = buster.referee.assert;

var subj = require("../item-20-game-of-life-lib");

buster.testCase("Game of life lib", {
   setUp: function() {
      this.game = new subj.GameBoard();
   },
   "lonely cell dies" : function() {
      this.game.addCell(1,1);
      this.game.tick();
      assert.equals(this.game.getCell(0,0), false);
   },
   "middle cell survives" : function() {
      this.game.addCell(1,1);
      this.game.addCell(2,1);
      this.game.addCell(3,1);
      this.game.tick();
      assert.equals(this.game.getCell(2,1), true);
   },
   "outer cell dies" : function() {
      this.game.addCell(1,1);
      this.game.addCell(2,1);
      this.game.addCell(3,1);
      this.game.tick();
      assert.equals(this.game.getCell(3,1), false);
   },
   "cell revives" : function() {
      this.game.addCell(1,1);
      this.game.addCell(2,2);
      this.game.addCell(3,1);
      this.game.tick();
      assert.equals(this.game.getCell(2,1), true);
   },
   "glider after two ticks in a row" : function() {
      this.game.addCell(1,0);
      this.game.addCell(2,1);
      this.game.addCell(0,2);
      this.game.addCell(1,2);
      this.game.addCell(2,2);

      this.game.tick();
      this.game.tick();
      assert.equals(this.game.getCell(1,3), true);
   }
});
