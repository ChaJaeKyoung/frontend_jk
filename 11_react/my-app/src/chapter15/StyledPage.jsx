import styled, { css } from "styled-components";
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

// 2. props 사용하기
// 컴포넌트 형태라 props 사용이 가능
// 여기서의 styled.button의 button은 버튼 요소 (h1, div같은 것 처럼)
const Button = styled.button`
  width: ${props => props.width || '100px'}; // 기본값 설정
  height: ${props => props.height || '40px'}; // 기본값 설정
  color: ${props => props.dark? 'white' : 'black'};
  background: ${props => props.dark? 'black' : 'white'};
  border: 2px solid black;
  cursor: pointer;
  
  /* 3. & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: #b3b3b3;
  }

  /* 4. 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우 css를 불러와 사용 */
  ${props => 
    props.inverted && 
    // css impot 해줘야 함
    css`
      background: white;
      color: #1f1f1f;
      border: 2px solid white;
      &:hover {
        background: #1f1f1f;
        color: white;
      }
    `
  }
  /* 자기자신 선택자 여기서는 Button컴포넌트를 의미함 */
  /* + 는 형제선택자 : css 연산자 */
  & + & {
    margin-left : 1rem;
  }

  /* 만일 일반요소와의 거리두기를 하고싶다면? */
  & + button {
    margin-left : 1rem;
  }
`;
/* 5. 스타일 확장(커스텀) 하기 */
// 이번엔 만들어진 컴포넌트를 불러와서 추가해준 것
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;


function StyledPage() {
  return (  
    <>
      <Wrapper>
        <Title>
          Hello, React!
        </Title>
      </Wrapper>

      <Button width="200px" height="60px">Normal</Button>
      {/* ={true} 는 생략 가능 */}
      {/* <Button dark={true}>Dark</Button> */}
      <Button dark>Dark</Button>
      <Button inverted>Inverted</Button>
      <RoundedButton>Rounded</RoundedButton>
      <button>일반button태그</button>
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
