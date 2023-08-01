// 3_main.js

// 2_math_tools.js에 있는 모듈 가져와서 사용 : Load
// require('./2_math_tools.js')
//      require : module을 load해주는 function
//          파라미터로 2_math_tools.js의 상대경로를 적었음
//          require함수는 모듈을 로드에서 객체 하나를 리턴하는 성질
//          .js는 생략 가능

//객체 require를 담아서 터미널로 실행
// let m = require('./2_math_tools');
// console.log(m.add(1,2))
    // 2_math_tools.js의 ad의 함수를 일부러 공개하지않음

// 외부로 공개한 것들 모두 불러오기
// let 대신에 상수화(const)를 시켜서 나중에 이변수를 다른 의도로 재사용하는걸 방지
// const m =require('./2_math_tools')
// console.log(m.PI);
// console.log(m.add(10, 20));
// console.log(m.subtract(20, 30));
// console.log(m.multiply(30, 40));
// console.log(m.divide(40, 50));
// 하나하나 exports 했던 것을 하나의 객체로 만들어서 공개해버리는 방법있다.

const calculator = require('./2_math_tools')
console.log(calculator.PI);
console.log(calculator.add(2,6));
