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

  console.log(`Requesting data from API ${options.url}`);
  if (req.headers["azds-route-as"]) {
    const route = req.headers["azds-route-as"];
    console.log(`Using route ${route}`);
    options.headers = {
      'azds-route-as': route
    };
  }

  request(options, function(err, response, body) {
    if (err) {
      console.log("Could not fetch data to UI.");
      res.render('users', { title: 'Users', data: [] });
      return;
    }

    console.log("Data retrieved successfully to UI.");
    const data = JSON.parse(body);
    console.log(`Rows received: ${data.length}`);
    res.render('users', { title: 'Users', data: data });
  });
});

module.exports = router;
