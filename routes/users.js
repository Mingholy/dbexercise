var express = require('express');
var router = express.Router();

var userModel = require('../model/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.get('/task1/stuinfo', function(req, res, next) {
    userModel.stuinfo(req, res, next);
});

router.get('/task1/creditsum', function(req, res, next) {
    userModel.creditsum(req, res, next);
});

router.get('/task2', function(req, res, next) {
    userModel.avggrade(req, res, next);
});

router.get('/task3', function(req, res, next) {
    userModel.sortcourse(req, res, next);
});

router.get('/task4', function(req, res, next) {
    userModel.showcourse(req, res, next);
});

module.exports = router;
