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

console.log("================================================");

// 조건문
const score = 89;
if(score>=60) {
  console.log("합격"); 
  // 조건식이 true인 경우에 실행할 코드
} else {
  // 조건식이 false인 경우에 실행할 코드
  console.log("불합격"); 
};
console.log("if문 종료");

let grade = "";
if(score >= 90) {
  grade = "A등급";
} else if(score >= 80){
  grade = "B등급";
} else if(score >= 70){
  grade = "C등급";
} else {
  grade = "D등급";
}

console.log(grade)


console.log("퀴즈")

// Default parameter
const orderSandwich = (type = "basic") => {
console.log("🚀 ~ orderSandwich ~ type:", type)
//  if(type == 'basic') {
//    return `🥖 + 🥬 + 🍅 + 🧀 + 🥓`;
//  } else{
//    return `🥖 + 🥬 + 🍅 + 🥑 + 🥒`;
//  }

// 삼항 연산자
return type == "basic" ? `🥖 + 🥬 + 🍅 + 🧀 + 🥓` : `🥖 + 🥬 + 🍅 + 🥑 + 🥒`;
}; 

console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

const age = 20;

const adultType = age >= 18 ?  "성인" : "미성년자" ;
console.log("🚀 ~ dultType:", adultType);

if (0) {
  console.log("true입니다");
} else {
  console.log("false입니다");
};

const userInput = "";
//if(userInput) {
//  alert("입력해주셔서 감사합니다");
//} else {
//  alert("입력값을 작성해주세요");
//};

// 퀴즈1
const add1 = (a, b) => {
  return a + b;
}
console.log(add1(5, 3));

// 퀴즈2
const minus = (a, b) => {
  return a - b;
};
console.log(minus(60,20));

//퀴즈3
const introduce = (name2, age) => {
  return '안녕하세요' + name2 + '님, 당신의 나이는' + age + '세입니다';
}
console.log(introduce("박성혜", 51));

const daysOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일"
];
console.log("🚀 ~ daysOfWeek:", daysOfWeek);
console.log("오늘의 요일:", daysOfWeek[1]);

const idol = [
  "장원영",
  "안유진",
  "리즈",
  "레이",
  "가을",
  "이서"
]
console.log("좋아하는 멤버:", idol[0]);
console.log("마지막 멤버:", idol.length);

