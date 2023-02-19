import { createGlobalStyle } from "styled-components";
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 css, js라이브러리
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import 'react-toastify/dist/ReactToastify.min.css'; // ReactTostify CSS 추가

import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./pages/Header";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
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

  .odd-color {
    &:nth-child(odd) {
    background: #ffddcc;
    }
  }

  .text-ellipsis {
    /* 말줄임표 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
              {/* index: index route(여기서는 default child route) */}
              <Route index element={<Main />} />
              {/* /detail/1로 접속하면 productId에 1이 담김 */}
              <Route path="/detail/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<div>페이지가 존재하지 않습니다.</div>} />
            </Route>
          </Routes>

          {/* Toast란?  알림창 살짝 뜨는것 
            사용처:
            -> ProductDetail에서 주문수량값에 숫자 대신 다른 값이 들어갔을 때 에러메시지창을 띄움 
            사용법: 아래 참조
          */}
          <ToastContainer  
            position="bottom-right"
            autoClose={3000}
            pauseOnFocusLoss={false}
            theme="dark"
          />
        </BrowserRouter>
    </div>
  );
}

export default App;

// react-toastyfi 사용법 
/*
//기본 설정값들 위처럼 커스터마이징 해서 사용하면 됨
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
*/
{/* Same as */}
{/* <ToastContainer /> */}