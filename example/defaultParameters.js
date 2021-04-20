/*
{
  function add(x, y) {
    return x + y;
  }
  console.log(add(10, 20));
  console.log(add());
}

{
  function add(x = 1, y = 2) {
    return x + y;
  }
  console.log(add()); // 3출력
  console.log(add(2, 5)); // 7출력

  {
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello'); // hello 인자값 출력
    printMessage(); // default message 출력
  }
}
*/
const printMessage = (message = 'default message') => console.log(message);
const print = printMessage();
console.log(print);
