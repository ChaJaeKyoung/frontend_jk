import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from "styled-components";

import { getProductList } from "../features/product/productSlice";

const LatestViewWrapper = styled(Card)` // 부트 스트랩 Card의 스타일을 확장시킬 것임
  position: fixed;
  top: 100px;
  right: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  width: 8rem;
`;

function LatestView(props) {
  const productList = useSelector(getProductList);
  const latestViewed = JSON.parse(localStorage.getItem('latestViewed')); // 없으면 null 반환
    
  const latestViewedProducts = latestViewed?.map((id) => {
    return productList.find((product) => {
      return product.id === id;
    });
  }); // 옵셔널 체이닝에 의해 undefined반환 -> 최근 본 상품 배열이 null이더라도 오류가 나지 않게됨!!! 물음표 하나를 latestViewed뒤에 직어준다..!!

  if (productList.lengt < 1 || !latestViewedProducts) {
    return null; // 렌더링을 안한다
  }

  return (
    <LatestViewWrapper>
      <Card.Header>최근 본 상품</Card.Header>
      <ListGroup variant="flush">
        {latestViewedProducts.map((product, index)=> {
          return (
          <React.Fragment key={product.id}>  
          {/* key값을 줄 때에는 생략했던 React.Fragment를 다시 입력해서 감싸주는 태그에 map에서 쓸 key를 넣어준다. */}
            <img src={product.imagePath} alt={`img-${index}`}/>
            <ListGroup.Item>{product.title}</ListGroup.Item>
          </React.Fragment>
        )})}
      </ListGroup>
    </LatestViewWrapper>
  );
}

export default LatestView;