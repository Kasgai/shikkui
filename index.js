if (typeof Msg == "object" && Msg.categories) {
  for (category in Msg.categories) {
    elements = document.getElementsByName(category);
    if (elements.length == 0) {
      continue;
    }
    elements[0].setAttribute("name", Msg.categories[category]);
  }
}

const loadXml = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error(error));
};

(async () => {
  // var toolbox = document.getElementById("toolbox");
  const blocklyArea = document.getElementById("blocklyArea");

  const requestUrl = [
    "http://localhost:8000/toolbox.xml",
    "http://localhost:8000/workspace.xml"
  ];
  const result = await Promise.all(requestUrl.map(loadXml));

  const toolbox = result[0];
  // const workspaceBlocks = result[1];

  const options = {
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

  const workspace = Blockly.inject(blocklyArea, options);

  var xml_text = localStorage.getItem("blockly-html-code");
  if (xml_text) {
    var xml = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }

  Blockly.svgResize(workspace);

  function myUpdateFunction(event) {
    var code = HtmlGenerator.workspaceToCode(workspace);
    document.getElementById("sourcecode").innerText = code;
    document.getElementById("website").src =
      "data:text/html;charset=utf-8," + encodeURIComponent(code);

    // Save Blocks
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("blockly-html-code", xml_text);
  }
  workspace.addChangeListener(myUpdateFunction);

  function saveWorkspaceToDownload() {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    newWindow = window.open(
      "data:application/octet-stream," + encodeURIComponent(xml_text),
      "webseite.blockly.xml"
    );
  }
  document.getElementById("saveButton").onclick = saveWorkspaceToDownload;

  function saveHtmlToDownload() {
    var code = HtmlGenerator.workspaceToCode(workspace);
    newWindow = window.open(
      "data:application/octet-stream," + encodeURIComponent(code),
      "webseite.html"
    );
  }
  document.getElementById("exportButton").onclick = saveHtmlToDownload;

  function loadWorkspaceFromUpload(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var xml_text = e.target.result;
      if (xml_text) {
        var xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, workspace);
      }
    };
    reader.readAsText(file);
  }
  document
    .getElementById("fileButton")
    .addEventListener("change", loadWorkspaceFromUpload, false);
})();
