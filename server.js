var emptygif = require('emptygif');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));

app.get('/track.gif', function(req, res, next) {
  io.emit('visit', {
    ip: req.ip,
    ua: req.headers['user-agent']
  });

  emptygif.sendEmptyGif(req, res, {
    'Content-Type': 'image/gif',
    'Content-Length': emptygif.emptyGifBufferLength,
    'Cache-Control': 'public, max-age=0'
  });
});

server.listen(app.get('port'), function() {
  console.log('Server is running at http://localhost:' + app.get('port'));
});
