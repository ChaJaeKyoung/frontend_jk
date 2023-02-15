import axios from "axios";
// 상품과 관련된 api 요청 함수들을 정의
// 함수를 따로 호출하는 이유?
// 가독성도 좋고, 여러 곳에서 재사용 할 수 있도록 함수로 만듦


export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/products');
    if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때
    console.error(error);
    throw error;
  }
};

// id로 특정 상품만 조회하고 싶으면 이렇게 하면 됨
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/products/${id}`);
    if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때
    console.error(error);
    throw error;
  }
};


/* 보내도 받을 서버가 없기 때문에 일단 주석처리
// 상품추가 
export const addProduct = async (product) => {
  try {                                            //임의로 /product-add라는 보낼 url 주소를넣어줌 {product: product } 는 {product}로 생략 가능
    const response = await axios.post(`http://localhost:4000/product-add/` , { product });
    if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴- HTTP 상태코드
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때
    console.error(error);
    throw error;
  }
};
// HTTP post 방식으로 어떤 데이터 여기서는 객체를 보냈을 때
// body에 담겨서 보내기 때문에
// backend에서 아래와같은 언어로 상품 정보를 볼 수 있다!
// request.body.product

// 상품 주문
export const orderProduct = async (productId, orderCount ) => {
  try {                                            //임의로 /product-order 라는 보낼 url 주소를넣어줌 
    const response = await axios.post(`http://localhost:4000/product-order/` , { productId, orderCount });
    if (response.status === 200) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때
    console.error(error);
    throw error;
  }
};
// 마찬가지로 서버에서 아래와같은 방식으로 정보를 뽑아 쓸 수 있다.
// request.body.productId
// request.body.orderCount
*/