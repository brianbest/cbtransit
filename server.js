/**
 * Created by brianbest on 15-02-02.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist')); // Folder for files

app.get('/', function (req, res) {
    res.send('index.html')
})

var server = app.listen(80, function () {

})