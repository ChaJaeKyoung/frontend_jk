import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: {}
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
    getMoreProduct: (state, action) => {
      state.productList.push()
    },
  }
});

// 액션 생성 함수 
export const { getAllProducts, getProductById } = productSlice.actions;

// +)useSelector() 쓸 때마다 state 콜백함수 반복 귀찮-> 여기에 선언해줘서 그냥 쓴다.
export const getProductList = state => state.product.productList;
export const getSelectedProduct = state => state.product.selectedProduct;


// 이 reducer 함수를 store에 등록해줘야 함
export default productSlice.reducer;