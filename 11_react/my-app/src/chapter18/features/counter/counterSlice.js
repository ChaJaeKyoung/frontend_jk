// counter와 관련된 state - 컴포넌트가 아니고 그냥 일반js 파일
import { createSlice } from "@reduxjs/toolkit";


// 3. Redux State Slice 만들기

// const 초기값으로 원시값, 배열, 객체 등 모든 데이터 타입 사용 가능
// 아래와 같이 주로 객체 형태로 사용함 (제일 가독성이 좋고, 나중에 state 변경하기 편함)
const initialState = {
  value: 0, 
  // anotherKey: 12, state를 계속 추가하기 편함
};


// 전역 state 만드는 방법 
// useState()랑 비슷한 역할을 하는데 Redux에서는 state를 하나를 slice라고 부름
// createSlice() 함수: state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줌
// 인자값으로 name, initialState, reducers 속성을 갖는 객체를 넣음
const counterSlice = createSlice({
  name: 'counter', // state 이름: -나중에 action 이름을 만드는데도 쓰임-
  // initialState: '', 위에 const initialState 선언해줌으로서 :''  생략
  initialState,
  // reducer 함수: state를 변경하는 함수
  // 현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업데이트하고 새 상태를 반환하는 함수
  reducers: { 
    increment: (state) => { // 첫번재 파라미터: 현재 state를 받아옴
      state.value += 1; // 배열 또는 객체의 경우에도 직접 수정하는 형태로 작성 가능!!
      // How? Immer 라이브러리가 내장되어 있음 : Immer 불변성 관리를 해줌
      // 실제로 상태를 직접 변경하지 않고 내부적으로 state 복사본을 만들어서 그 복사본을 변경하고 새로운 상태를 반환함
    },
    decrement: (state) => {
      state.value -= 1;
    },
  }
});

console.log(counterSlice);


// 각 reducer에 대한 액션 생성 함수들이 객체 형태로 들어있음
export const { increment, decrement } = counterSlice.actions;

// 위에서 정의한 reducer 함수들
export default counterSlice.reducer;

// 그래서 앞으로 Redux의 state를 변경하려면..?
// 1) state 변경 함수(reducer) 만들기
// 2) 다른데서 사용할 수 있게 export
// 3) 수정을 원할 때 그 함수(reducer함수를)를 실행해 다라고 store에 요청을 해야됨
// => dispatch() 함수를 사용하여 store에 액션을 보냄