import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productAPI";

const initialState = {
  productList: [],
  selectedProduct: {},
  status: 'idle' // idle: 쉬고 있는
};

// * extraReducers는 직접 액션생성함수 정의 를 만들어줘야한다. 
// thunk(api 요청라이브러리)를 이용한 비동기 작업 처리하기
// 1) API 요청에 대한 상태 관리 쉽게 가능
// (요청 시작-로딩중, 요청 성공 또는 실패 시 로딩이 끝났음을 명시)
// 2) 요청이 성공하면 응답에 대한 상태관리, 실패하면 에러에 대한 상태 관리 등
// thunk: 리덕스 미들웨어 = 액션을 디스패치 했을 때, 리듀서에서 이를 처리하기에 앞서서 사전에 지정된 작업을 실행 
// 액션과 리듀서 중간에 끼어있는 중간자 역할, 액션 -> (미들웨어) -> 리듀서
// createAsyncThunk()는 비동기 작업을 처리하는 액션 생성 함수를 만들어 줌
export const getMoreProductsAsync = createAsyncThunk(
  //       / 아래부분: 액션명칭 <- 우리가 알아서 작명
  'product/getMoreProductsAsync', // action type
  async () => { // action이 발생했을 때 실행할 비동기 작업
    const result = await getProducts();
    return result; // 값을 반환하면 'fulfilled'(<- 프로미스 상태)로 바뀌고, action.payload에 담겨 리듀서 함수로 전달됨
  }
);


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
    // 더보기 버튼 클릭 시 전역상태에 상품 목록 추가하는 리듀서
    getMoreProducts: (state, action) => {
      console.log(action.payload);
      // state.productList.push(...action.payload);
      state.productList = [...action.payload]; // 데이터 덮어쓰기
    },
  },
  // 비동기적인 작업에는 extraReducers를 사용
  extraReducers: (builder) => {
    builder //첫번째 인자: thunk함수이름.promise 요청상태, 두번째인자: 리듀서 함수
      .addCase(getMoreProductsAsync.pending, (state) => { // pending상태 일 때 동작할 리듀서
        state.status = 'loading';
      })
      .addCase(getMoreProductsAsync.fulfilled, (state, action) => { // pending상태 일 때 동작할 리듀서
        state.status = 'idle'; // complete, success 등
        state.productList.push(...action.payload);
      })
      .addCase(getMoreProductsAsync.rejected, (state) => { // pending상태 일 때 동작할 리듀서
        state.status = 'fail';
      })
  }
});

// 액션 생성 함수 내보내기 
export const { getAllProducts, getProductById, getMoreProducts } = productSlice.actions;

// +)useSelector() 쓸 때마다 state 콜백함수 반복 귀찮-> 여기에 선언해줘서 그냥 쓴다.
export const getProductList = state => state.product.productList;
export const getSelectedProduct = state => state.product.selectedProduct;
export const selectStatus = state => state.product.status;

// 이 reducer 함수를 store에 등록해줘야 함
export default productSlice.reducer;