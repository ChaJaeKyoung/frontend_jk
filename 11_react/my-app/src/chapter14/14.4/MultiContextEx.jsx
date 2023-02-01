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