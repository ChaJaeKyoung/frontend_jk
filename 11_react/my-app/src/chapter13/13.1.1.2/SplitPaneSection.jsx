import './SplitPaneSection.css'

function Contacts() {
  return <div className="Contacts"/>;
}
function Chat() {
  return <div className="Chat"/>;
}

// 화면을 왼쪽과 오른쪽으로 분할해서 보여주는 컴포넌트
function SplitPane(props) {
  
  return (  
    <div className="SplitPane">
      {console.log(props)}
      {/* {console.log(props.children.props.children[0].type)} */}
      <div className="SplitPane-left">
        {/* left,right를 안 쓸 경우 */}
        {/* 아래처럼 쓰지 않는다! */}
        {/* {props.children.props.children[0]} */}
        {props.left}
      </div>
      <div className="SplitPane-right">
        {/* {props.children.props.children[1]} */}
        {props.right}
      </div>
    </div>
  );
}

// 리액트는 props.children을 통해 하위 자식 엘리먼트를 하나로 모아서 제공
// children 하나에 다 담아서 쓰고 싶지 않다면?
// 별도로 props 정의해서 각각 원하는 컴포넌트(엘리먼트)를 넣어주면 됨 
function SplitPaneSection() {
  return (  
    // <SplitPane>
    //   <>
    //     <Contacts />
    //     <Chat />
    //   </>  
    // </SplitPane>

    <SplitPane 
      left={<Contacts/>}
      right={<Chat/>}
    />
  );
}

export default SplitPaneSection;

