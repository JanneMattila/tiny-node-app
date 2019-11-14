var express = require('express');
var router = express.Router();
const request = require('request');

const dbAddress = process.env.DB_ADDRESS || "http://localhost:3002";

router.get('/', function(req, res, next) {
  request(dbAddress + '/api/users', function(err, response, body) {
    if (!err) {
      res.json([]);
      return;
    }

    const data = JSON.parse(body);
    res.json(data);
  });
});

module.exports = router;
