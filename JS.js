// // alert("메세지") == 알림창
// // prompt("메세지", "디폴트값") == 값을 입력받을때
// //	문자형으로 받음

// // confirm("메세지") == 값을 확인할때  true, false로 나뉨

// // 단점 
// // 1. 스크립트 일시정지
// // 2. 스타일링 X

// // 형 변환
// // String() == 자료형
// // Number() == 숫자형
// // Boolean() == true, false
// // 자료형이 다르면 이상해진다!
// const a = 1234;
// console.log(
// 	String(`${a}`),
// 	Number("1234"),
// 	String(3),
// 	String(false),
// 	String(true)
// )


//객체
//접근 = tmddyd.name,['age']
//추가 = tmddyd.gender = 'male';
//삭제 = delete tmddyd.gender;
// makeObject = (user) =>{
// 	if(!('age' in user) ||  //user 안에 'age'가 없거나
// 	   user.age < 20){		//age 가 20 미만이면
// 		return false;
// 	}
// 	return true;
// }


// const A = {
// 	name : "a",
// 	age : 30
// };

// const B ={
// 	name : "b"
// };

// console.log(makeObject(B));
// console.log(makeObject(A));

// let boy = {
// 	name:'gg',
// 	showName:() => {
// 		console.log(this)
// 	}
// };
// boy.showName();


//배열!
// let days = ['월', '화', '수', '목'];

// const sayHello = (name) => {
// 	const msg = `hello, ${name}`;
// 	console.log(msg);
// };

// sayHello('tmddyd');

const add = (num1, num2) => 
	num1 * num2;

console.log(add(600,14));
// days[1] = 'tue';
// console.log(days);

// for(let index = 0; index < days.length; index++){
// 	console.log(days[index]);
// }
 
//생성자 함수!
// function User(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.sayName = function(){
// 		console.log(`내 이름은 ${this.name} 입니다.`);
// 	}
// }

// let user1 = new User('후하', 15);
// let user2 = new User('히히', 24);
// user2.sayName();
// console.log(user1);

//객체 메소드!
// const user = {
// 	name : 'mike',
// 	age : 30,
// 	gender : 'male',
// }

// const result = Object.entries(user);

// console.log(result);

//심볼! 유일설 보장    Symbol.for() 전역심볼!
// const id = Symbol('id');
// const user = {
// 	name : 'mike',
// 	age : 24,
// 	[id] : 'tmddyd'
// }

// console.log(user);
// let a = Object.keys(user);
// console.log(a);
//여기가 존나 어렵네요,


// const id = Symbol('id'); // new 가 붙지않음! 유일한 식별자
// const user = {
// 	name : 'tmddyd',
// 	age : 23,
// 	[id] : 'gkgk'
// };
// console.log(user);// { name: 'tmddyd', age: 23, [Symbol(id)]: 'gkgk' }
// console.log(Object.keys(user));// [ 'name', 'age' ]
// console.log(Object.values(user));//
// console.log(Object.entries(user));// 이 세가지는 Symbol을 건너뜀.

// //심볼을 사용하는 이유는 원본객체를 건드리지 않고 접근할수있다.

// Symbol.for() // 전역 심볼. 1. 하나의 심볼만 보장 2.없으면 만들고 있으면 가져옴 3.심볼들은 매번 다른 값을 생성하지만 이건 하나를 만들고 그걸 가져옴
// Reflect.ownKeys() // 심볼 포함 객체안에있는 모든걸 보여줌


// const user = {
// 	name : '승용',
// 	age : 23,
// };

// //user.showname =function(){}
// const showName = Symbol('show name');
// user[showName] = function(){
// 	console.log(this.name);
// }

// user[showName]();


// for(let key in user){
// 	console.log(`His ${key} is ${user[key]}.`);
//}


// toString() // 10진수를 2진수/16진수로

// let num = 255;

// console.log(num.toString(16));
// num.toString(2);


// Math.ceil() //올림
// Math.floor() //내림
// Math.round() // 반올림

// toFixed() // 소수점자릿수 문자열로 반환함. Number을로 다시 받아서 하는 경우가 많음

// isNaN() // NaN 인지 확인하는것

// parselnt() // 문자를 숫자로가져옴. 10px == 10, f3 == NaN
//console.log(Math.sqrt(2135));

//문자열 String

// let desc = "hello, Nice to meet you.";
// console.log(desc.indexOf('to')); //문자열의 위치를 찾아줌. 문자열에 없는 문자면 -1을 반환함
// trim() //앞뒤 공백 제거

function hasCola(str) {
	if(str.includes('콜라')){
		console.log('금칠어가 있습니다.');
	}else{
		console.log("통과");
	}
}
hasCola("와 사이다가 짱이야");
hasCola("콜라가 좋아!");
hasCola("콜라");

