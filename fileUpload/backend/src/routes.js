const routes = require('express').Router();

routes.get("/", (req,res) => {
  return res.json({hello: "Manu"});
});

module.exports = routes;