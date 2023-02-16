import React from 'react';
import { Col } from 'react-bootstrap';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 방법1: styled-components로 기존에 있는 스타일+ 스타일 확장하는 방법!!
// styled(컴포넌트이름) 이렇게 사용한다.
const StyledCol = styled(Col)`
  cursor: pointer;
`; 

// 방법2: GlobalStyle 에 공통 스타일로 작성 
// 아래 <Col>에 클래스네임을 줘서 "cursor-pointer"로 스타일 변화를 준다.
// 공통 스타일로 여기저기서 사용하는 것이 더 편리하므로 여기서는 클래스네임을 주기로!

// 숫자 포맷 적용  ( 포멧형태 ,스타일인자 ) 
const formatter = new Intl.NumberFormat('ko-KR'); // 선생님께서 보내주신 날짜관련 js 유튜브

function ProductListItem(props) {
  console.log(props);
  const { imagePath, content, title, price, id } = props.productInfo;
  const navigate = useNavigate();
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
        <img src={imagePath} alt={content} width="80%" 
        // 이동 경로 설정하기
        onClick={() => {
          navigate(`/detail/${id}`);
        }}/>
        <h4>{title}</h4>
        <p>{formatter.format(price)}원</p>
      </Col>
    </>
  );
}

export default ProductListItem;