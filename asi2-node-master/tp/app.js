'use strict';
// app.js
var http = require("http");
var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);
var express = require("express");
var defaultRoute = require("./app/routes/default.route.js");
var path = require("path");
var fs = require("fs");
var dirPath = process.argv[2];

var map = {};

console.log('It Works !');

var app = express();

// init server
var server = http.createServer(app);
server.listen(CONFIG.port, function() {
	var host = this.address().address;
	var port = this.address().port;

	console.log('Exemple app listening at http://%s:%s',host,port);

});

app.use(defaultRoute);

/*
// #2
app.get("/", function(request, response) {
response.send("It works !");
});
*/
// #3
app.use(function(request, response, cb) {
//response.send("It works ! ");
app.use("/loadPres",function (req, res, next) {
	var dossier=CONFIG.presentationDirectory;

	console.log(dossier);
	fs.readdir(dossier, function(err, data) {
		if(!!err){
			console.log(err);

		}
		else{
			data.forEach(function(file) {

				fs.readFile((dossier+"/"+file),function(err,data){
					if(!!err){
						console.log(err);

					}
					else{
						addValueToList(JSON.parse(data).id,JSON.parse(data));
					}



				});
			
		});
		}

	});


});
	app.use("/loadPres",function (req, res, next) {
		var dest=CONFIG.presentationDirectory;
		var source=CONFIG.contentDirectory;
		console.log(dest);
		console.log(source);


	});

response.send(map);
cb();
});

function addValueToList(key, value) {
    //if the list is already created for the "key", then uses it
    //else creates new list for the "key" to store multiple values in it.
    map[key] = map[key] || [];
    map[key].push(value);
}


//route static
//app.use("/index",express.static(path.join(__dirname, "public")));

