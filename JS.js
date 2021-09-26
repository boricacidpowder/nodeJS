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
const id = Symbol('id');
const user = {
	name : 'mike',
	age : 24,
	[id] : 'tmddyd'
}

console.log(user);
let a = Object.keys(user);
console.log(a);
여기가 존나 어렵네요,
	



