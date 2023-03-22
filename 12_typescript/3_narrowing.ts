// 타입 확정하기 방식(여러가지가 존재)
// 언제 타입을 확정해야 할까?

// 예를 들어 
// 함수의 파라미터에 union type을 사용하면 엄격한 TS가 에러를 발생시킬 수 있음
// Q. 숫자 또는 문자를 인수로 전달하면 +1 해주는 함수를 만들어보세요.
const sumFunc = (x:string | number) => {
  let sum = x;
  
  // return sum = sum + 1; // string + 1이 안되기 때문에 에러!
};

// 그냥 JS에서는 문자나 숫자 모두 +1이 가능하지만
// TS에서는 변수의 타입이 number|string과 같은 union type인 경우
// 아직 이 파라미터의 타입이 확실하지 않으니까 자료 조작을 막음

// 비슷한 예로
function multiflyTow(x?: number) {
  // return  x * 2 ; // 에러
}
// 이럴 때 타입 확정하기 사용

// 대표적인 2가지
// 1. Narrowing(타입 좁히기) 
function myFunc(x: number | string) {
  // number | string 이라는 애매한 타입
  // 타입이 하나로 확정되지 않았을 경우 Narrowing 사용
  // 방법은 typeof 연산자

  if(typeof x === 'string') { //typeof 연산의 결과는 문자열이다.
    return x + '1';
  } else {
    return x + 1;
  }
}
console.log('연산결과는?'+myFunc(1));

function myFunc2(x:number | string, y?: number | string) {
  let array: number[] = [];
  // array[0] = x; // 에러
  if(y && (typeof x === 'number' && typeof y ==='number')) {
    array.push(x);
    array.push(y);
  } else if (typeof x ==='number') {
    array.push(x);
  } else {
    return console.log('문자는 넣을 수 없어요');
  }
  console.log(array);
}
myFunc2(3);
myFunc2(1,2);
myFunc2(1,'2');
myFunc2('a1');

// 2. Assertion(타입 단언) => 변수의 타입을 특정 타입으로 생각해라
// 즉, TS가 인식을 할 수 있게 해주는 거지 실제로 바뀌는 것은 아님
function myFunc3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x의 타입을 number로 인식해라
  console.log(array);
}

// Assertion 문법의 용도
// 1. union type을 하나의 타입으로 확정할 때 사용
// (특정 타입을 다른 타입으로 바꿔쓰는 건 안됨!)
// 2. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러 해결용으로 사용하거나
// 무슨 타입이 들어올지 정화가게 알고있는데 타입 에러가 나서 코드실행을 방해할 때

// 단점: 위 예제에서 string을 넘겨도 타입 에러가 발생하지 않기 때문에 as문법을 쓰면 TS쓰는 이유가 없어짐
myFunc3('123');