// 하위 엘리먼트를 감싸서 카드 형태로 보여주는 컴포넌트
function Card( title, backgroundColor, Children ) {
  // porps 받아 올 때부터 구조분해로 받아오는 방법! 위와 같이 변수를 바로 넣어준다
  // const { title, backgroundColor, Children } = props; 
  return ( 
    <div
      style={{
        margin: 8,
        padding: 8,
        // camelCase로 넣어줘야 함
        borderRadius: 8,
        boxShadow: "0px 0px 4px gray",
        backgroundColor: backgroundColor || "lightgray" // Short-circuit 사용하면 기본값을 줄 수 있다.
        // backgroundColor에 falsy값이 들어오면 기본값으로 "lightgray"를 사용
      }}
    >
      {title && 
        <h1 style={{ borderBottom: "1px solid gray" }}>{title}</h1>
      }
      {children}
    </div>
  );
}

export default Card;