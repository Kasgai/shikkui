"use strict";

const loadXml = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error(error));
};

const makeWorkspace = htmlToolbox => {
  const htmlBlocklyArea = document.getElementById("blocklyArea");

  const htmlWorkspace = Blockly.inject(
    htmlBlocklyArea,
    makeOption(htmlToolbox)
  );

  const htmlBlockXmlCode = localStorage.getItem("blockly-html-code");
  if (htmlBlockXmlCode) {
    const xml = Blockly.Xml.textToDom(htmlBlockXmlCode);
    Blockly.Xml.domToWorkspace(xml, htmlWorkspace);
  }

  Blockly.svgResize(htmlWorkspace);

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

  htmlWorkspace.addChangeListener(updateHtmlWorkspace);
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
  const requestUrl = [`${windowLocation}/html_toolbox.xml`];

  const result = await Promise.all(requestUrl.map(loadXml));

  const htmlToolbox = result[0];
  makeWorkspace(htmlToolbox);
})();
