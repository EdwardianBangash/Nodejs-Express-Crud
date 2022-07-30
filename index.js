var express = require("express");
var app = express();
const path = require("path");
const bodyParser = require("body-parser");
const services = require("./services/render");
const controller = require("./controllers/controller");


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/js',express.static(path.resolve(__dirname,'assets/js/')));
app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/",services.homeRoute);
app.get("/addUser",services.addUserRoute);
app.get("/editUser",services.editUserRoute);
app.get("/updateUser",services.updateUserRoute);
app.get("/deleteUser",services.deleteUserRoute);

//api routes.
app.get("/api/all", controller.all);
app.post("/api/create", controller.create);
app.get("/api/find", controller.find);
app.post("/api/update", controller.update);
app.get("/api/delete", controller.delete);

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
