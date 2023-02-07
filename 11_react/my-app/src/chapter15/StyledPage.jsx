import styled, { css } from "styled-components";
// 0. styled-components 설치하기
// npm install styled-components


// CSS in JS 란?
// 이 문구가 뜻하는 그대로, 이 기술은 JS안에 CSS를 작성하는 것

// styeld-components란?
// CSS문법을 그대로 사용하면서 결과물을 스타일링 된 컴포넌트 형태로 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소의 스타일을 지정

// vscode extention깔아서 백틱 안에 요소들도 css처럼 보이게 해준다.
// vscode-styled-components 설치!
// 1. 기본적인 사용법
const Wrapper = styled.div`
  padding: 1rem;
  background: gray;

  /* 6. 반응형 디자인:
  - 일반 CSS를 사용할 때와 똑같이 media 쿼리를 사용 가능 
  - 리액트스럽게 react-responsive 라이브러리 사용 */
  /* 기본적으로 가로 크기를 1024px에 가운데 정렬을 하고 가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채우기 */

  width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  } 
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
  /* import { css } from "styled-components" */
  /* 
    아래 줄에서 백틱앞의 css를 지워도 괜찮지만, 그렇게 된다면 모든 css가 문자열로 인식이 되어, css 내에서 props를 불러오지 못하게 됨!-> theme로 provide해준 것을 props로 받아야 되는데 그렇게 되면 컬러테마를 사용할 수 없게 됨
  */
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
// Button 컴포넌트에 모서리를 둥글게 하는 style이 추가된 RoundedButton 컴포넌트
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
