let p = require("path");
let http = require("http");
let { path, secret, timestamp } = require(p.resolve(__dirname, "../config.json"));
let createHandler = require("github-webhook-handler");
let handler = createHandler({ path, secret, timestamp });
let app = http.createServer(function (req, res) {
	handler(req, res, function (err) {
		res.statusCode = 404;
		res.end("no such location");
	});
});
handler.on("push", require("./pushHandle"));
module.exports = app;
