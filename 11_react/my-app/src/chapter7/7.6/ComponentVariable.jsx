import { useRef } from "react";
import { useState } from "react";

function ComponentVariable() {
  const [count, setCount] = useState(1);

  console.log('컴포넌트 렌더링!!');
  
  let id = 1;
  console.log(id); // 컴포넌트도 함수이기 때문에 새로 호출하면 id값은 초기값인 1이 계속 나오게 됨
  

  // 매번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환
  // 즉, 렌더링 될 때 값이 초기화 되지 않음
  // 렌더링과 관련 없는 데이터에는 useRef()를 사용
  const idRef = useRef(1);
  console.log(idRef); // useRef를 사용하게 되면 렌더링 되어도 이전값이 기억되어 초기랑 다른값이 게속 나올 수 있게 됨 

  return ( 
    <div>
      <p>총 {count}번 렌더링</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        count 업데이트
      </button>
      <button onClick={() => {
        id++;
        idRef.current++;
        // console.log(id);
        // console.log(idRef);
      }}>
        id 업데이트
      </button>
    </div>
  );
}

export default ComponentVariable;

// 화면에 보여지지 않을 로직에 사용된 숫자같은 것들은 
// 전부 ref에 넣어두면 된다. 
// 의미없는 것들을 자꾸 렌더링 할 필요 없기 때문이다