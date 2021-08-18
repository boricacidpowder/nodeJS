let person = {
  name: 'tony',
  age: 16,
  driver: null
};
person.driver = person.age !==16 ? 'Yes' : 'No';
// if (person.age >= 16) {
//   person.driver = 'Yes';
// } else {
//   person.driver = 'No';
// }
console.log(person.driver)