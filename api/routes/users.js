var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
    id: "1",
    title: "title 1"
  },
  {
    id: "2",
    title: "title 2"
  }]);
});

module.exports = router;
