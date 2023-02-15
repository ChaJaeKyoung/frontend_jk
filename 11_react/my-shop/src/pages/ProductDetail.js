import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { getProductById, getSelectedProduct } from '../features/product/productSlice';

// 서버에서 받아온 데이터라고 가정
// axios 대체...
import data from "../data.json";
import styled, { keyframes } from 'styled-components';
import TabContents from '../components/TabContents';

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
// 깜빡깜빡 효과주기
const highlight = keyframes`
  from { background-color: #cff4cc; }
  50% { background-color: #e8f7fa; } 
  to { background-color: #cff4cc; } 
`;
const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
  /* position: 50% fixed; */
`;

function ProductDetail(props) {
  // useParams() 사용하여 productId 가져오기
  const { productId } = useParams();
  const dispatch = useDispatch();
  // Quiz: 전역 스토어에서 selectedProduct 꺼내오기
  const selectedProduct = useSelector(
    // (state) => {
    // return state.product.selectedProduct;
    // }
    getSelectedProduct
  );
  console.log(selectedProduct);

  // Info창 상태
  const [showInfo, setShowInfo] = useState(true); 
  // input 주문값 상태
  const [orderCount, setOrderCount] = useState(1); // 주문 수량 상태
  // 탭 index 상태 -> 방법3. 배열에서 사용
  const [showTabIndex, setShowTabIndex] = useState(0); 
  // 탭 상태 -> 방법3. 객체에서 사용
  const [showTab, setshowTab] = useState('detail');

  const handleChangeOrderCount = useCallback((e) => {
    // 유효성 검사
    if (isNaN(e.target.value)) {
      toast.error('숫자만 입력하세요!');
      return;
    }
    setOrderCount(Number(e.target.value));
  }, []);
  // useEffect(() => {
  //   // orderCount += orderCount;
  // }, [handleChangeOrderCount]);

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 그 결과를 리덕스 스토어에 저장 
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ...axios api call... 가정
    const foundProduct = data.find((product) => {
      return product.id === productId ;
    });

    dispatch(getProductById(foundProduct));
    // 3초 뒤에 info창 사라지게 만들기
    const timeout = setTimeout(() => {
      setShowInfo(false);
    }, 3000);
    // 불필요하게 타이머가 계속 생기는 것을 정리
    // 뒷정리 함수 -> 컴포넌트가 unmount 될 때 실행!
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // product가 없을 경우에
  if(!selectedProduct) {
    // return null;
    return <div className='pt-5'>상품이 존재하지 않습니다.</div>
  } 
  return (
    <>
      {/* 부트스트랩 pt-3 의미 padding-top: 1rem */}
      <Container className="pt-3">
        {/* Quiz처음에 info 띄우고 3초 뒤에 사라지게 만들기 */}
        {/* hint: 처음 렌더링 됐을 때 setTimeout으로 타이머설정 */}
        {
          showInfo && <StyledAlert variant="info" onClose={() => setShowInfo(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
          </StyledAlert>  
        }
        
        <Row>
          {/* Quiz: 데이터 바인딩 작업 */}
          <Col md={6}>
            <img src={selectedProduct.imagePath} alt={selectedProduct.content} width = "80%"/> 
          </Col>
          <Col md={6}>
            <h4 className="pt-5">{selectedProduct.title}</h4>
            <p>{selectedProduct.content}</p>
            <p>{selectedProduct.price}원</p>
            
            {/* Quiz orderCount에 따라 iput상태 업데이트  */}
            <Col md={4} className="m-auto mb-3">
              <Form.Control type="text" value={orderCount} 
                onChange={handleChangeOrderCount}
              />
            </Col>
            <Button variant="primary" className="mb-3">주문하기</Button>
          </Col>
        </Row>

        {/* 탭 버튼 UI - 부트스트랩 */}
        {/* defaultActiveKey: 기본으로 active할 탭, active 클래스가 들어가있음 */}
        <Nav variant="tabs" defaultActiveKey="link-0" className="my-3">
          <Nav.Item> 
            <Nav.Link eventKey="link-0" onClick={() => { setShowTabIndex(0) || setshowTab('detail'); }}>상세정보</Nav.Link> 
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => { setShowTabIndex(1) || setshowTab('review'); }}>리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => { setShowTabIndex(2)  || setshowTab('qa'); }}>Q&amp;A</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => { setShowTabIndex(3)  || setshowTab('exchange'); }}>판품/교환정보</Nav.Link>
          </Nav.Item>
        </Nav>
        
        {/* 탭의 내용을 다 만들어 놓고 조건부 렌더링하면 됨 */}
        {/* state && <나타내고싶은것> */}
        {/* 방법1. 삼항 연산자 */}
        {/* {showTabIndex === 0 
          ? <div>탭 내용1</div>
          : showTabIndex === 1
            ? <div>탭 내용2</div>
            : showTabIndex ===2 
              ? <div>탭 내용3</div>
              : showTabIndex ===3
                ? <div>탭 내용4</div>
                : null
        } */}

        {/* 방법2. 컴포넌트로 추출 */}
        {/* props로 상태를 넘겨주면 된다. */}
        {/* <TabContents showTabIndex={showTabIndex}/> */}

        {/* 방법3. 배열이나 객체 형태로 만들어서 조건부 렌더링 */}
        {/* 배열 형태 */}
        {/* {
          [
            <div>탭 내용1</div>, // 위에서 setShowTabIndex(0)
            <div>탭 내용2</div>, // 위에서 setShowTabIndex(1)
            <div>탭 내용3</div>, // 위에서 setShowTabIndex(2)
            <div>탭 내용4</div> // 위에서 setShowTabIndex(3)
          ][showTabIndex]  
        } */}
        {/* 객체 형태 */}
        {
          {
            'detail': <div>탭 내용1</div>, // 위에서 setShowTab('detail')
            'review': <div>탭 내용2</div>, // 위에서 setShowTab('review')
            'qa': <div>탭 내용3</div>, // 위에서 setShowTab('qa')
            'exchange': <div>탭 내용4</div> // 위에서 setShowTab('exchange')
          }[showTab]
        }
      </Container>
    </>
  );
}

export default ProductDetail;