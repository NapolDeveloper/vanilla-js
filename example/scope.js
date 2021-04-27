// 전역 Global Scope
const value = 'hello!';

function myFunction() {
  console.log('myFunction; ');
  console.log(value);
}

// 함수 Function-level scope
function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!'; // Function Scope
  console.log(value);
}

// 블록 block-level scope
function foo() {
  if (true) {
    const a = 0;
    console.log(a);
  }
  console.log(a);
}

// javascript에서는 var를 통해 함수 내에 선언되어있다면 if와 같이 block 밖에서 사용 가능
// 단 es6 부터 let, const는 block-level scope
function foo() {
  if (true) {
    var a = 0;
    console.log(a);
  }
  console.log(a);
}
