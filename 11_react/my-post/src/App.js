import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';


function App() {
  // 서버에서 데이터를 가져왔다고 가정 
  // 지금은 간단하게 배열안에 string만으로 
  // 나중엔 배열 안에 객체를 넣어서 할 예정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?','자바스크립트 핵심 문법','스타일링 가이드']);
  
  const [showPostDetail, setshowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // 실제로는 객체안에 다 들어갈 좋아요 수
  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  
  
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
      {posts.map((post, index) => {
          return (
            // 맵함수를 이용할 때는 제일 처음 감싸는 테그에다가 key값을 입력해 줘야 한다.
              <div 
                key={index} 
                className='list'
                onClick={() => {
                  setshowPostDetail(true);
                  setCurrentIndex(index);
                }}
                >
                <h4>{post}</h4>
                <p>2023년 1월 20일</p>
                <p>by goni.kim</p>
                <p>이것은 map함수로 구현된 포스트 입니다.</p>
                <hr />

                <span onClick={() => {
                  // 배열을 조작하는 것이기 때문에 새로운 배열을 만들어 준다.
                  const copyLikeCount = [...likeCount];
                  copyLikeCount[index]++;
                  setLikeCount(copyLikeCount);

                }}
                >❤️ {likeCount[index]}</span>
              </div>
          );
        })}

        {showPostDetail && <PostDetail posts={posts} setPosts={setPosts} currentIndex={currentIndex}/>}
        {/* {showPostDetail ? <PostDetail /> : null} */}
        

      </div>
    </>
    
  );
}

export default App;
/*  */