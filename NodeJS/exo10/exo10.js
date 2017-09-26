'use strict';

var http = require('http');
var CONFIG = require ('./config.json');
var url = require('url');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function(req,res){

	var filePath=url.parse(req.url).pathname;

	fs.access(filePath, fs.constants.R_OK,function(err){
		if(!!err){
			res.writeHead(404);
			res.end('Not Found !');

		}

		fs.readFile(filePath,function(err,data){
			if(!!err){
				console.log(filePath + ':500');
				res.writeHead(500);
				return res.end('ERROR 500');
			}
			res.writeHead(200);
			res.end(data);
		})

	})
});


server.listen(CONFIG.port, function(err){
	if(!!err){
		console.error(err);
		return;
	}
	console.log('server started');
})