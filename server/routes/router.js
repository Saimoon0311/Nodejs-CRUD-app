const express = require("express");
const Router = express.Router();
const Controller = require("../controller/controller");
Router.get("/", (req, res) => res.send("hello"));

Router.post("/api/user/create", Controller.createuser);
Router.get("/api/user", Controller.finduser);
Router.put("/api/user/update/:id", Controller.updateuser);
Router.delete("/api/user/delete/:id", Controller.deleteuser);

module.exports = Router;
