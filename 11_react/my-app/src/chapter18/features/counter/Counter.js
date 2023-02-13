import React from 'react';
import { useDispatch, useSelector } from "react-redux";

// 5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기
function Counter(props) {
  // Redux Store에 있는 state를 가져오는 함수
  const count = useSelector((state) => state.counter.value); // state만 리턴하면 전역 state 전부 가져옴

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button type='button'>
          -1 감소
        </button>
        <span>{counter}</span>
        <button type='button'>
          +1 증가
        </button>
      </div>
    </div>
  );
}

export default Counter;