function Hello(name) {
  let _name = name;
  return function () {
    console.log('Hello, ' + _name);
  };
}

let hello1 = Hello('현재');
let hello2 = Hello('나폴');

hello1();
hello2();
