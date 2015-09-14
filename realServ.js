var express = require('express');
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/downloadsong', function(req, res){

  var file = __dirname + "/public/download/Marvin's Room.mp3";
  res.download(file);
  /*var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);*/
});

app.listen(9000);
