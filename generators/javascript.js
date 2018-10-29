"use strict";

Blockly.JavaScript["getelementbyid"] = function(block) {
  var value_id_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_text = Blockly.JavaScript.statementToCode(block, "TEXT");
  var code =
    "document.getElementById(" +
    value_id_name.trim() +
    ")" +
    statements_text.trim() +
    "\n";
  return code;
};

Blockly.JavaScript["innerhtml"] = function(block) {
  var value_id_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = ".innerHTML=" + value_id_name.trim() + ";";
  return code;
};
