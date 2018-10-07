"use strict";

const HtmlGenerator = new Blockly.Generator("HTML");

HtmlGenerator.init = workspace => {};
HtmlGenerator.finish = code => code;

HtmlGenerator.scrub_ = (block, code) => {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

HtmlGenerator.ORDER_NONE = 99;

function removeIndentAndTrailingNewline() {}

HtmlGenerator["baseframe"] = block => {
  const statements_head = HtmlGenerator.statementToCode(block, "head");
  const statements_body = HtmlGenerator.statementToCode(block, "body");

  const code =
    '<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n' +
    statements_head +
    "</head>\n\n<body>\n" +
    statements_body +
    "</body>\n</html>\n";

  return code;
};

HtmlGenerator["html"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<!DOCTYPE HTML>\n<html>\n" + statements_content + "</html>\n";
  return code;
};

HtmlGenerator["body"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<body>\n" + statements_content + "</body>\n";
  return code;
};

HtmlGenerator["head"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code =
    '<head>\n  <meta charset="utf-8">\n' + statements_content + "</head>\n";
  return code;
};

HtmlGenerator["title"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");

  if (statements_content != "")
    document.getElementById("title").innerText = statements_content;
  else document.getElementById("title").innerText = "untitled web page";

  const code = "<title>" + statements_content.trim() + "</title>\n";
  return code;
};

HtmlGenerator["paragraph"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<p>\n" + statements_content + "</p>\n";
  return code;
};

HtmlGenerator["plaintext"] = block => {
  const text_content = block.getFieldValue("content");
  const code = text_content + "\n";
  return code;
};

HtmlGenerator["division"] = block => {
  const value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_NONE
  );
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<div" + value_name + ">\n" + statements_content + "</div>\n";
  return code;
};

HtmlGenerator["style"] = block => {
  const statements_name = HtmlGenerator.statementToCode(block, "NAME");
  const code = ' style="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["color"] = block => {
  const colour_name = block.getFieldValue("NAME");
  const code = "color: " + colour_name + ";";
  return code;
};

HtmlGenerator["bgcolour"] = block => {
  const colour_name = block.getFieldValue("NAME");
  const code = "background-color: " + colour_name + ";";
  return code;
};

HtmlGenerator["genericstyle"] = block => {
  const text_property = block.getFieldValue("property");
  const text_value = block.getFieldValue("value");
  const code = text_property + ": " + text_value + ";";
  return code;
};

HtmlGenerator["generictag"] = block => {
  const text_name = block.getFieldValue("NAME");
  const value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_NONE
  );
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code =
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

