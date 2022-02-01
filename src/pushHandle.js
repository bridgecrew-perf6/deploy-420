let run_cmd = require("./run_cmd");
module.exports = function (event) {
	console.log("Received a push event for %s to %s", event.payload.repository.name, event.payload.ref);
	// 分支判断
	if (event.payload.ref === "refs/heads/master") {
		console.log("deploy master..");
		run_cmd("sh", ["../deploy.sh"], function (text) {
			console.log(text);
		});
	}
};
