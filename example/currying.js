function greet(greeting, name) {
  console.log(greeting + ', ' + name);
}
// 위 함수가 제대로 동작하려면 greeting과 name을 전달받아야함

function greet(gretting) {
  return function (name) {
    console.log(greeting + ', ' + name);
  };
}
// 커링 함수에서는 첫 번째 함수가 gretting만을 인자로 받고 그 안에 있는 반환되는
// 내부 함수가 name을 인자로 받는 형태로 수정
