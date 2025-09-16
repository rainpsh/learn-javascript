// 배열
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
  "이서",
  "오소리"
]
console.log("좋아하는 멤버:", idol[0]);
console.log("마지막 멤버:", idol[idol.length -1]);

// 객체: key-value가 한쌍으로 구성된 정보들의 묶음
const person = {
  name: "박성혜",
  isMale: false,
  mbti: "ENTJ",
  favoriteFood: ["김밥", "볶음밥", "잡채"],
  age: 50
};
console.log("🚀 ~ person:", person);
console.log("name:", person["name"]);
console.log("남성여부: ", person.isMale);
console.log("좋아하는 음식: ", person.favoriteFood);
console.log("두번째로 좋아하는 음식: ", person.favoriteFood[1]);