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

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

const array = [1, 2, 3];
console.log(array);
console.log(...array);

// rest parameter
function print(...rest) {
  console.log(rest);
}
print(1, 2, 3);

const array = [1, 2, 3, 4, 5];
const [first, ...rest] = array;

console.log(first);
console.log(rest);
