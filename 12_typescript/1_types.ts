// 자바스크립트에 타입 문법이 추가된 것
// 코드를 짤 때 타입을 엄격하게 지정(지정하는 것을 정적 타입 이라고 함)
// 잘못된 타입의 데이터가 들어가는 것을 막아 타입 관련 버그들을 미연에 방지

// 변수에 타입 지정이 가능
// 변수명: 타입명

// TS에서 지원하는 기본 자료형
// boolean, number, string, Array, object, 튜플(tuple), enum, any, void, null과 undefined, never등이 있음

// 1. boolean
// true 또는 false 값을 저장하는 타입
let active: boolean = true;
// 이 변수에는 boolean 타입만 들어올 수 있음
// active = 12; // 타입이 실수로 변경될 때 에러 발생

// 2. number
// 숫자 데이터를 저장하는 타입
// 10진, 16진, 2진, 8진수 리터럴을 지원
let decimal: number = 10; //10진수
let hex: number = 0xa; //16진수
let binary: number = 0b1010; //2진수
let octal: number = 0o12; //8진수
// 이 변수에는 number 타입만 들어올 수 있음

console.log(decimal,hex,binary,octal);

// node는 자바스크립트 실행 환경
// ctrl + f5 => node 누르면 디버그콘솔에 콘솔이 뜸

// 3. string 
// 문자열 데이터를 저장하는 타입
let message: string = 'Welcome'
// 이 변수에는 string 타입만 들어올 수 있음

// 4. Array
// 배열의 타입을 정의하는 방법에는 두 가지가 존재
// 1) 첫번째 방법: type[]
let firstArray: number[] = [1, 2, 3]; // 숫자만 담긴 배열만 가능

// 2) 두번째 방법(제네릭): Array<type>
let secondArray: Array<number> = [1, 2, 3]; // 숫자만 담긴 배열만 가능
// 타입을 파라미터로 입력하는 문법

// 5. object 
let person: object = { a: 11, b: 'bb', c: true  };
// 원시 자료형이 아닌 모든 자료형 값이 들어올 수 있음(예: 배열, 객체, 함수 등)
let person2:{ name: string, age: number } = { name: 'Kim', age: 35 };
// 이 변수에는 객체만 들어올 수 있는데, name은 string, age는 number 타입만 가능
// person2 = { name: 'j' , age: 10 };

let person3:{ name: string, age: number, job?: string } = { name: 'Kim', age: 35 };
// ? 사용 시 job 속성은 옵셔널 , 만약에 넣을 경우엔 string으로 넣어주겠다

// 어떤 함수의 매개 변수가 객체 자료형을 받는다고 가정
function greetUser(user: {name: string, age: number}) {
  console.log(`hello ${user.name}`);
}
greetUser({ name: 'Goni', age: 35});
// 객체의 모든 속성을 명시적으로 지정한 덕분에 코드를 보면 모든 사람이 
// 해당 객체로 무엇을 할 수 있고 무엇을 할 수 없는지 쉽게 알 수 있음

// Quiz
// Q1. 여러분의 직업, 하루 공부 시간을 변수로 각각 저장해보세요.
// 타입은 명시적으로 지정

const job: string = 'student';
const studyHour: number = 5;

console.log(job,studyHour);

// Q2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보세요.
// 객체 안에는 노래 제목과 가수이름이 들어가면 됩니다.
// 단, 제목과 가수는 문자만 들어올 수 있음

const favoriteMusic:{ song: string, singer: string } = {song: 'waybackhome', singer: 'SHAUN'};
console.log(favoriteMusic);

type Music = { title: string, artist: string }
let favorite: Music = {
  title: '소우주',
  artist: 'BTS'
}

// Q3. 다음과 같이 생긴 자료의 타입 지정을 해보세요.
let project:{ member: string[], days: number, started: boolean}  = {
  member: ['Kim', 'Park'], // member 속성은 문자로 이루어진 배열만 들어올 수 있고
  days: 30, // days 속성은 숫자
  started: true // started 속성은 true/false만 들어올 수 있음
};
console.log(project);

// 6. 튜플(tuple)
// 튜플을 사용하면 배열의 요소에 자료형을 정의할 수 있다.
let myTuple: [string, number, string] = ['hi', 5, 'hello'];

// TS는 튜플에 정의된 인덱스의 자료형은 알고 있지만, 배열에 새롭게 추가되는 요소의 자료형을 알 수는 없다.
myTuple.push(3);
myTuple.push('aaa');
console.log(myTuple);

// 7. enum(enumarated type)
// 열거형 enum을 이용하면 숫자 집합에 이름을 부여할 수 있다.
enum Status {
  deleted, //0
  pending, //1
  active //2
}
const blogPostStatus = Status.active;
console.log(blogPostStatus);
// 열거형 내부의 값은 0부터 시작
// 블로그 게시물의 상태를 표현할 때 2가 아닌 active라고 하는 것이 가독성이 좋음

// 다음과 같이 시작값을 지정하여 열거형의 숫자를 원하는 값부터 할당할 수도 있음
enum Week {
  MON = 1, //1
  TUE,//2
  WED,//3
  THU,//4
  FRI= 8, //8 : 중간에 새로운 값을 지정해주면 지정된 값부터 다시 커짐
  SAT,//9
  SUN//10
}
const todayWeek:Week = Week.SUN;
console.log(todayWeek);

// 반대로 숫자를 이용하여 열거형 값에 접근 가능
console.log(Week[4]);

// 8. any
// 어느, 어떤, 아무것이든 하나
// 무엇이든 될 수 있음을 의미(모든 자료형이 다 들어올 수 있음)
let anyValue: any = 123;
anyValue = 'aaa';
anyValue = true;
anyValue = [];

// 편하지만 타입스크립트를 쓰는 의미가 없어짐.. (일반 JS 변수가 됨)
// 자바스크립트에서 기존 코드들을 활용하면서 부분적 타입스크립트 적용할 때 사용

// 9. void
// 빈 공간, 하나도[전혀] 없는
// 자료형이 없음을 의미
// 함수의 리턴 타입으로 자주 사용됨
function storeValueInDatabase(objectToStore: object): void {
  // 데이터베이스에 값을 저장
}
// 이 함수는 객체를 받아서 데이터베이스에 저장하지만 아무것도 반환하지 않기때문에 반환값(리턴값)을 void로 지정

// 10. null과 undefined
// null 또는 undefined 자료형의 변수를 만드는 것은 유용하지 않음
// => null 및 undefined 값만 할당 할 수 있기 때문
// 주로 유니언 자료형 만들 때 사용(예: string | undefined)

// 11. never
// never는 절대 발생하지 않는 값
// 예를 들어 반환을 아예 하지 않거나 항상 오류를 발생시키는 함수에 사용할 수 있음
function throwError(error: string): never {
  throw new Error(error);
}

// 12. union type(타입을 2개 이상 합친 새로운 타입)
let unionValue: string | number = 'hi'; // 문자 또는 숫자가 들어올 수 있음
console.log(unionValue);

unionValue = 123;
console.log(unionValue);

// 문자 또는 숫자가 담길 수 있는 배열 타입 지정은?
let unionArray: (string | number)[] = [1,'나비',3,4,'표범'];
// let unionArray2: string | number[] = '나비';
// let unionArray3: string[] | number[] = [1,2,3];
console.log(unionArray);

// 문자 또는 숫자가 가능한 객체 타입 지정은?
let unionObject: {name: string | number} = {name: 'Kim'};
console.log(unionObject);

// (참고)
// 변수를 선언만 하면 자동으로 any 타입
// 확인법: 변수에 마우스 커서 올려두면 뜸
let value;
value =123;
value = '나무';
// 값을 할당하면 그 때 타입이 정해짐(동적 타입)

// 선언과 동시에 초기화 시 타입 지정은 자동으로 됨
let value2 = 123; // 타입 지정을 별도로 하지 않아도 자동으로 number로 됨
// value2= '토끼'; // Type Error

// Quiz
// Q4. 다음 변수 4개에 타입을 지정해보세요.
// let userName = 'Kim';
// let userAge = undefined;
// let married = false; 
// let userInfo = [userName, userAge, married];
// 단, userAge 변수엔 undefined 말고 숫자도 들어올 수 있음

let userName: string = 'cha';
let userAge: (number | undefined) = undefined;
let married:boolean = false;
let userInfo:[string,(number | undefined),boolean] = [userName, userAge, married];


// Q5. frontClass라는 변수에 타입을 지정해보세요.
// let frontClass = {
//   subject: ['html', 'css', 'js', 'react'],
//   score: [100, 95, 85, 90],
//   teacher: 'Kim',
//   student: 'Lee'
// };
// frontClass.subject[5] = false;
// frontClass.student = ['Lee', 'Park'];
// 타입 지정을 안해주면 터미널에 에러 발생
// 에러가 안나게 frontClass라는 변수에 타입 지정

let frontClass:{
  subject: (string | boolean)[],
  score: number[],
  teacher: string,
  student: string | string[]
} = {
  subject: ['html', 'css', 'js', 'react'],
  score: [100, 95, 85, 90],
  teacher: 'Kim',
  student: 'Lee'
};
frontClass.subject[5] = false;
frontClass.student = ['Lee', 'Park'];
console.log(frontClass);



