// type alias(별칭) 만드는 법
let animalVar;
let animal = 'Dog';
let person4 = {
    name: 'Kim',
    age: 25
};
console.log(person4);
let porson5 = {
    name: 'Alice',
};
let friend = {
    name: 'Peter'
};
//friend.name = 'Tony'; // 읽기 전용 속성임
console.log(friend);
let position = { x: 10, y: 20 };
// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동완성기능이 동작함
// 특정 문자만 들어올 수 있도록 지정
let hisName;
hisName = 'goni'; // 자동완성 기능 동작
// hisName = 'kk'; // 에러
// 함수에서 Literal Type 사용하기
function testFunc(params) {
    return 1;
}
testFunc('hello');
function randomPlay(params) {
    return [params];
}
console.log(randomPlay('가위'));
