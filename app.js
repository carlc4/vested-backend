const express = require("express");

const app = express();
app.use(express.json());

//POLYGON
const { getPolygon } = require("./controllers/polygon.controller");

//ESG
const {getESG} = require ("./controllers/esg.controller")

//USERS
const { getUsers } = require("./controllers/users.controller");

//POLYGON
app.use("/api/polygon", getPolygon);

//ESG
app.use("/api/users", getUsers);

//USERS
app.use("/api/ESG", getESG)

app.listen(process.env.port || 9090, () => {
  console.log("Server online..");
});

module.exports = app;
