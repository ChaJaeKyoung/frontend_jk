// useCounter() 커스텀 훅 만들기
// initialValue라는 초기 카운트 값을 받아서 count라는 이름의 state 생성 시 초기값으로 제공
// 카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 훅
// 어떤 함수 컴포넌트에서든지 카운트 기능을 쉽게 사용 

import { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  // const increaseCount = () => {
  //   // count를 1씩 증가시키는 함수
  //   setCount((count) => {return  count + 1;}); // 비동기적 함수들을 동기적으로 만들어줌 잠정적 버그를 잡을 수 있다.
  //   // setCount(count + 1); // 문제점이 있기 때문에 콜백으로 넣어줘야됨
  // };

  // 화살표 함수 관련 생략을 모두 한 것
  const increaseCount = () => setCount(count => count + 1);
  const decreaseCount = () => setCount(count => Math.max(count - 1, 0)); // 아무리 음수가 나오더라도 0이 나오게 만듦 : 최소값 지정 로직

  return [count, increaseCount, decreaseCount];
}


export default useCounter;