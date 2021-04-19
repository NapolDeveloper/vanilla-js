{
  // 객체 생성하기
  //  key: value 형식으로 객체를 만들고 값을 넣을 수 있다
  const car = {
    name: 'bmw i8',
    speed: 10
  };
  console.log(car.name); // bmw i8
  console.log(car.speed); // 10

  // 함수에서 객체를 파라미터로 받기
  {
    const leesin = {
      name: '리신',
      type: 'AD',
      position: 'Jungle'
    };
    const nidalee = {
      name: '니달리',
      type: 'AP',
      position: 'Jungle'
    };

    function printChampion(champ) {
      const text = `${champ.name}는 ${champ.type}이며 ${champ.position} 포지션의 챔피언입니다 `;
      console.log(text);
    }
    printChampion(leesin);
    printChampion(nidalee);
  }
  {
    const leesin = {
      name: '리신',
      type: 'AD',
      position: 'Jungle'
    };
    const nidalee = {
      name: '니달리',
      type: 'AP',
      position: 'Jungle'
    };

    function printChampion(champ) {
      const { name, type, position } = champ;
      const text = `${name}는 ${type}이며 ${position} 포지션의 챔피언입니다 `;
      console.log(text);
    }
    printChampion(leesin);
    printChampion(nidalee);
  }
  {
    const leesin = {
      name: '리신',
      type: 'AD',
      position: 'Jungle'
    };
    const nidalee = {
      name: '니달리',
      type: 'AP',
      position: 'Jungle'
    };

    function printChampion({ name, type, position }) {
      const text = `${name}는 ${type}이며 ${position} 포지션의 챔피언입니다 `;
      console.log(text);
    }
    printChampion(leesin);
    printChampion(nidalee);
  }
  {
    const kindred = {
      name: '킨드레드',
      type: 'AD',
      position: 'Jungle',
      motion: '킨드레드가 춤을 춥니다',
      jump: function jump() {
        console.log('킨드레드가 벽을 넘었습니다');
      },
      dance: function dance() {
        console.log(`${this.motion}`);
      }
    };
    kindred.jump();
    kindred.dance();
  }
}
