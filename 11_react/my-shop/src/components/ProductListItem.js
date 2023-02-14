import React from 'react';
import { Col } from 'react-bootstrap';
import styled from "styled-components";

// 방법1: styled-components로 기존에 있는 스타일+ 스타일 확장하는 방법!!
// styled(컴포넌트이름) 이렇게 사용한다.
const StyledCol = styled(Col)`
  cursor: pointer;
`; 

// 방법2: GlobalStyle 에 공통 스타일로 작성 
// 아래 <Col>에 클래스네임을 줘서 "cursor-pointer"로 스타일 변화를 준다.
// 공통 스타일로 여기저기서 사용하는 것이 더 편리하므로 여기서는 클래스네임을 주기로!

function ProductListItem(props) {
  console.log(props);
  const { imagePath, content, title, price } = props.productInfo;
  return (
    <>
      {/* 방법1 */}
      {/* <StyledCol md={4} sm={6}>
        <img src={imagePath} alt={content} width="80%" />
        <h4>{title}</h4>
        <p>{price}원</p>
      </StyledCol> */}
      
      {/* 방법2 */}
      <Col md={4} sm={6} className="cursor-pointer">
        <img src={imagePath} alt={content} width="80%" />
        <h4>{title}</h4>
        <p>{price}원</p>
      </Col>
    </>
  );
}

export default ProductListItem;