let p = require("path");
let http = require("http");
console.log(__dirname);
let { port, path, secret, timestamp } = require(p.resolve(__dirname, "../config.json"));
let createHandler = require("gitee-webhook-handler");
let handler = createHandler({ path, secret, timestamp });
let app = http.createServer(function (req, res) {
	handler(req, res, function (err) {
		res.statusCode = 404;
		res.end("no such location");
	});
});
handler.on("Push Hook", require("./pushHandle"));
module.exports = app;
