// 상수(변할수 없는 값)
const username = "박성혜" ;
console.log("🚀 ~ username:", username);

// 변수(변할수 있는 값)
let usermbti = "ENTJ" ;
console.log("🚀 ~ usermbti:", usermbti);

usermbti = "ISTJ" ;//수정
console.log("🚀 ~ 변경된 usermbti:", usermbti);

// 상수는 변경 불가능
// username = "후츠릿"
// console.log("🚀 ~ 변경된 username:", username)

// 데이터타입
const num = 12;
const str = "텍스트";
const bool = true;
let empty; // null
const empty2 = null;

console.log("num:", typeof num);
console.log("str:", typeof str);
console.log("bool:", typeof bool);
console.log("empty:", typeof empty);

/**
 * null과 undefined의 차이점
 * null: 개발자가 의도를 가지고 값을 비움
 * undefined: 개발자 의도와 상관없이 값이 없는 상태
 */

console.log("================================================");

// 함수

// 함수 정의/선언
//function greeting() {
  // 실행할 로직들
  // console.log("반갑습니다!"+  username+"님");
 
  // 백틱
 // console.log(`반갑습니다! ${username}님. 당신의 MBTI는 ${usermbti}시군요`);
//}

// 화살표 함수
const greeting = () => {
  console.log(`반갑습니다! ${username}님. 당신의 MBTI는 ${usermbti}시군요`);
} ;


// 함수 호출/실행
greeting();

// 함수의 인자와 매개변수
const sum = (num1, num2) => { // paremeter
  // 실행할 로직
  const result = num1 + num2;
  return result;
  console.log("return 끝!!!");
};

const double = (num) => {
  return num * 2;
};

const add = sum(11, 22); // argument
console.log("🚀 ~ add:", add);
const doubleResult = double(add);
console.log("🚀 ~ doubleResult:", doubleResult);

sum(123, 525);
sum(35, 10138);

const sayHello = (name1) => {
   
  console.log("반갑습니다." + name1 + "님");
  console.log(`반갑습니다. ${name1}님`);
}

sayHello("박성혜");