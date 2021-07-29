var f1 = function () {
	console.log(1+1);
	console.log(1+6);
}
//var i = if(true) {console.log(1)};
//var w = while(true) {console.log(1)};
// console.log(f1);
// f1();

var a = [f1];
a[0]();

var o = {
	func:f1
}

o.func();