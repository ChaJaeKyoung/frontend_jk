import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    // {
    //   id: "1",
    //   title: "Arcsaber 11 Pro",
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: "3",
    //   title: "Aerus Z",
    //   price: 199000,
    //   count: 1
    // },
  ],
};
console.log(initialState);

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
    // action을 구조분해 할당으로 가져오기
    decreaseCount: (state, { payload: id }) => {
      
      const targetItem = state.cartList.find((cart) => { return cart.id === id });
      targetItem.count --;
    },
    // 장바구니에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 카운트만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: item }) => {
      // item = {id, title, price, count }; 를 받아옴
      // find()를 사용하여 해당 상품이 있는지 찾고
      console.log(item);
      const targetItem = state.cartList.find((cart) => { return cart.id === item.id});
      targetItem 
        ? targetItem.count += item.count  
        : state.cartList.push(
          // {id: item.product.id, title: item.product.title, price: item.product.price, count: item.count } // product로 한번에 보냈을 때는 이렇게 속성값에 하나하나 추가한다.
          item // 보낼때부터 속성 값 순서에 맞게 보낼 경우? item이 객체 그 자체이기 때문에 바로 push 가능하다.
        ); 
  
    },
    removeItemFromCart : (state, { payload: item }) => {
      // id를 이용해서 일치하면 cartList 에서 제거
      console.log(item.id);
      // const targetItem = state.cartList.find((cart) => { return item.id === cart.id });
      // targetItem && state.cartList.splice(item.index,1);
      const targetIndex = state.cartList.findIndex((cart) => cart.id === item.id );
      state.cartList.splice(targetIndex,1);
    }
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;
export const selectCartList = state => state.cart.cartList;
export default cartSlice.reducer;