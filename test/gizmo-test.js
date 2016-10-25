var buster = require("buster");
var assert = buster.referee.assert;

buster.testCase("Gizmo", {
   "knows a little math" : function() {
      assert.equals(2 + 3, 4);
   }
});
