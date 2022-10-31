// This app file looks how the api looks like and that's why the app.listen is not here! it is in the server.js file

require("dotenv").config("../.env");
const express = require("express");

const app = express();
const { errorHandler, notFoundHandler } = require("./error");
// for build in middlewar in app folder's middleware.js:
app.use(require("./middleware"));
app.use(require("./routes"));

// for custom middlewar in app folder's error.js:
app.use(errorHandler);
app.use(notFoundHandler);

module.exports = app;
