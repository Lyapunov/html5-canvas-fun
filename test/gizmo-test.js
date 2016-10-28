var buster = require("buster");
var assert = buster.referee.assert;

var subj = require("../item-20-game-of-life-lib");

buster.testCase("Gizmo", {
   "uses the right color" : function() {
      assert.equals(subj.color(), "purple");
   }
});
