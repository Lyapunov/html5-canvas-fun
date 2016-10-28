var buster = require("buster");
var assert = buster.referee.assert;

var subj = require("../item-20-game-of-life-");

buster.testCase("Gizmo", {
   "knows a little math" : function() {
      assert.equals(2 + 3, 4);
   }
});
