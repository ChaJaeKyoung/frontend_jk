const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    borderBottom: '1px solid grey'
  },
  greeting: {
    marginRight: 8
  }
};
function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return ( 
    <div style={styles.wrapper}>
      {/* Quiz: 
        로그인/ 로그아웃 버튼을 누를 때마다 인사말이 나오고 안나오고 바뀌고,
        버튼도 로그인/로그아웃 버튼으로 바뀌도록 만들기
      */}
      {/* { isLoggedIn 
      ? <span style={styles.greeting} >환영합니다!</span>
      : null
      } */}
      { isLoggedIn 
      ?
        <> 
          <span style={styles.greeting} >환영합니다!</span>
          <button onClick={onClickLogout}>로그아웃</button>
        </>
      : <button onClick={onClickLogin}>로그인</button>
      }
      
    </div>
  );
}

export default Toolbar;