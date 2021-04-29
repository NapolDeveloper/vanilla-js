// es6에 도입된 spread 문법

const dog = {
  name: 'happy'
};

const animal = {
  ...dog,
  function: function sound() {
    console.log('hello');
  }
};
