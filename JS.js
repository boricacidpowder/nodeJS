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

// const add = (num1, num2) => 
// 	num1 * num2;

// console.log(add(600,14));
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

// function hasCola(str) {
// 	if(str.includes('콜라')){
// 		console.log('금칠어가 있습니다.');
// 	}else{
// 		console.log("통과");
// 	}
// }
// hasCola("와 사이다가 짱이야");
// hasCola("콜라가 좋아!");
// hasCola("콜라");



//배열!
// let arr = ['a', 'b', 'c'];
// arr.forEach((name, index) => {
// 	console.log(`${index +1}. ${name}`);
// });

// let rr = [1,2,3,4,5,6,7];

// const result = rr.find((item) => {
// 	return item %2 === 0;
// });

// console.log(result);


// let user = [
// 	{name : 'a', age : 30},
// 	{name : 'b', age : 12},
// 	{name : 'c', age : 23},
// ];

// const res = user.findIndex((user) => {
// 	if(user.age < 19){
// 		return true;
// 	}
// 	return false;
// });

// console.log(res);

// let rr = [1,2,3,4,5,6,7];

// const result = rr.filter((item) => {
// 	return item %2 === 0;
// });

// console.log(result);


// let user = [
// 	{name : 'a', age : 30},
// 	{name : 'b', age : 12},
// 	{name : 'c', age : 23},
// ];

// let newuser = user.map((user, index) => {
// 	return Object.assign({}, user, {
// 		id: index + 1,
// 		isAdult: user.age > 19,
// 	});
// });


// let a = ['안녕', '나는', '철수야'];

// let b = a.join(" ");
// console.log(b);
// console.log(newuser);
// console.log(Array.isArray(user));
// console.log(Array.isArray(a));


// let arr = [1,2,3,4,5];
// function fn(a,b){
// 	return a-b;
// }

// arr.sort(fn);

// console.log(arr);

// let result = 0;
// arr.forEach(num => {
// 	result += num;
// });

// //				     이전값  현재값
// const r = arr.reduce((prev, cur) => {
// 	return prev + cur;
// }, 0)// 초기값
// console.log(r);

// let user = [
// 	{name : 'a', age : 30},
// 	{name : 'b', age : 12},
// 	{name : 'c', age : 23},
// ];

// let res = user.reduce((prev, cur) => {
// 	if(cur.age > 19){
// 		prev.push(cur.name);
// 	}
// 	return prev;
// }, []);

// console.log(res);

//구조분해할당?

//arguments, 나머지 매개변수

// function a(...numbers) {
// 	let result = numbers.reduce((prev, cur) => prev + cur);
// 	console.log(result);
// }

// a(1,2,3);
// a(1,2,3,4);


// function User(name, age, ...skill) {
// 	this.name = name;
// 	this.age = age;
// 	this.skill = skill;
// }

// const user1 = new User('abb', 30, 'html', 'js');
// const user2 = new User('hhh', 12, 'c++', 'React');


// console.log(user1);
// console.log(user2);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// // arr2.forEach(num => {
// // 	arr1.unshift(num);
// // });

// arr1 = [...arr2, ...arr1];

// console.log(arr1);



// let user = { name : 'mike'};
// let info = { age : 24};
// let fe = ['js', 'React'];
// let lang = ['Kor', 'Eng'];
// console.log(user);
// user = {
// 	...user,
// 	...info,
// 	skills:[
// 		...fe,
// 		...lang
// 	],
// };

// console.log(user);

//셋타임아웃, 셋인터벌
//				   3초
//setTimeout(fn, 3000, 필요한 인수); == 두번째 넣은 시간만큼 기다렸다가 실행
//setInterval(fn, 3000, 필요한 인수); == 두번째 넣은 시간만큼마다 실행

// let num = 0;

// function showTime() {
// 	console.log(`지금은 ${num++}초 입니다.`);
// 	if(num > 5) {
// 		clearInterval(tId); // 스캐줄링 해놓은걸 없애는거
// 	}
// }

// const tId = setInterval(showTime, 1000);


//call, apply, bind
//call메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
//showThisName.call(mike);

//apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 똑같다.
//apply는 매개변수를 배열로 받는다.

