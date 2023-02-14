import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null
};

// 상품 정보를 담을 slice를 만듦
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action);
      state.productList = action.payload;
    },
    // 나중에 action이 많아지면 헷갈려서 payload 자체를 구조분해 할당으로 가져온다
    // getAllProducts: (state, {payload:productList} ) => {
    //   state.productList = productList ;
    // },
    getProductById: (state, action) => {
      state.selectedProduct = action.payload;
    },
  }
});

// 액션 생성 함수 
export const { getAllProducts, getProductById } = productSlice.actions;

// 이 reducer 함수를 store에 등록해줘야 함
export default productSlice.reducer;