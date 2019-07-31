"use strict";

let workspace = null;
let userInfo = null;
let isHost = false;

// firebase connection control
const db = firebase.database();
// public database
let fbDatabase = db.ref(`/shikkui`);

// firebase auth
const firebaseAuth = new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      resolve(user);
    }
    reject("please login");
  });
});

// XML setup
const loadXml = url => {
  return fetch(`/shikkui/${url}`)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error(error));
};

const makeWorkspace = htmlToolbox => {
  const htmlBlocklyArea = document.getElementById("blocklyArea");

  workspace = Blockly.inject(htmlBlocklyArea, makeOption(htmlToolbox));

  if (isHost) {
    const htmlBlockXmlCode = localStorage.getItem("blockly-html-code");
    if (htmlBlockXmlCode) {
      workspace.clear();
      const xml = Blockly.Xml.textToDom(htmlBlockXmlCode);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  }

  Blockly.svgResize(workspace);

  const updateWorkspace = () => {
    const code = HtmlGenerator.workspaceToCode(workspace);
    document.getElementById("htmlSourcecode").innerText = code;
    document.getElementById(
      "website"
    ).src = `data:text/html;charset=utf-8,${encodeURIComponent(code)}`;

    if (isHost) {
      const xml = Blockly.Xml.workspaceToDom(workspace);
      const xmlText = Blockly.Xml.domToText(xml);
      localStorage.setItem("blockly-html-code", xmlText);

      fbDatabase.set({ xmlCode: xmlText });
    }
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

// import Files
const importBlockXml = e => {
  const file = e.files[0];
  if (!file) {
    console.error("file was not found");
    return;
  }
  if (!workspace) {
    console.error("workspace was not found");
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    const xmlText = e.target.result;
    if (xmlText) {
      workspace.clear();
      const xml = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  };
  reader.readAsText(file);
};

// export Files
const exportBlockXml = () => {
  if (workspace) {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    const blob = new Blob([xmlText], { type: "text/xml;charset=utf-8" });
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

const firebaseDataAccess = userInfo => {
  // load personal database
  fbDatabase = db.ref(`/shikkui/${userInfo.uid}`);

  // receive xml code
  fbDatabase.on("value", snapshot => {
    if (snapshot.val() != null && !isHost) {
      workspace.clear();
      const xml = Blockly.Xml.textToDom(snapshot.val().xmlCode);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  });
};

// change isHost
const toggleHost = () => {
  isHost = !isHost;
  const label = isHost ? "master" : "slave";
  document.getElementById("hostButton").innerText = label;
};

// main logic
(async () => {
  // add uploader link
  const projectId = window.location.search.replace(/\?id=/, "");
  document.getElementById("uploadImage").href = `imageuploader.html?id=${projectId}`;
  const requestUrl = "/toolbox.xml";
  const result = await Promise.all([loadXml(requestUrl), firebaseAuth]).catch(
    error => {
      alert(error);
      return;
    }
  );

  const htmlToolbox = result[0];
  makeWorkspace(htmlToolbox);

  const userInfo = result[1];
  firebaseDataAccess(userInfo);
})();
