var fs=require('fs');

function toto(file,cb){
	var content = fs.readFile(file, function(err, data){
		if(!!err){
			console.error(err);
			cb(err);
			return;
		}

		cb(null,data.toString().split(/\r\n|\n|\r/).length);
	});
}
toto(process.argv[2],function(err,data) {
	if(!!err){
			console.error(err);
			return;
		}
	console.log(data);
});