// 전역 Global Scope
const value = 'hello!';

function myFunction() {
  console.log('myFunction; ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!'; // Function Scope
  console.log(value);
}
