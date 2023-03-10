import Avatar from "./Avatar";

function UserInfo(props) {
  console.log(props);
  // 리턴문 안에로그보는방법 알려달라고 하기
  return ( 
    <div className="user-info">
      <Avatar userInfo={props.userInfo}/> 
      <div className="user-info-name">
      {props.userInfo.user}
      {/* 속성 key이름 변경하는 방법 */}
      
      </div>
    </div>  
  );
}

export default UserInfo;