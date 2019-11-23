var express = require('express');
var router = express.Router();
const request = require('request');

const hostname = process.env.DB_SERVICE_HOST || "localhost";
const port = process.env.DB_SERVICE_PORT || "3002";
const address = `http://${hostname}:${port}`;

router.get('/', function(req, res, next) {
  const options = {
    url: address + '/api/users',
  };

  console.log(`Requesting data from DB ${options.url}`);
  if (req.headers["azds-route-as"]) {
    const route = req.headers["azds-route-as"];
    console.log(`Using route ${route}`);
    options.headers = {
      'azds-route-as': route
    };
  }

  request(options, function(err, response, body) {
    if (err) {
      console.log("Could not fetch data.");
      res.json([]);
      return;
    }

    console.log("Data retrieved successfully.");
    const data = JSON.parse(body);
    res.json([]);
  });
});

module.exports = router;
