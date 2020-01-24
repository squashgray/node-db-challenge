const express = require("express");
const helmet = require("helmet");
const router = require("../routers/project-router");
const server = express();
2;

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>STRESSED</h2>`);
}); //working

server.use("/api/", router);

module.exports = server;
