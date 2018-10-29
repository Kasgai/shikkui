"use strict";

const jsBlocks = [
  {
    type: "getelementbyid",
    message0: "getElementById %1 %2",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "String"
      },
      {
        type: "input_statement",
        name: "TEXT",
        check: "node"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "innerhtml",
    message0: "innerHTML %1",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "String"
      }
    ],
    previousStatement: "node",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  }
];

for (let i = 0; i < jsBlocks.length; i++) {
  const blockJson = jsBlocks[i];
  Blockly.Blocks[blockJson.type] = {
    init: function() {
      this.jsonInit(blockJson);
    }
  };
}
