function calc(){

var sum=0;

for( var i in process.argv) {
	var elm=process.argv[i];
	if(!Number.isNaN(Number(elm))){
		sum += Number(elm);
	}
}
console.log(sum);

}

calc();