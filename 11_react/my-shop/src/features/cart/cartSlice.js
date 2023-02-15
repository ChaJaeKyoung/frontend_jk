import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: "1",
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: "3",
      title: "Aerus Z",
      price: 199000,
      count: 1
    },
  ],
};

// 장바구니 정보를 담을 slice를 만듦
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 장바구니 수량을 변경하는 리듀서 함수 만들기
    // Quiz. 상품의 id값을 받아서 id로 해당 상품을 찾은 다음, 그 상품의 수량을 1씩 증가 / 감소
    // 1)리듀서 만들기
    // 2)액션 생성 함수 export 
    // 3)버튼 클릭시 액션 객체를 dispatch()
    // 4)요청 보낼 때 id값을 payload에 담아 보내기
    increaseCount: (state, action) => { // action { type: '', payload: }
      
      const targetItem = state.cartList.find((cart) => { return cart.id === action.payload });
      targetItem.count ++ ;
    },
    decreaseCount: (state, { payload: id }) => {
      
      const targetItem = state.cartList.find((cart) => { return cart.id === id });
      targetItem.count --;
    },
  }
});

export const { increaseCount, decreaseCount } = cartSlice.actions;
export const selectCartList = state => state.cart.cartList;
export default cartSlice.reducer;