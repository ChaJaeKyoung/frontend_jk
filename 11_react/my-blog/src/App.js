import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데
// App 컴포넌트가 가장 처음으로 렌더링되는 컴포넌트이기 때문
function App() {
  return (
    // 브라우저라우터를 index에 넣어도 되고, App에서 한번에 넣어도 되고
    // 취향
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        {/* 여기서 :postId는 동적으로 변하는 파라미터를 위한 값 => URL 파라미터 */}
        {/* 경로에 이렇게 콜론(':')을 사용하고 아이디를 입력하면,
            실제 컴포넌트에서 useParams() 훅을 사용해 postId로 해당 값을 가져올 수 있음
            여기서 : 을 쓰면, postId라는 변수에 URL이 담겨준다
        */}
        {/* 매개변수를 여러개 설정 가능 */}
        <Route path="/post/:postId" element={<PostViewPage />}/>
        <Route path="/post/:postId/:otherValue" element={<PostViewPage />}/>
        <Route path="/post/:postId/:otherValue/:anotherValue" element={<PostViewPage />}/>

        {/* 그러나 , 경우의수 전부 저렇게 쓰지 않으면, 라우트가 매칭이 되지 않아서 패이지에 들어가지 않아짐. 
            -> 비효율적
        */}
        {/* 해결방법: 필수가 아닌 옵션값('?') 으로 처리 가능 */}
        <Route path="/post/:postId/:otherValue?/:anotherValue?" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
