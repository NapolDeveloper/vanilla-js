// 객체 비구조화 할당
{
  const student = {
    name: 'napol',
    level: 1
  };

  const { name, level } = student;

  console.log(name);
  console.log(level);
}

// 함수에서 비구조화 할당
{
  const student = {
    name: 'napol',
    level: 1
  };

  function printStudent({ name, level }) {
    console.log(name);
    console.log(level);
  }
  printStudent(student);
}

// 비구조화 할당 기본값 설정
const student = {
  name: 'napol'
};
function printStudent({ name, level = 1 }) {
  console.log(name);
  console.log(level);
}
printStudent(student);

// array 배열에서의 이용방법
const animals = ['🐶', '😸'];

const [first, second] = animals;
console.log(first, second);

// array 배열에서의 기본값 할당
const animals = ['🐶'];

const [first, second = '😸'] = animals;
console.log(first, second);

// 비구조화 할당값 이름 변경 + 기본값 지정
const student = {
  name: 'napol'
};
const { name: studentName, level: studentLevel = 2 } = student;
console.log(studentName);
console.log(studentLevel);
