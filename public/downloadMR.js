var path = require('path');
var mime = require('mime');

app.get('/download', function(req, res){

  var file = __dirname + "download/Marvin's Room.mp3";

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});