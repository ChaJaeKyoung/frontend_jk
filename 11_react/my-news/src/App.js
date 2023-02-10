import logo from './logo.svg';
import './App.css';
// import { useCallback, useState } from 'react';
import { Route, Routes, useFetcher } from 'react-router-dom';

import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';

// 💚카테고리값을 state로 관리!
// function App() {
//   // 현재 선택한 category 상태 관리
//   const [category, setCategory] = useState('all');

//   // useCallback 언제감쌀 지 모를땐? 자식에게 props를 넘겨줄 때 사용
//   const handleSelect = useCallback((categoryValue) => {
//     setCategory(categoryValue);
//   }, []);

//   return (
//     <>
//       {/* category 정보를 두 자식이 다 쓰기 때문에 부모에서 내려줄 것임 */}
//       <Categories category={category} onSelect={handleSelect}/>
//       <NewsList category={category}/>
//     </>
//   );
// }

// 💚라우팅 + URL 파라미터 적용시
function App() {
  return (
    <Routes>
      {/* ?는 category 값이 선택적이라는 의미 */}
      {/* 즉, 있을 수도 있고, 업승ㄹ 수도 있다는 뜻 */}
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
