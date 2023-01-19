// 보통은 컴포넌트명도 겹치지 않게 해준다 (button같은 공통컴포넌트 제외)

// CSS 스타일 작성(인라인 스타일로 넣어줄 객체 형태)
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};
// 사용할 이미지 경로
// https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png


function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
          style={styles.image} 
        />
      </div>
      {/* 댓글 작성자와 내용 */}
      <div style={styles.contentContainer}>
        {/* 작성자와 내용을 props를 써서 동적으로 변경하게끔 추가(key값은 name과 comment로 전달할 예정) */}
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
        <span style={{color:"gray", fontSize: 12 }}>{props.date}</span>
      </div>
    </div>
  );
}

// 구조분해할당으로 props 받아오기 from 회은님
// function Comment({name, comment, date}) {
//   return (
//     <div style={styles.wrapper}>
//       {/* 사람모양의 프로필 이미지 */}
//       <div style={styles.imageContainer}>
//         <img 
//            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
//            alt="이미지" style={styles.image}
//         />
//       </div>

//       {/* 댓글 작성자와 내용 */}
//       <div style={styles.contentContainer}>
//         {/* 작성자와 내용을 동적으로 변경될 수 있도록 props를 써서 
//             동적으로 변경되게끔!(key값은 name과 comment로 전달할 예정) */}
//         {/* <span style={styles.nameText}>이회은</span>
//         <span style={styles.commentText}>댓글입니다.</span> */}
//         <span style={styles.nameText}>{name}</span>
//         <span style={styles.commentText}>{comment}</span>
//         <span style={{ color: 'red' }}>{date}</span>
//       </div>

//     </div>
    
//   );
// }


export default Comment;