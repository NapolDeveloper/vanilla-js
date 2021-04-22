// {
//   const student = {
//     name: 'napol',
//     level: 1
//   };

//   const { name, level } = student;

//   console.log(name);
//   console.log(level);
// }

// {
//   const student = {
//     name: 'napol',
//     level: 1
//   };

//   function printStudent({ name, level }) {
//     console.log(name);
//     console.log(level);
//   }
//   printStudent(student);
// }

const student = {
  name: 'napol'
};
function printStudent({ name, level = 2 }) {
  console.log(name);
  console.log(level);
}
printStudent(student);