HtmlGenerator["more_attributes"] = block => {
  const value_name1 = HtmlGenerator.valueToCode(
    block,
    "NAME1",
    HtmlGenerator.ORDER_NONE
  );
  const value_name2 = HtmlGenerator.valueToCode(
    block,
    "NAME2",
    HtmlGenerator.ORDER_NONE
  );
  const value_name3 = HtmlGenerator.valueToCode(
    block,
    "NAME3",
    HtmlGenerator.ORDER_NONE
  );
  const code = value_name1 + value_name2 + value_name3;
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["genericattribute"] = block => {
  const text_attribute = block.getFieldValue("attribute");
  const text_value = block.getFieldValue("value");
  const code = " " + text_attribute + '="' + text_value + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["link"] = block => {
  const text_name = block.getFieldValue("NAME");
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code =
    '<a href="' + text_name + '">' + statements_content.trim() + "</a>\n";
  return code;
};

HtmlGenerator["span"] = block => {
  const value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_NONE
  );
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code =
    "<span" + value_name + ">" + statements_content.trim() + "</span>\n";
  return code;
};

HtmlGenerator["image"] = block => {
  const text_image = block.getFieldValue("IMAGE");
  const text_alt = block.getFieldValue("ALT");
  const code = '<img src="' + text_image + '" alt="' + text_alt + '">\n';
  return code;
};

HtmlGenerator["emphasise"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<em>" + statements_content.trim() + "</em>\n";
  return code;
};

HtmlGenerator["strong"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<strong>" + statements_content.trim() + "</strong>\n";
  return code;
};

HtmlGenerator["headline"] = block => {
  const dropdown_name = block.getFieldValue("NAME");
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code =
    "<" +
    dropdown_name +
    ">" +
    statements_content.trim() +
    "</" +
    dropdown_name +
    ">\n";
  return code;
};

HtmlGenerator["linebreak"] = block => {
  const code = "<br>\n";
  return code;
};

HtmlGenerator["horizontalbreak"] = block => {
  const code = "<hr>\n";
  return code;
};

HtmlGenerator["unorderedlist"] = block => {
  const statements_name = HtmlGenerator.statementToCode(block, "NAME");
  const code = "<ul>\n" + statements_name + "</ul>\n";
  return code;
};

HtmlGenerator["orderedlist"] = block => {
  const statements_name = HtmlGenerator.statementToCode(block, "NAME");
  const code = "<ol>\n" + statements_name + "</ol>\n";
  return code;
};

HtmlGenerator["listelement"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<li>" + statements_content + "</li>\n";
  return code;
};

HtmlGenerator["inserted"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<ins>" + statements_content.trim() + "</ins>\n";
  return code;
};

HtmlGenerator["deleted"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<del>" + statements_content.trim() + "</del>\n";
  return code;
};

HtmlGenerator["super"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<sup>" + statements_content.trim() + "</sup>\n";
  return code;
};

HtmlGenerator["sub"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<sub>" + statements_content.trim() + "</sub>\n";
  return code;
};

HtmlGenerator["code"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<code>\n" + statements_content + "</code>\n";
  return code;
};

HtmlGenerator["quote"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<q>" + statements_content.trim() + "</q>\n";
  return code;
};

HtmlGenerator["blockquote"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<blockquote>\n" + statements_content + "</blockquote>\n";
  return code;
};

HtmlGenerator["sample"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<samp>\n" + statements_content + "</samp>\n";
  return code;
};

HtmlGenerator["keyboard"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<kbd>\n" + statements_content + "</kbd>\n";
  return code;
};

HtmlGenerator["variable"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<var>" + statements_content.trim() + "</var>\n";
  return code;
};

HtmlGenerator["form"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<form>\n" + statements_content + "</form>\n";
  return code;
};

HtmlGenerator["table"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<table>\n" + statements_content + "</table>\n";
  return code;
};

HtmlGenerator["tablerow"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<tr>\n" + statements_content + "</tr>\n";
  return code;
};

HtmlGenerator["tablecell"] = block => {
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<td>" + statements_content.trim() + "</td>\n";
  return code;
};

HtmlGenerator["input_text"] = block => {
  const text_default = block.getFieldValue("default");
  const code = '<input value="' + text_default + '">\n';
  return code;
};

HtmlGenerator["button"] = block => {
  const statements_name = HtmlGenerator.statementToCode(block, "NAME");
  const code = "<button>" + statements_name.trim() + "</button>\n";
  return code;
};

HtmlGenerator["input"] = block => {
  const dropdown_type = block.getFieldValue("type");
  const text_value = block.getFieldValue("value");
  const value_text = HtmlGenerator.valueToCode(
    block,
    "text",
    HtmlGenerator.ORDER_NONE
  );
  const code =
    '<input type="' +
    dropdown_type +
    '" value="' +
    text_value +
    '"' +
    value_text +
    " />\n";
  return code;
};

HtmlGenerator["script"] = block => {
  const statements_content = Blockly.JavaScript.statementToCode(
    block,
    "content"
  );
  const code = "<script>\n" + statements_content + "</script>\n";
  return code;
};

HtmlGenerator["onclick"] = block => {
  const statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  const code = ' onclick="' + statements_name.trim() + '"';
  return [code, HtmlGenerator.ORDER_NONE];
};

HtmlGenerator["body_attributes"] = block => {
  const value_name = HtmlGenerator.valueToCode(
    block,
    "NAME",
    HtmlGenerator.ORDER_NONE
  );
  const statements_content = HtmlGenerator.statementToCode(block, "content");
  const code = "<body" + value_name + ">\n" + statements_content + "</body>\n";
  return code;
};
