import Layout from "../../chapter5/5.3/Layout";

// 기본값이 light인 ThemeContext
const ThemeContext = React.createContext('light');

// 로그인한 유저 정보를 담는 UserContext
const UserContext = React.createContext ({
  name: 'Guest'
});

function App(props) {
  const { signedInUser, theme } = props;
  
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar/>
      <Content />
    </div>
  );
}

function Content() {
  return (
    // Provider로 방송해 준 값을 Consumer가 받는다!
    // 받을 땐 콜백함수로 받는다
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme}/>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
  
}