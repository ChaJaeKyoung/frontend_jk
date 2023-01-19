import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
// 원본 
    // <div className="comment">
    //   <div className="user-info">
    //     <img className="avatar"
    //       src={props.author.avatarUrl}
    //       alt={props.author.name}
    //     />
    //     <div className="user-info-name">
    //       {props.author.name}
    //     </div>
    //   </div>
    //   <div className="comment-text">
    //     {props.text}
    //   </div>
    //   <div className="comment-date">
    //     {props.date}
    //   </div>
    // </div>
// Comment.jsx로부터 컴포넌트 2개 추출


// 쌤의 원본과 비교
function Comment(props) {
  console.log(props);
  return (
    <div className="comment">
      {/* index.js에서 객체로 보낸 데이터를 UserInfo 컴포넌트에 객체로 보내고싶음 */}
      {/* key = value 로 넘어감 */}
      <UserInfo userInfo = {props} />
        {/* {props.author} */}
      <div className="cmment-text">
        {props.text}
      </div>
      <div className="cmment-date">
        {props.date}
      </div>
    </div>
  );
}

export default Comment;