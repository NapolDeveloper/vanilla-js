// es6에 도입된 spread 문법

const dog = {
  name: 'happy'
};
const smallDog = {
  ...dog,
  size: 'small'
};
console.log(dog);
console.log(smallDog);

// spread 문법을 이용하여 배열 합치기
const animals = ['dog', 'cat', 'pig', 'cow'];
const animals2 = [...animals, 'chicken'];
const animals3 = [...animals, 'chicken', ...animals];

console.log(animals);
console.log(animals2);
console.log(animals3);
