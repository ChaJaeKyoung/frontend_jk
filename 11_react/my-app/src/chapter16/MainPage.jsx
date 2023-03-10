import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainPage(props) {
  // 사용자가 직접 경로를 쳐서 이동하는 경우는 드물다.
  // 페이지 이동을 위한 useNavigate() 훅을 제공
  // navigate('/경로');
  // navigate(1); 또는 navigate(-1); => 앞으로 가기, 뒤로 가기 기능
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인 페이지</h1>
      <nav>
        <ul>
          {/* 방법1 */}
          <li onClick={() => { navigate('/places'); }}>장소</li>
          <li onClick={() => { navigate('/games'); }}>게임</li>

          {/* 방법2: a태그 역할의 Link 컴포넌트 */}
          {/* 차이점?
            a태그의 기본 동작은 페이지를 이동시키면서, 페이지를 아예 새로 불러옴
            (새로고침: 언마운트 되었다가 다시 마운트 시킨다는 의미) 그렇게 되면 리액트 앱이 지니고있는 상태들도 초기화되고,
            컴포넌트들도 새로 렌더링을 하게 됨
          */}
            {/* a태그의 사용이 필요하다면 Link 컴포먼트를 사용 -> 새로고침이 막아진 a테그 */}
            <li>
              {/* Link컴포넌트는 props로 to를 주면 됨 */}
              <Link to="/places">장소</Link>
            </li>
            <li>
              <Link to={"/games"}>게임</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainPage;