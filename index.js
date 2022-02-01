let path = require("path");
let { form, port } = require(path.resolve(__dirname, "config.json"));
if (form) {
	let app = require("./src/" + form + ".js");
	app.listen(port, () => {
		console.log("WebHooks Listern at " + port);
	});
}
