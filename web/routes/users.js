const express = require('express');
const router = express.Router();
const request = require('request');

const apiAddress = process.env.API_ADDRESS || "http://localhost:3001";

router.get('/', function(req, res, next) {
  request(apiAddress + '/api/users', function(err, response, body) {
    if (err) {
      res.render('users', { title: 'Users', data: [] });
      return;
    }

    const data = JSON.parse(body);
    res.render('users', { title: 'Users', data: data });
  });
});

module.exports = router;
