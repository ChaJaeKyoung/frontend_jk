// 자바스크립트에 타입 문법이 추가된 것
// 코드를 짤 때 타입을 엄격하게 지정(지정하는 것을 정적 타입 이라고 함)
// 잘못된 타입의 데이터가 들어가는 것을 막아 타입 관련 버그들을 미연에 방지
// 변수에 타입 지정이 가능
// 변수명: 타입명
// TS에서 지원하는 기본 자료형
// boolean, number, string, Array, object, 튜플(tuple), enum, any, void, null과 undefined, never등이 있음
// 1. boolean
// true 또는 false 값을 저장하는 타입
let active = true;
// 이 변수에는 boolean 타입만 들어올 수 있음
// active = 12; // 타입이 실수로 변경될 때 에러 발생
// 2. number
// 숫자 데이터를 저장하는 타입
// 10진, 16진, 2진, 8진수 리터럴을 지원
let decimal = 10; //10진수
let hex = 0xa; //16진수
let binary = 0b1010; //2진수
let octal = 0o12; //8진수
// 이 변수에는 number 타입만 들어올 수 있음
console.log(decimal, hex, binary, octal);
// node는 자바스크립트 실행 환경
// ctrl + f5 => node 누르면 디버그콘솔에 콘솔이 뜸
// 3. string 
// 문자열 데이터를 저장하는 타입
let message = 'Welcome';
// 이 변수에는 string 타입만 들어올 수 있음
// 4. Array
// 배열의 타입을 정의하는 방법에는 두 가지가 존재
// 1) 첫번째 방법: type[]
let firstArray = [1, 2, 3]; // 숫자만 담긴 배열만 가능
// 2) 두번째 방법(제네릭): Array<type>
let secondArray = [1, 2, 3]; // 숫자만 담긴 배열만 가능
// 타입을 파라미터로 입력하는 문법
// 5. object 
let person = { a: 11, b: 'bb', c: true };
// 원시 자료형이 아닌 모든 자료형 값이 들어올 수 있음(예: 배열, 객체, 함수 등)
let person2 = { name: 'Kim', age: 35 };
// 이 변수에는 객체만 들어올 수 있는데, name은 string, age는 number 타입만 가능
// person2 = { name: 'j' , age: 10 };
let person3 = { name: 'Kim', age: 35 };
// ? 사용 시 job 속성은 옵셔널 , 만약에 넣을 경우엔 string으로 넣어주겠다
// 어떤 함수의 매개 변수가 객체 자료형을 받는다고 가정
function greetUser(user) {
    console.log(`hello ${user.name}`);
}
greetUser({ name: 'Goni', age: 35 });
// 객체의 모든 속성을 명시적으로 지정한 덕분에 코드를 보면 모든 사람이 
// 해당 객체로 무엇을 할 수 있고 무엇을 할 수 없는지 쉽게 알 수 있음
