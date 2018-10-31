const ws = new Websocket();

ws.onopen = () => {
  console.log("ok");
};

ws.onclose = () => {
  console.log("close");
};

ws.onerror = e => {
  console.log(`error: ${e}`);
};
