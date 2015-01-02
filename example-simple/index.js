var express = require('express'),
	app = express(),
	http = require('http');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  	response.writeHeader(200, {"Content-Type": "text/html"});
	response.write('Node server is working');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});