import { useState } from "react"; // 자바스크립트의 함수가 아니고 리액트의 함수라서 import 해줘야한다

function Counter(props) {
  // state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 하겠다.
  // 변수명 주의! 관례적으로 지어야함
  // count [abc, setAbc] = useState(0) 이렇게 해줘야됨
  const [count, setCount] = useState(0); // 초기값 0
  // useState()의 결과로 배열이 반환됨 -> [0, set함수]
  // 첫 번째 요소는 현재 변수를 의미하고, 두 번째 요소는 해당 변수를 갱신해주는 함수
  // 배열의 구조분해 할당을 사용하여 변수 선언 및 할당 (을 동시에 함)

  // 만약 state 미사용 시
  let wrongCount = 0;

  return (
    <div>
      {/* state 사용 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>

      {/* state 미사용 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => {
        wrongCount++;
        console.log(wrongCount);
      }}>클릭(잘못된 방법)</button>

      {/* 화면을 바꾸려면 state로 바꿔야함 상태변화를 해줘야 화면에 변화가 나타나기 때문임*/}

    </div>
  );
}

export default Counter;