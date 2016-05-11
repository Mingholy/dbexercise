/*
 *  Student Course managing system database model
 */

var mysql = require('mysql');
var $conf = require('../conf');
var $util = require('../util');
var $query = require('../queries');

var pool = mysql.createPool($conf.mysql);

var jsonWrite = function (res, ret) {
    if(typeof(ret) === 'undefined') {
        res.json({
            code: '1',
            msg: 'Can not generatre JSON'
        });
    } else {
        res.render('users', {
                    ret: ret,
        });
    }
};

module.exports = {
    stuinfo: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;

            connection.query($query.stuinfo, [param.name], function(err, result) {

                jsonWrite(res, result);

                connection.release();

            });
        });

    },

    creditsum: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;

             connection.query($query.creditsum, [param.name], function(err, result) {

                jsonWrite(res, result);

                connection.release();
            });
        });
    },

    avggrade:  function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;

            connection.query($query.avggrade, [param.name], function(err, result) {

                jsonWrite(res, result);

                connection.release();
            });
        });
    },

    sortcourse: function (req, res, next) {
        pool.getConnection(function(err,connection) {
            var param = req.query || req.params;

            connection.query($query.sortcourse, function(err, result) {

                jsonWrite(res, result);

                connection.release();
            });
        });
    },

    showcourse: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;

            connection.query($query.showcourse, function(err, result) {

                jsonWrite(res, result);

                connection.release();
            })
        })
    }

};