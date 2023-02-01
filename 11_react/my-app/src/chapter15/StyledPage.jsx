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

// export default로 StyledPage 하나만 내보내기 가능!
// default로 내보냈기 때문에 라이브러리 받아올 때는
// import styled from "styled-components";
// 여기서 styled에 중괄호 없이 받아와야 함.

// import {  } from "module";
// 이렇게 중괄호를 쳐서 받아와야하는 컴포넌트는
// default로 내보내진 컴포넌트가 아닌
// export StyledPage; 이렇게 보내진 컴포넌트 로 해서 가져와야 한다.


// 내보내기는 아래로 한줄로 덧붙여 쓰지만
// 이렇게 함수가 선언된 곳 앞에다가 바로 export를 적어 내보낼 수 있다.
// export function StyledPage() {
//   return ()
// }
