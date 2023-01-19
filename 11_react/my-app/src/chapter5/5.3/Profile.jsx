function Profile(props) {
  console.log(props);
  return (
    <div>
      <h1>사용자 프로필(조회수: {props.viewCount})</h1>
      <h2>이름: {props.name}</h2>
      <h2>자기소개: {props.introduction}</h2>
    </div>
  );
}

// 구조분해 할당으로 넘어오는 경우
// function Profile({viewCount, name, introduction}) {
//   return (
//     <div>
//       <h1>사용자 프로필(조회수: {viewCount})</h1>
//       <h2>이름: {name}</h2>
//       <h2>자기소개: {introduction}</h2>
//     </div>
//   );
// }

export default Profile 