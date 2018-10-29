"use strict";

const executeJavaScript = () => {
  const jsSourcecode = document.getElementById("jsSourcecode").innerText;

  const iframeDocument =
    "document.getElementById('website').contentWindow.document";
  const fixDocumentRootJsSourceCode = jsSourcecode.replace(
    "document",
    iframeDocument
  );

  eval(fixDocumentRootJsSourceCode);
};

const loadXml = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error(error));
};

const makeWorkspace = (htmlToolbox, jsToolbox) => {
  const htmlBlocklyArea = document.getElementById("blocklyArea");
  const jsBlocklyArea = document.getElementById("blocklyJsArea");

  const htmlWorkspace = Blockly.inject(
    htmlBlocklyArea,
    makeOption(htmlToolbox)
  );
  const jsWorkspace = Blockly.inject(jsBlocklyArea, makeOption(jsToolbox));

  const htmlBlockXmlCode = localStorage.getItem("blockly-html-code");
  if (htmlBlockXmlCode) {
    const xml = Blockly.Xml.textToDom(htmlBlockXmlCode);
    Blockly.Xml.domToWorkspace(xml, htmlWorkspace);
  }

  const jsBlockXmlCode = localStorage.getItem("blockly-js-code");
  if (jsBlockXmlCode) {
    var xml = Blockly.Xml.textToDom(jsBlockXmlCode);
    Blockly.Xml.domToWorkspace(xml, jsWorkspace);
  }

  Blockly.svgResize(htmlWorkspace);
  Blockly.svgResize(jsWorkspace);

  const updateHtmlWorkspace = () => {
    const code = HtmlGenerator.workspaceToCode(htmlWorkspace);
    document.getElementById("htmlSourcecode").innerText = code;
    document.getElementById(
      "website"
    ).src = `data:text/html;charset=utf-8,${encodeURIComponent(code)}`;

    const xml = Blockly.Xml.workspaceToDom(htmlWorkspace);
    const xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("blockly-html-code", xml_text);
  };

  const updateJsWorkspace = () => {
    const code = Blockly.JavaScript.workspaceToCode(jsWorkspace);
    document.getElementById("jsSourcecode").innerText = code;

    const xml = Blockly.Xml.workspaceToDom(jsWorkspace);
    const xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("blockly-js-code", xml_text);
  };

  htmlWorkspace.addChangeListener(updateHtmlWorkspace);
  jsWorkspace.addChangeListener(updateJsWorkspace);
};

const makeOption = toolbox => {
  return {
    toolbox: toolbox,
    collapse: true,
    maxBlocks: Infinity,
    trashcan: true,
    tooltips: true,
    css: true,
    media: "https://blockly-demo.appspot.com/static/media/",
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true
  };
};

(async () => {
  const windowLocation = window.location;
  const requestUrl = [
    `${windowLocation}/html_toolbox.xml`,
    `${windowLocation}/js_toolbox.xml`
  ];

  const result = await Promise.all(requestUrl.map(loadXml));

  const htmlToolbox = result[0];
  const jsToolbox = result[1];
  makeWorkspace(htmlToolbox, jsToolbox);
})();
