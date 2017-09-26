function test(){
	var http=require('http');

	http.get(process.argv[2],function(res){
		var data="";

		res.setEncoding('utf8');
		res.on('data', function(chunk){
			data +=chunk;
		});
		res.on('end',function(){
			console.log(data);
		})
		res.on('error',console.error);
	});

}
test();

}