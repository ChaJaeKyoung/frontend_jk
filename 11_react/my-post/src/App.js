import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // 서버에서 데이터를 가져왔다고 가정 
  // 지금은 간단하게 배열안에 string만으로 
  // 나중엔 배열 안에 객체를 넣어서 할 예정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?','자바스크립트 핵심 문법','스타일링 가이드']);
  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className="header--dark">
        <h4>Goni Post</h4>
        <ul>
          <li>트렌딩</li>
          <li>최신</li>
        </ul>
      </header>
      
      <div className='inner'>
        {/* 포스트 목록 */}
        <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 27일</p>
          <p>by jenny.cha</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2022년 11월 11일</p>
          <p>by yg</p>
        </div>

      {/* Quiz: map()을 이용하여 포스트 반복 출력하기 */}
      {posts.map((name, index) => {
          return (
            <>
              <div className='list'>
                <h4  key={index}>{name}</h4>
                <p>2023년 1월 20일</p>
                <p>by goni.kim</p>
              </div>
            </>
          );
        })}
      </div>
    </>
    
  );
}

export default App;
/*  */