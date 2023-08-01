// 2_math_tools.js
// 모듈(Module)
//      하나의 프로그램을 만드는데 필요한 작은 조각들
//      쉽게생각하면 JS파일 하나
//      (라이브러리 느낌)

//      1. 내가 직접만든 모듈 : 내가 만든 모듈
//      2. 이미 만들어져있는 모듈
//          1) 외장모듈(3rd-party module)
//              다른 개발자들이 만들어놓은 모듈
//              이 모듈을 사용하기 위해서는 npm이라는 것을 사용하기
//              제 3자가 만든 모듈이라는 의미                

//          2) 내장모듈(core module)
//              Node를 설치하고 나면 기본적으로 제공되는 모듈
//              그래서 npm을 따로 사용하지는 x

// 함수 생성
// function_add(a, b) {
//     return a + b;
// }
// 다른 공간에서 사용하기 위해서는 이 모듈을 가져와야 함

// add함수를 모듬외부로 공개하기 export
// exports.add = add; // 모듈 외부에서 add라는 이름으로 공개하겠다
// 앞의 add : 모듈 외부로 공개할 이름
// 뒤의 add: 모듈 내부에서의 이름(function명)

// exports.PI = 3.14;
// exports.add = function add(a, b) {return a + b};
// exports.subtract = function add(a, b) {return a - b};
// exports.multiply = function add(a, b) { return a * b};
// exports.divide = function add(a, b) {return a / b};

let calculator = {
    PI : 3.14, 
    add : (a, b) => a + b,
    subtract : (a, b) => a - b,
    multiply : (a, b) => a * b,
    divide : (a, b) => a / b
}
module.exports = calculator;
// calculator라는 변수에 위에서 만든 사칙연산을 하나의 객체로 해서 넣어버렸음
//      >> calculator라는 객체의 속성과 메소드가 됨
//      >> 객체자체를 그대로 외부에 공개

// exports : 공개하고 싶은 것을 하나 하나 공개할 때
//      exports.속성 = 값;
// module.exports : 공개하고 싶은 것들을 모아서 하나의 객체로 만들어서 공개할 때
//      module.exports = 객체;
