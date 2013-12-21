var port = 8080,
	express = require('express'),
    app = express();

app.configure(function () {
    app.use(express.static(__dirname + '/'));
});

var server = app.listen(port);
console.log('Listening for ' + port + ' port...');