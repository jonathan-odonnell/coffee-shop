var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Express' });
});

router.get('/reservations', function(req, res, next) {
  res.render('reservations', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
