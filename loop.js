
for(let i = 0; i < 10; i++){
  // 반복해서 실행할 로직
  console.log(`${i} 번째 실행`);
  console.log("------------");
  
}
for(let i = 10; i >= 0; i--){
  console.log(i, '번째 실행');
}

const numbers = [254, 48, 3216, 8];
console.log("🚀 ~ numbers:", numbers)

for(let i = 0; i < numbers.length; i++){
  console.log(`💖 ${i}: ${numbers[i]}`);
 // console.log("💖", i,  numbers[i]);
}
console.log("------------");
  
// foreach: 향상된 for문
numbers.forEach((value, index) => 
  {
    console.log(`💖 ${index}: ${value}`);
  });

  const ingredientList = ["🥑","🍅", "🥭", "🍏", "🍃"];
  let sandwitch = "🍞";
  
  // 각 재료들을 샌드위치에 추가
  ingredientList.forEach((item) => 
  {
    console.log("🚀 ~ item:", item)
   // sandwitch = sandwitch + item;
    sandwitch += item;
    console.log("🚀 ~ sandwitch:", sandwitch)
  })

// 자주 사용하는 배열함수
const students = ["alice", "bob", "david", "lala", "sunghye"];

// map: 기존 배열을 조작하여 새로운 배열을 리턴
// 원본 배열에 영향 ❌

// const upperStudents = students.map((student) => {
//  return student.toUpperCase()
//  })

  // return 문일 경우 딱 한줄만 있을 경우 축약 가능
 const upperStudents = students.map((student) => student.toUpperCase());

 console.log("🚀 ~ upperStudents:", upperStudents)
 console.log("🚀 ~ students:", students)

 // filter: 배열안의 요소들 중 조건을 만족하는 배열의 요소들로 새로운 배열을 리턴(조건식을 return 구문에 작성)
 // 조건에 부합하는 요소가 없는 경우 빈 배열 리턴

 // 글자수가 4글자 이상인 요소들만 필터링

 const filterStudents = students.filter((student) => student.length >= 4);
 console.log("🚀 ~ filterStudents:", filterStudents);

 // find: 배열안의 요소들 중 조건을 만족하는 "첫번째 요소를 리턴"
 // 조건에 부합하지 않는 경우에는 undefined 리턴
 const filterStudent = students.find((student) => student.length >= 6);
 console.log("🚀 ~ filterStudent:", filterStudent);

 // some/every (boolean 타입 리턴)
 // some: 배열의 요소 중 하나라도 조건을 만족하면 true 리턴, 아니면 false 리턴
 // every: 배열의 요소들의 모든 조건을 만족하면 true 리턴, 아니면 false 리턴

 const someStudent = students.some((student) => student.startsWith("a"));
 console.log("🚀 ~ someStudent:", someStudent);

 const everyStudent = students.every((student) => student.startsWith("a"));
 console.log("🚀 ~ everyStudent:", everyStudent);
 