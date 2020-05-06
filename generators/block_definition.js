"use strict";

const mainRootBlock = [
  {
    type: "html",
    message0: "html %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "document"
      }
    ],
    colour: 0,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
  }
];

const documentMetadataBlock = [
  {
    type: "head",
    message0: "head %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "head"
      }
    ],
    previousStatement: "document",
    nextStatement: "document",
    colour: 0,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
  },
  {
    type: "title",
    message0: "title %1",
    args0: [
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "head",
    nextStatement: "head",
    colour: 0,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"
  }
];

const sectioningRootBlock = [
  {
    type: "body",
    message0: "body %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "document",
    nextStatement: "document",
    colour: 0,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
  }
];

const textBlock = [
  {
    type: "plaintext",
    message0: "text %1",
    args0: [
      {
        type: "field_input",
        name: "content",
        text: ""
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: ""
  }
];

const contentSectioningBlock = [
  {
    type: "h",
    message0: "h %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "level",
        options: [
          ["1", "h1"],
          ["2", "h2"],
          ["3", "h2"],
          ["4", "h4"],
          ["5", "h5"],
          ["6", "h6"]
        ]
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl:
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
  }
];

const textContentBlock = [
  {
    type: "blockquote",
    message0: "blockquote %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl:
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
  },
  {
    type: "div",
    message0: "div %1 %2",
    args0: [
      {
        type: "input_value",
        name: "attribute",
        check: "attribute"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
  },
  {
    type: "hr",
    message0: "hr",
    previousStatement: "html",
    nextStatement: "html",
    colour: 330,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"
  },
  {
    type: "li",
    message0: "li %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"
  },
  {
    type: "ol",
    message0: "ol %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 330,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
  },
  {
    type: "ul",
    message0: "ul %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 330,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
  }
];

const inlineTextSemanticsBlock = [
  {
    type: "a_href",
    message0: 'a href = " %1 " %2 %3',
    args0: [
      {
        type: "field_input",
        name: "target",
        text: "target"
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
  },
  {
    type: "br",
    message0: "br",
    previousStatement: "html",
    nextStatement: "html",
    colour: 330,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"
  },
  {
    type: "code",
    message0: "code %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"
  },
  {
    type: "em",
    message0: "em %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
  },
  {
    type: "kbd",
    message0: "kbd %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd"
  },
  {
    type: "q",
    message0: "q %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
  },
  {
    type: "samp",
    message0: "samp %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp"
  },
  {
    type: "span",
    message0: "span %1 %2",
    args0: [
      {
        type: "input_value",
        name: "attribute",
        check: "attribute"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"
  },
  {
    type: "strong",
    message0: "strong %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"
  },
  {
    type: "sub",
    message0: "sub %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub"
  },
  {
    type: "sup",
    message0: "sup %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup"
  },
  {
    type: "var",
    message0: "var %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
  }
];

const otherBlocks = [
  {
    type: "style",
    message0: "style =  %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "NAME",
        check: "css"
      }
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "color",
    message0: "color :  %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000"
      }
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "more_attributes",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "NAME1",
        check: "attribute"
      },
      {
        type: "input_value",
        name: "NAME2",
        check: "attribute"
      },
      {
        type: "input_value",
        name: "NAME3",
        check: "attribute"
      }
    ],
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "form",
    message0: "form %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
  },
  {
    type: "table",
    message0: "table %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "table"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 180,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
  },
  {
    type: "button",
    message0: "button %1 %2",
    args0: [
      {
        type: "input_value",
        name: "attribute"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
  },
  {
    type: "input",
    message0: "%1 input %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "type",
        options: [
          ["text", "text"],
          ["email", "email"],
          ["number", "number"],
          ["password", "password"],
          ["checkbox", "checkbox"],
          ["radiobutton", "radio"],
          ["button", "button"],
          ["color", "color"],
          ["date", "date"],
          ["local time", "datetime-local"],
          ["file", "file"],
          ["hidden", "hidden"],
          ["image", "image"],
          ["month", "month"],
          ["range", "range"],
          ["reset", "reset"],
          ["search", "search"],
          ["submit", "submit"],
          ["telephone number", "tel"],
          ["time", "time"],
          ["url", "url"],
          ["week", "week"]
        ]
      },
      {
        type: "field_input",
        name: "value",
        text: ""
      },
      {
        type: "input_value",
        name: "text"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
  },
  {
    type: "script",
    message0: "script %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "code",
        check: "javascript"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
  },
  {
    type: "onclick",
    message0: "on click =  %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "code",
        check: "javascript"
      }
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "id",
    message0: "id= %1",
    args0: [
      {
        type: "field_input",
        name: "id",
        text: "app"
      }
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "getelementbyid",
    message0: "getElementById %1 %2 %3",
    args0: [
      {
        type: "field_input",
        name: "id",
        text: "app"
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "dom_code",
        check: "dom"
      }
    ],
    previousStatement: "javascript",
    nextStatement: "javascript",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "innerhtml",
    message0: "innerHTML %1",
    args0: [
      {
        type: "field_input",
        name: "text",
        text: "Hello, World!"
      }
    ],
    previousStatement: "dom",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "select_image",
    message0: "image %1 width %2 height %3",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [["Kasgai", "https://kasgai.com/asset/icon.jpg"]]
      },
      {
        type: "field_input",
        name: "WIDTH",
        text: ""
      },
      {
        type: "field_input",
        name: "HEIGHT",
        text: ""
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "select_image",
    message0: "image %1 width %2 height %3",
    args0: [
      {
        type: "field_dropdown",
        name: "source",
        options: [["Kasgai", "https://kasgai.com/asset/icon.jpg"]]
      },
      {
        type: "field_input",
        name: "width",
        text: ""
      },
      {
        type: "field_input",
        name: "height",
        text: ""
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "background_color",
    message0: "background-color :  %1",
    args0: [
      {
        type: "field_colour",
        name: "NAME",
        colour: "#ff0000"
      }
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "generic_style",
    message0: "%1 : %2",
    args0: [
      {
        type: "field_input",
        name: "property",
        text: "property"
      },
      {
        type: "field_input",
        name: "value",
        text: "value"
      }
    ],
    previousStatement: "css",
    nextStatement: "css",
    colour: 230,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
  },
  {
    type: "generic_attribute",
    message0: "%1  =  %2",
    args0: [
      {
        type: "field_input",
        name: "attribute",
        text: "attribute"
      },
      {
        type: "field_input",
        name: "value",
        text: "value"
      }
    ],
    inputsInline: true,
    output: "attribute",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "generic_tag",
    message0: "< %1 > %2 %3",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "tag"
      },
      {
        type: "input_value",
        name: "NAME",
        check: "attribute"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference"
  },
  {
    type: "a_href",
    message0: 'a href = " %1 " %2 %3',
    args0: [
      {
        type: "field_input",
        name: "target",
        text: "target"
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
  },
  {
    type: "img",
    message0: "img %1 or %2",
    args0: [
      {
        type: "field_input",
        name: "source",
        text: "URL"
      },
      {
        type: "field_input",
        name: "alt",
        text: "alternative text"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
  },
  {
    type: "p",
    message0: "p %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
  },
  {
    type: "em",
    message0: "em %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
  },
  {
    type: "ul",
    message0: "ul %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 330,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
  },
  {
    type: "ol",
    message0: "ol %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 330,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
  },
  {
    type: "ins",
    message0: "ins %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins"
  },
  {
    type: "del",
    message0: "del %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "html",
    nextStatement: "html",
    colour: 90,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del"
  },
  {
    type: "tr",
    message0: "tr %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "tablerow"
      }
    ],
    previousStatement: "table",
    nextStatement: "table",
    colour: 180,
    tooltip: "",
    helpUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr"
  },
  {
    type: "td",
    message0: "td %1 %2",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "content",
        check: "html"
      }
    ],
    previousStatement: "tablerow",
    nextStatement: "tablerow",
    colour: 180,
    tooltip: "",
    helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
  },
  {
    type: "function",
    message0: "function %1 %2 %3",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "myFunc"
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "STATEMENT",
        check: "javascirpt"
      }
    ],
    previousStatement: "javascirpt",
    nextStatement: "javascirpt",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "return",
    message0: "return %1",
    args0: [
      {
        type: "input_value",
        name: "value",
        check: "javascript"
      }
    ],
    previousStatement: "javascript",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "call_function",
    message0: "%1 ()",
    args0: [
      {
        type: "field_input",
        name: "FUNCTION_NAME",
        text: "myFunc"
      }
    ],
    previousStatement: "javascript",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  }
];

const blockDefinitions = [
  ...mainRootBlock,
  ...documentMetadataBlock,
  ...sectioningRootBlock,
  ...contentSectioningBlock,
  ...textContentBlock,
  ...inlineTextSemanticsBlock,
  ...textBlock
];

const localize = blockDefinition => {
  if (blockDefinition.type in Msg.blocks) {
    blockDefinition = {
      ...blockDefinition,
      ...Msg.blocks[blockDefinition.type]
    };
  }
  return blockDefinition;
};

for (let i = 0; i < blockDefinitions.length; i++) {
  const blockJson = localize(blockDefinitions[i]);
  Blockly.Blocks[blockJson.type] = {
    init: function() {
      this.jsonInit(blockJson);
    }
  };
}
