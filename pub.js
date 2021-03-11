var mqtt = require("mqtt");

var options = {
  clientId: "web-client",
  connectTimeout: 5000,
  hostname: "localhost",
  //hostname: "192.168.0.199",
  port: 1883,
  path: "/mqtt",
};

var i = 228;

var client = mqtt.connect(options);
var topic = "in";

var state = "";

console.log("pub started");

client.on("connect", function () {
  //setInterval(function () {
  client.publish(topic, state + " on " + i);
  console.log("Message sent!" + i);
  i++;
  client.end();
  //}, 5000);
});
