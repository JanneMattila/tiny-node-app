var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
    name: "Arthur Doe",
    phone: "+1-800-DOE"
  },
  {
    name: "John Doe",
    phone: "+1-800-SHOE"
  },
  {
    name: "Jane Doe",
    phone: "+1234567890"
  }]);
});

module.exports = router;
