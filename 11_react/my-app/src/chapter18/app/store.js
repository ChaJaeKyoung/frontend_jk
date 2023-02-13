import { configureStore } from "@reduxjs/toolkit";
//      ⬇️스스로 작명하는 부분 (export defalut 로 내보내는 것들을 작명으로 해서 가져올 수가 있는데, 관례적인 네이밍센스로 해야된다.)
import counterReducer  from "../features/counter/counterSlice";
// 1. Redux Store 만들기
// 전역 상태를 보관하는 저장소
export const store = configureStore({
  reducer: {
    // 4. Slice Reducers 등록하기
    // Slice Reducers를 Store에 등록해야 컴포넌트들이 전역 state를 사용 가능
    counter: counterReducer,
  }
});

