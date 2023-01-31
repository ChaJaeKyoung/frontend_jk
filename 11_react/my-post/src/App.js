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

  const [inputText, setInputText] = useState('');
  const eventHandle = (e) => {
    setInputText(e.target.value);
  };

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
          {/* 변수로 선언하지 않고 배열에서 가져오기 때문에 같이 바뀜 */}
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
                <p>by jenny.cha</p>
                <p>이것은 map함수로 구현된 포스트 입니다.</p>
                <hr />

                <span onClick={(e) => {
                  // (버그 수정) 현재는 좋아요 버튼 누를 때 포스트 상세보기까지 같이 클릭됨!
                  // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남.
                  // *이벤트 객체 함수 이용해서 해결
                  e.stopPropagation(); // 상위 요소로 전파되는 이벤트 버블링을 막고 싶을 때
                  

                  // 배열을 조작하는 것이기 때문에 새로운 배열을 만들어 준다.
                  const copyLikeCount = [...likeCount];
                  // copyLikeCount[index] =  copyLikeCount[index] + 1;
                  // copyLikeCount[index] += 1;
                  copyLikeCount[index]++;
                  setLikeCount(copyLikeCount);

                }}
                >❤️ {likeCount[index]}</span>
              </div>
          );
        })}
        {/* event bubbling 현상 : 

          div> p > span

          span을 눌렀는데 div, p 도같이 눌린다
          부모에div onClick을 달았는데, span Onclick감지 후 
          div onClick이 발생한다..!

          =======================
          반대는 캡쳐링 부모를 눌렀는데 자식이 감지된다.
          그런데 default 값은 false라
          버블링만 신경쓰면 됨!!! 
          ======================
          따라서 좋아요 수를 눌렀는데 부모에 있는 Detail 이벤트가 발생한다.
          버그 해결방법? => *이벤트 객체 함수를 이용 
        */}

        {/* 새로운 포스트 등록 : CRUD  */}
        {/* Quiz. input에 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가. */}
        <input type="text" value={inputText} onChange={eventHandle} 
        // 위에 함수 선언하지 않고 바로 하는 방법
        // onChange={(e) => {
        //   setInputText(e.target.value);
        // }}
        />
        <br />
        <button type="button" onClick={() => {
          // posts state에 요소 하나 추가하면 자동으로 렌더링됨
          // posts배열을하나 복사해라.
          const postsClone = [inputText,...posts];
          setPosts(postsClone);
          const likeClone = [0,...likeCount];
          setLikeCount(likeClone);
          
        }}>
          포스트 등록
        </button>
        

        
        {/* 포스트 상세보기 조건부 렌더링 */}
        {showPostDetail && <PostDetail posts={posts} setPosts={setPosts} currentIndex={currentIndex}/>}
        {/* {showPostDetail ? <PostDetail /> : null} */}
        

      </div>
    </>
    
  );
}

export default App;
/*  */