var express = require('express');
var app = express();


app.set('views', __dirname+"/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname, 'public'));

app.get('/', function(req, res){
	res.render('index')
});


var port = process.env.PORT;
if (!port) {
	port = 9990;
}
app.listen(port);
