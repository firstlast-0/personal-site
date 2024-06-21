var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/more-projects', function (req, res, next) {
    res.render('more');
});

module.exports = router;
