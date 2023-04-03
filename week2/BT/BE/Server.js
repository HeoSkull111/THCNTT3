var express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
var mysql = require('mysql');
var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// json sample

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Vinh01264686044@",
    insecureAuth : true,
    database: "farms"
});
//step 1
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
});
//RESTFull API
app.get('/getAllEE', function (req, res) {
    try {
        con.query(
            'SELECT * FROM farms.electronic_equipments',
            (err, result, fields) => {
                if (err) {
                    
                    res.send(err);
                    return;
                };
                res.send(result);
            });
    }
    catch (err) {
        res.send(err);
    }    
})
//server
var server = app.listen(5555, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})