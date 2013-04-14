var net = require('net');

var server = net.createServer(function (socket) {
  socket.on("data", function(data){
    socket.write(data.toString());
  });
});


var port = process.env.PORT || 5000;
console.log(port);
server.listen(port);