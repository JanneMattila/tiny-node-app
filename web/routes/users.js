const express = require('express');
const router = express.Router();
const request = require('request');

const hostname = process.env.API_SERVICE_HOST || "localhost";
const port = process.env.API_SERVICE_PORT || "3001";
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
    if (err) {
      res.render('users', { title: 'Users', data: [] });
      return;
    }

    const data = JSON.parse(body);
    res.render('users', { title: 'Users', data: data });
  });
});

module.exports = router;
