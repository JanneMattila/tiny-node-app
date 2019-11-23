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

  if (req.headers["azds-route-as"]) {
    options.headers = {
      'azds-route-as': req.headers["azds-route-as"]
    };
  }
  
  request(options, function(err, response, body) {
    if (!err) {
      res.json([]);
      return;
    }

    const data = JSON.parse(body);
    res.json(data);
  });
});

module.exports = router;
