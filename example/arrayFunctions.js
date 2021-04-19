/*
// foreach
{
  {
    const champion = ['리신', '카직스', '니달리', '킨드레드'];
    for (let i = 0; i < champion.length; i++) {
      console.log(champion[i]);
    }
  }
  {
    const champion = ['리신', '카직스', '니달리', '킨드레드'];
    champion.forEach((champ) => {
      console.log(champ);
    });
  }
}
*/
/*
// callback 설명 코드 예제
{
  const champion = ['리신', '카직스', '니달리', '킨드레드'];
  champion.forEach((champ) => {
    console.log(champ);
  });
}
{
  const champion = ['리신', '카직스', '니달리', '킨드레드'];
  champion.forEach(function (champ) {
    console.log(champ);
  });
}
*/
/*
// map
{
  {
    const numArray = [10, 20, 30, 40, 50];
    const newArray = numArray.map((n) => n * 2);
    console.log(newArray);
  }
}
*/
/*
// filter
{
  const todos = [
    {
      id: 1,
      done: true
    },
    {
      id: 2,
      done: false
    },
    {
      id: 3,
      done: false
    },
    {
      id: 4,
      done: false
    }
  ];
  const notDone = todos.filter((todo) => todo.done === false);
  console.log(`해야할 일이 ${notDone.length}개 남았습니다`);
}
*/
/*
// splice
{
  const fruits = ['🍎', '🍑', '🍓', '🍏'];
  fruits.splice(1, 1);
  console.log(fruits); // 복숭아가 제거된 배열 출력
}
*/

// slice
{
  const fruits = ['🍎', '🍑', '🍓', '🍏'];
  // slice(start?: number, end?: number)
  const sliceFruits = fruits.slice(0, 2);
  console.log(sliceFruits);
}

// concat
{
  // concat
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatArray = array1.concat(array2);
console.log(concatArray);
// 기존의 배열은 변하지 않음.