//bind 는 함수의 this값을 영구히 바꿀수 있다.

// const mike = {
// 	name: 'mike',
// };

// const tom = {
// 	name: 'tom',
// };

// function showThisName() {
// 	console.log(this.name);
// }
// function update(birthYear, occupation){
// 	this.birthYear = birthYear;
// 	this.occupation = occupation;
// };


// showThisName();
// showThisName.call(tom);

// update.apply(mike, [1999, 'singer']);
// console.log(mike);

// update.apply(tom, [1997, 'teacher']);
// console.log(tom);

// const nums = [3,10,1,6,5];

// const minNum = Math.min.apply(null, nums);
// const maxNum = Math.max.call(null, ...nums);
// console.log(minNum);
// console.log(maxNum);

// const mike = {
// 	name: 'mike',
// };
// function update(birthYear, occupation){
// 	this.birthYear = birthYear;
// 	this.occupation = occupation;
// };

// const updateMike = update.bind(mike);
// updateMike(1980,"police");
// console.log(mike);


// const user = {
// 	name: 'mike',
// 	showName: function(){
// 		console.log(`hello, ${this.name}`);
// 	},
// };

// user.showName();

// let fn = user.showName;
// fn.call(user);
// fn.apply(user);

// let boundFn = fn.bind(user);

// boundFn();

// 상속, 프로토타입

// const car = {
// 	wheels:4,
// 	drive() {
// 		console.log("drive...");
// 	},
// };

// const bmw = {
// 	color: 'red',
// 	navigation: 1,
// };

// bmw.__proto__ = car;

// const x5 = {
// 	color:'white',
// 	name:'x5',
// };
// x5.__proto__ = bmw;
// for(p in bmw) {
// 	if(x5.hasOwnProperty(p)) {
// 		console.log('o', p);
// 	}else {
// 		console.log('x', p);
// 	}
// }


// console.log(bmw);
// console.log(x5);
// console.log(x5.color);
// console.log(bmw.color);
// console.log(bmw.wheels);
// // console.log(x5.navigation);
// const car = {
// 	wheels : 4,
// 	drive() {
// // 		console.log('drive...');
// // 	},
// // };


// const Bmw = function(color) {
// 	this.color = color;
// };

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function(){
// 	console.log('drive');
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function(){
// 	console.log('STOP!');
// }

// //이렇게 해도 되지만, 이러면 생성자가 따로 뜨지 않아서 직접 명시 해줘야함.
// //constructor = Bmw;
// // Bmw.prototype = {
// // 	wheels : 4,
// // 	drive(){
// // 		console.log('drive');
// // 	},
// // 	navigation: 1,
// // 	stop() {
// // 		console.log('stop!');
// // 	},
// // };


// const x5 = new Bmw('red');
// const z4 = new Bmw('blue');
// console.log(x5.stop());
// console.log(z4.navigation);
// // x5.__proto__ = car;
// // z4.__proto__ = car;

// const bmw = function(color) {
// 	const c = color;
// 	this.getColor = function(){
// 		console.log(c);
// 	};
// };


// const x5 = new bmw('red');

// console.log(x5.getColor());



//Class
//클래스는 new 가 빠지면 오류가 난다.

class User2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	showName(){
		console.log(this.name);
};
};

const tom = new User2('tom', 19);

console.log(tom.showName());
for(const p in tom) {
	console.log(p);
}

//클래스 상속
//extends


class Car{
	constructor(color) {
		this.color = color;
		this.wheels = 4;
	}
	drive(){
		console.log('drive');
	}
	stop(){
		console.log('stop!');
	}
}



class Bmw extends Car {
	constructor(color) { // 이걸 쓰려면 부모를 먼저 호출해야함.
		super(color); // 이걸 사용해 주어야 애러가 안난다.
		this.navigation = 1;
	}
	park() {
		console.log('PARK');
	}
	
	stop() {  // 상속받는데 똑같은것이 있으면 덮어쓰기가 됨.
		// super.stop(); // 이걸 써주면 상속받는것도 가져옴.
		console.log('off');
	}
}



const z4 = new Bmw('blue');


console.log(z4.color);
console.log(z4.stop());
console.log(z4.drive());
console.log(z4.navigation);