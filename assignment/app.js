var model = require("./model/models.server.js");
require("./services/user.service.server.js")(model);
require("./services/website.service.server")(model);
require("./services/page.service.server")(model);
require("./services/widget.service.server")(model);
require("./services/poc.service.server")();
