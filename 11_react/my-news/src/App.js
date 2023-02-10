import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useFetcher } from 'react-router-dom';
import { useCallback, useState } from 'react';

function App() {
  // 현재 선택한 category 상태 관리
  const [category, setCategory] = useState('all');

  // useCallback 언제감쌀 지 모를땐? 자식에게 props를 넘겨줄 때 사용
  const handleSelect = useCallback((categoryValue) => {
    setCategory(categoryValue);
  }, []);

  return (
    <>
      {/* category 정보를 두 자식이 다 쓰기 때문에 부모에서 내려줄 것임 */}
      <Categories category={category} onSelect={handleSelect}/>
      <NewsList category={category}/>
    </>
  );
}

export default App;
