import { createGlobalStyle } from "styled-components";
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 css, js라이브러리
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
// import Cart from "./pages/Cart";


const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  /* 리액트 부분 */
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
        <BrowserRouter>
          <GlobalStyle />
          {/* 리액트 부트스트랩 연습 */}
          {/* <Button variant="primary">Primary</Button>{' '} */}
          {/* 일반 부트스트랩 연습 */}
          {/* <button type="button" className="btn btn-primary">Primary</button> */}
          
          <Routes>
            <Route path="/" element={<Header />}>
              {/* <Route path="/cart" element={<Cart />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
