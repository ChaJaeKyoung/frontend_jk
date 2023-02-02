import React from 'react';

function SimpleRouter(props) {
  return (
    <div>
      
    </div>
  );
}

export default SimpleRouter;

// 설치하기
// npm install react-router-dom

// react-router-dom이란?
// 리액트를 위한 라우팅 라이브러리
// 라우팅: 사용자가 원하는 경로로 보내는 과정

// 페이지 나누는 법(리액트 미사용시)
// MPA(Multi Pages Application)라서 각 페이지 별 html만듦
// /list 경로로 접속하면 해당 list.html 파일 보내줌

// 페이지 나누는 법(리액트 사용시)
// SPA(Single Page Application)라서 파일 하나만 존재
// List 컴포넌트를 만듦
// /list 경로로 접속하면 기존 컴포넌트 자리에 List 컴포넌트 보여줌

// 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter 2) Routes 3) Route

// 1) 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
//    웹 브라우저의 history 객체를 이용해서 경로를 탐색할 수 있게 해줌

