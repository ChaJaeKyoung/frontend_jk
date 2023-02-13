import { createGlobalStyle } from "styled-components";

// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 css, js라이브러리
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import { Button } from "react-bootstrap";


const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  *{
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        {/* 부트스트랩 연습 */}
        <Button variant="primary">Primary</Button>{' '}
      </>
    </div>
  );
}

export default App;
