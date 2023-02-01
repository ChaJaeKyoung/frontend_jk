import styled from "styled-components";
// 0. styled-components 설치하기
// npm install styled-components


// CSS in JS 란?
// 이 문구가 뜻하는 그대로, 이 기술은 JS안에 CSS를 작성하는 것

// styeld-components란?
// CSS문법을 그대로 사용하면서 결과물을 스탕리링된 컴포넌트 형태로 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소의 스타일을 지정

// vscode extention깔아서 백틱 안에 요소들도 css처럼 보이게 해준다.
// vscode-styled-components 설치!
// 1. 기본적인 사용법
const Wrapper = styled.div`
  padding: 1rem;
  background: gray;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;

function StyledPage() {
  return (  
    <>
      <Wrapper>
        <Title>
          Hello, React!
        </Title>
      </Wrapper>
    </>
  );
}

export default StyledPage;