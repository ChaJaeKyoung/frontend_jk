// 사람을 수용하는 시설에서 사용한다고 가정
// useCounter() 훅을 사용하여 카운트를 관리하는 컴포넌트

import { useEffect } from "react";
import { useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; // 최대 카운트 수 , 관례적으로 상수는 전부 대문자로 작성!

function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount ] = useCounter(0); // useCounter()은 배열로 값이 돌아오기 때문에, 배열의 구조분해 할당을 이용하여 각각 변수에 담아서 저장
  // increaseCount, decreaseCount는 함수

  // useEffect() 작동 방식을 확인하기 위해 일부러 두 개의 훅을 사용
  // 1) 의존성 배열이 없는 경우
  // 컴포넌트가 마운트 된 직후에 호출되고, 이후 컴포넌트가 업데이트 될 때마다 호출
  useEffect(() => {
    console.log('=====================');
    console.log('useEffect() is called');
    console.log(`isFull: ${isFull}`);
  },);

  // 2) 의존성 배열이 있는 경우
  // 컴포넌트가 마운트 된 직후에 호출 되고, 이후 count값이 변할 때마다 함수 호출
  useEffect(() => {
    // 카운트 개수가 최대 용량에 도달하면 경고 문구가 표시되며, 더이상 입장이 불가
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);
  return ( 
    // 화면에 보여질 엘리먼트 작성
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      {/* button은 인터렉션 엘리먼트 이므로 disalbed 속성을 사용할 수 있다. true이면 사용불가, false면 사용가능 */}
      {/* full상태이므로 버튼을 막아서 입장을 막는다 */}
      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{color: 'red'}}>정원이 가득찼습니다.</p>} 
      {/* 리엑트 엘리먼트는 자바스크립트 안이더라도 세미콜론 찍을 필요가 없다. </p>오른쪽 옆에 ; 할 필요 없음 */}
    </div>
  );
}

export default Accommodate;