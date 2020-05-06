"use strict";

// extend Blockly.JavaScript for HTML
var BlockGenerator = Blockly.JavaScript;

const generateTag = (tagName, content, isIndented = true) => {
  if (isIndented) {
    return `<${tagName}>\n${content}</${tagName}>\n`;
  }
  return `<${tagName}>${content.trim()}</${tagName}>\n`;
};

BlockGenerator["html"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<!DOCTYPE HTML>\n<html>\n" + statements_content + "</html>\n";
  return code;
};

BlockGenerator["body"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<body>\n" + statements_content + "</body>\n";
  return code;
};

BlockGenerator["head"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code =
    '<head>\n  <meta charset="utf-8">\n' + statements_content + "</head>\n";
  return code;
};

BlockGenerator["title"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");

  if (statements_content != "")
    document.getElementById("title").innerText = statements_content;
  else document.getElementById("title").innerText = "untitled web page";

  var code = "<title>" + statements_content.trim() + "</title>\n";
  return code;
};

BlockGenerator["paragraph"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<p>\n" + statements_content + "</p>\n";
  return code;
};

BlockGenerator["plaintext"] = function(block) {
  var text_content = block.getFieldValue("content");
  var code = text_content + "\n";
  return code;
};

BlockGenerator["div"] = function(block) {
  const attribute = BlockGenerator.valueToCode(
    block,
    "attribute",
    BlockGenerator.ORDER_NONE
  );
  const content = BlockGenerator.statementToCode(block, "content");
  const code = `<div${attribute}>\n${content}</div>\n`;
  return code;
};

BlockGenerator["style"] = function(block) {
  var statements_name = BlockGenerator.statementToCode(block, "NAME");
  var code = ' style="' + statements_name.trim() + '"';
  return [code, BlockGenerator.ORDER_NONE];
};

BlockGenerator["color"] = function(block) {
  var colour_name = block.getFieldValue("NAME");
  var code = "color: " + colour_name + ";";
  return code;
};

BlockGenerator["bgcolour"] = function(block) {
  var colour_name = block.getFieldValue("NAME");
  var code = "background-color: " + colour_name + ";";
  return code;
};

BlockGenerator["genericstyle"] = function(block) {
  var text_property = block.getFieldValue("property");
  var text_value = block.getFieldValue("value");
  var code = text_property + ": " + text_value + ";";
  return code;
};

BlockGenerator["generictag"] = function(block) {
  var text_name = block.getFieldValue("NAME");
  var value_name = BlockGenerator.valueToCode(
    block,
    "NAME",
    BlockGenerator.ORDER_NONE
  );
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code =
    "<" +
    text_name +
    value_name +
    ">\n" +
    statements_content +
    "</" +
    text_name +
    ">\n";
  return code;
};

BlockGenerator["more_attributes"] = function(block) {
  var value_name1 = BlockGenerator.valueToCode(
    block,
    "NAME1",
    BlockGenerator.ORDER_NONE
  );
  var value_name2 = BlockGenerator.valueToCode(
    block,
    "NAME2",
    BlockGenerator.ORDER_NONE
  );
  var value_name3 = BlockGenerator.valueToCode(
    block,
    "NAME3",
    BlockGenerator.ORDER_NONE
  );
  var code = value_name1 + value_name2 + value_name3;
  return [code, BlockGenerator.ORDER_NONE];
};

BlockGenerator["genericattribute"] = function(block) {
  var text_attribute = block.getFieldValue("attribute");
  var text_value = block.getFieldValue("value");
  var code = " " + text_attribute + '="' + text_value + '"';
  return [code, BlockGenerator.ORDER_NONE];
};

BlockGenerator["link"] = function(block) {
  var text_name = block.getFieldValue("NAME");
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code =
    '<a href="' + text_name + '">' + statements_content.trim() + "</a>\n";
  return code;
};

BlockGenerator["span"] = function(block) {
  var value_name = BlockGenerator.valueToCode(
    block,
    "NAME",
    BlockGenerator.ORDER_NONE
  );
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code =
    "<span" + value_name + ">" + statements_content.trim() + "</span>\n";
  return code;
};

BlockGenerator["image"] = function(block) {
  var text_image = block.getFieldValue("IMAGE");
  var text_alt = block.getFieldValue("ALT");
  var code = '<img src="' + text_image + '" alt="' + text_alt + '">\n';
  return code;
};

BlockGenerator["emphasise"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<em>" + statements_content.trim() + "</em>\n";
  return code;
};

BlockGenerator["strong"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<strong>" + statements_content.trim() + "</strong>\n";
  return code;
};

BlockGenerator["h"] = function(block) {
  const level = block.getFieldValue("level");
  const content = BlockGenerator.statementToCode(block, "content");
  const code = `<${level}>${content.trim()}</${level}>\n`;
  return code;
};

