{
}
// isCat이 true이면 😸 | false면 🐶
// const component = isCat ? '😸' : '🐶';

// 조건 ? true일 경우 : false일 경우

{
  const napol = {
    name: 'napol',
    age: '21'
  };

  const { name, age } = napol;
  console.log(age >= 30 ? `${name}는 30살 이상입니다` : `${name}는 30살 미만입니다`);
}

const x = 10;
const y = 20;

const z = x > y ? 'x > y' : x < y ? 'x < y' : '같다';
console.log(z);
