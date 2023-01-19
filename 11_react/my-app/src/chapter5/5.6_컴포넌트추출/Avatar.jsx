function Avatar(props) {
  console.log(props);
  return (
    // 컴포넌트로 추출했으므로 Comment에서만 쓰이는게 아니기에 author에서 user로 바꿔줌
    // 조금더 일반적인 단어인 user로 변경하여 다른곳에서도 사용하도록 변경
    // props.author.avatarUrl -> props.user.avatarUrl로 변경
    
    <img className ="avatar" 
      src={props.userInfo.avatarUrl} 
      alt={props.userInfo.user} 
    />
    
  );
}

export default Avatar;