BlockGenerator["linebreak"] = function(block) {
  var code = "<br>\n";
  return code;
};

BlockGenerator["hr"] = function(block) {
  const code = "<hr>\n";
  return code;
};

BlockGenerator["ul"] = function(block) {
  const content = BlockGenerator.statementToCode(block, "content");
  return generateTag("ul", content, false);
};

BlockGenerator["ol"] = function(block) {
  const content = BlockGenerator.statementToCode(block, "content");
  return generateTag("ol", content, false);
};

BlockGenerator["li"] = function(block) {
  const content = BlockGenerator.statementToCode(block, "content");
  return generateTag("li", content, false);
};

BlockGenerator["inserted"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<ins>" + statements_content.trim() + "</ins>\n";
  return code;
};

BlockGenerator["deleted"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<del>" + statements_content.trim() + "</del>\n";
  return code;
};

BlockGenerator["super"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<sup>" + statements_content.trim() + "</sup>\n";
  return code;
};

BlockGenerator["sub"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<sub>" + statements_content.trim() + "</sub>\n";
  return code;
};

BlockGenerator["code"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<code>\n" + statements_content + "</code>\n";
  return code;
};

BlockGenerator["quote"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<q>" + statements_content.trim() + "</q>\n";
  return code;
};

BlockGenerator["blockquote"] = function(block) {
  const content = BlockGenerator.statementToCode(block, "content");
  return generateTag("blockquote", content);
};

BlockGenerator["sample"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<samp>\n" + statements_content + "</samp>\n";
  return code;
};

BlockGenerator["keyboard"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<kbd>\n" + statements_content + "</kbd>\n";
  return code;
};

BlockGenerator["variable"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<var>" + statements_content.trim() + "</var>\n";
  return code;
};

BlockGenerator["form"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<form>\n" + statements_content + "</form>\n";
  return code;
};

BlockGenerator["table"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<table>\n" + statements_content + "</table>\n";
  return code;
};

BlockGenerator["tablerow"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<tr>\n" + statements_content + "</tr>\n";
  return code;
};

BlockGenerator["tablecell"] = function(block) {
  var statements_content = BlockGenerator.statementToCode(block, "content");
  var code = "<td>" + statements_content.trim() + "</td>\n";
  return code;
};

BlockGenerator["input_text"] = function(block) {
  var text_default = block.getFieldValue("default");
  var code = '<input value="' + text_default + '">\n';
  return code;
};

BlockGenerator["button"] = function(block) {
  var statements_name = BlockGenerator.statementToCode(block, "NAME");
  var code = "<button>" + statements_name.trim() + "</button>\n";
  return code;
};

BlockGenerator["input"] = function(block) {
  var dropdown_type = block.getFieldValue("type");
  var text_value = block.getFieldValue("value");
  var value_text = BlockGenerator.valueToCode(
    block,
    "text",
    BlockGenerator.ORDER_NONE
  );
  var code =
    '<input type="' +
    dropdown_type +
    '" value="' +
    text_value +
    '"' +
    value_text +
    " />\n";
  return code;
};

BlockGenerator["script"] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<script>\n" + statements_content + "</script>\n";
  return code;
};

BlockGenerator["onclick"] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, BlockGenerator.ORDER_NONE];
};

BlockGenerator["id"] = function(block) {
  var statements_name = block.getFieldValue("NAME");
  var code = ' id="' + statements_name + '"';
  return [code, BlockGenerator.ORDER_NONE];
};

// Node control scripts

BlockGenerator["getelementbyid"] = function(block) {
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

BlockGenerator["innerhtml"] = function(block) {
  var value_id_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = ".innerHTML=" + value_id_name.trim() + ";";
  return code;
};

BlockGenerator["select_image"] = function(block) {
  var dropdown_name = block.getFieldValue("NAME");
  var text_width = block.getFieldValue("WIDTH");
  var text_height = block.getFieldValue("HEIGHT");
  var code =
    '<img src="' +
    dropdown_name +
    '" width="' +
    text_width +
    '" height="' +
    text_height +
    '">\n';
  return code;
};

BlockGenerator["function"] = function(block) {
  var text_name = block.getFieldValue("NAME");
  var statements_statement = Blockly.JavaScript.statementToCode(
    block,
    "STATEMENT"
  );
  var code = `function ${text_name}() {
${statements_statement}
}\n`;
  return code;
};

BlockGenerator["return"] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `return ${value_name};`;
  return code;
};

Blockly.JavaScript["call_function"] = function(block) {
  var text_function_name = block.getFieldValue("FUNCTION_NAME");
  var code = `${text_function_name}()`;
  return code;
};
