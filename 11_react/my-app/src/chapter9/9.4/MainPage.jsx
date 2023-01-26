import { useState } from "react";

// null을 리턴하면 컴포넌트는 렌더링 되지 않는다는 예제

const styles = {
  button : {
    height: 40,
    width: 200
  },
  warning: {
    background: 'red',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: 20,
    color: 'white'
  }
}

function WarningBanner(props) {
  // props.warn이 false 라면 null을 리턴하기 때문에 컴포넌트는 렌더링 되지 않음
  if (!props.warn) {
    console.log(!props.warn);
    return null;
  }
  console.log(!props.warn);
  return (
    <div style={styles.warning}>Warning!</div>
  );
  
}
function MainPage() {
  const [showWarning, setShowWarning] = useState(false);
  const handleToggleClick = () => {
    setShowWarning(showWarning => !showWarning);
  };

  return (  
    <div>
      <WarningBanner warn={showWarning}/>
      {/* click이벤트가 발생했을 때 이벤트를 발생시켜라 */}
      <button style={styles.button} onClick={handleToggleClick}>
        { showWarning ? '감추기' : '보이기' }
      </button>
    </div>
  );
}

export default MainPage;