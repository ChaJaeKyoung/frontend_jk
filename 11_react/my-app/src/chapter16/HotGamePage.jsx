import React from 'react';
import { Outlet } from 'react-router-dom';

function HotGamePage(props) {
  return (
    <div>
      <h1>인기 게임 리스트</h1>
      <Outlet/>
    </div>
  );
}

export default HotGamePage;