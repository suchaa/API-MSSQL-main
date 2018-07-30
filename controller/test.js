const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Config = require('../app/db_config');
var mssql = require('mssql');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', function(req, res) {
    res.send('Connected route!')
})

router.get('/users', function (req, res) {
    var connection = new mssql.ConnectionPool(Config.mssql_db);
    connection.connect().then(function () {
        var request = new mssql.Request(connection);
        request.query(`SELECT * FROM [dbo].[tb_User]`,
            function (err, recordset) {
                if (err) {
                    console.log('ERROR:: ', err);
                    res.json('error', err.stack);
                    connection.close();
                } else {
                    res.json(recordset.recordset);
                    connection.close();
                }
            });
    })
})

module.exports = router;