const db = require("./db");
const { models } = require("mongoose");
require("./models");
models.exports = db;
