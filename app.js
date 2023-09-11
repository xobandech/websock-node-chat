const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({port: 8080 });
wss.on("listening", () => {
    console.log("listening on port 8080");
})

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    wss.clients.forEach((client) => {
        client.send(data.toString())
    });
  });

});
