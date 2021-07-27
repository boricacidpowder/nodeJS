var memubar=['egoing', 'k8805', 'hoya'];
console.log(memubar[1]);

var i = 0;
while(i < memubar.length){
	console.log('array loop', memubar[i]);
	i = i + 1;
	
}

var roles = {
	'programmer' : 'tmddyd',
	'designer' : 'ahffkdy',
	'manager' : 'gpgp'
}
for(var name in roles){
	console.log('object =>', name, 'value =>', roles[name]); // roles[name] 처럼 대괄호로 지정을 해주면 그 이름에 해당하는 값을 가져오게 해준다.
	//						왼쪽   				오른쪽
}