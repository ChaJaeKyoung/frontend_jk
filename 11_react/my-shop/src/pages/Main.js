import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { 
  getAllProducts, 
  getMoreProducts, 
  getMoreProductsAsync,
  getProductList,
  selectStatus,
  
} from '../features/product/productSlice';

// 리액트(JS)에서 이미지 파일 import 하는법
import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import ProductListItem from '../components/ProductListItem';
import { getProducts } from '../api/productAPI';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();
  // const productList = useSelector((state) => state.product.productList);
  const productList = useSelector(getProductList);

  // API 요청 상태 가져오기(로딩상태)
  // 로딩 화면 만들기 추천: react-spinners, lotti files
  const status = useSelector(selectStatus);
  console.log(productList);

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ...api call ...
    // 0213숙제 data를 redux store에 저장
    // 액션 생성함수를 dispatch에 넣어주면 됨
    dispatch(getAllProducts(data));
  }, []);
  
  const handleGetMoreProducts = async () => {
    // 비동기함수 이기 때문에 동기적으로 바꿔줌
    // result에는 데이터가 담김
    const result = await getProducts();
    if(!result) return;

    dispatch(getMoreProducts(result));
  };

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg} /> */}
      </section>
      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            {/* <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col> */}
            
            {productList.map((product) => {
              console.log(product.id);
              return <ProductListItem key={product.id} productInfo={product}/>;
            })}
            {/* Quiz1: 반복적인 상품 목록 아이템 ProductListItem 컴포넌트화 시키기 */}
            {/* Quiz2: productList 배열을 반복하며 ProductListItem 렌더링 */}
            {/* Quiz3: 상품 정보를 props로 넘겨서 데이터 바인딩 */}
          </Row>
        </Container>

        {/* 상품 더보기 */}
        <Button variant="secondary" className='mb-4'
          onClick={() => {
            axios.get('http://localhost:4000/products')
              .then((response) => {
                console.log(response.data);
                // 스토어에 dispatch로 요청 보내기
                dispatch(getMoreProducts(response.data));
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          더보기1
        </Button>

        {/* 
          위 HTTP 요청 코드를 함수로 만들어서 api 폴더로 추출하고 async/await로 바꾸기 
          -> why? onclick안에다가 코드를 저렇게 쓰지 않는다! 가독성때문에 (나중에 컴포넌트 보기가 어려워진다.)
          -> 따로 함수호출
        */}
        <Button variant="secondary" className="mb-4" onClick={handleGetMoreProducts}>
          더보기2
        </Button>

        {/* thunk를 이용한 비동기 작업 처리하기 */}
        <Button variant="secondary" className="mb-4" 
          onClick={() => {
            dispatch(getMoreProductsAsync())
          }}>
          더보기3{status}
        </Button>
      </section>
    </>
  );
}

export default Main;

// json-server
// 실무와 비슷한 느낌으로 하기 위해 가짜 API 서버를 만듦
// json 파일 하나만 있으면 연습용 서버를 쉽게 구성 가능
// npx json-server ./src/data2.json --port 4000