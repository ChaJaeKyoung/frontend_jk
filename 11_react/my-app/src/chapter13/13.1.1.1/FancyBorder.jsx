import "./FancyBorder.css";

function FancyBorder(props) {
  return (    
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {/* 공통 컴포넌트 쓰는데, 이 중에서 요소들이 조금씩 뭐가 달라질지 모를 때 children속성을 사용할 수 있다. */}
      {props.children}
    </div>
  );
}

export default FancyBorder;