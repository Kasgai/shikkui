"use strict";

let workspace = null;

// XML setup

const loadXml = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error(error));
};

const makeWorkspace = htmlToolbox => {
  const htmlBlocklyArea = document.getElementById("blocklyArea");

  workspace = Blockly.inject(htmlBlocklyArea, makeOption(htmlToolbox));

  const htmlBlockXmlCode = localStorage.getItem("blockly-html-code");
  if (htmlBlockXmlCode) {
    const xml = Blockly.Xml.textToDom(htmlBlockXmlCode);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }

  Blockly.svgResize(workspace);

  const updateWorkspace = () => {
    const code = HtmlGenerator.workspaceToCode(workspace);
    document.getElementById("htmlSourcecode").innerText = code;
    document.getElementById(
      "website"
    ).src = `data:text/html;charset=utf-8,${encodeURIComponent(code)}`;

    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("blockly-html-code", xml_text);
  };

  workspace.addChangeListener(updateWorkspace);
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

// export Files

const exportBlockXml = () => {
  if (workspace) {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xml_text = Blockly.Xml.domToText(xml);
    const blob = new Blob([xml_text], { type: "text/xml;charset=utf-8" });
    document.getElementById("exportBlockXml").href = window.URL.createObjectURL(
      blob
    );
  } else {
    console.error("cannot export Block XML");
  }
};

const exportHtml = () => {
  if (workspace) {
    const code = HtmlGenerator.workspaceToCode(workspace);
    const blob = new Blob([code], {
      type: "text/html;charset=utf-8"
    });
    document.getElementById("exportHtml").href = window.URL.createObjectURL(
      blob
    );
  } else {
    console.error("cannot export HTML");
  }
};
