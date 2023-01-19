import Comment from "./Comment";
// 같은 경로에 있는 코맨트를 import 명칭 조심!


// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name: '김재현',
    comment: '안녕하세요. 고니입니다.',
    date: '2023-01-19'
  },
  {
    name: '유재석',
    comment: '리액트 재미있어요~!',
    date: '2023-01-19'
  },
  {
    name: '이이경',
    comment: '저도 리액트 배워보고 싶어요!!',
    date: '2023-01-19'
  },
  {
    name: '미주',
    comment: '리액트 어려웡',
    date: '2023-01-19'
  }
];



// 댓글들을 포함하는 CommnetList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 */}
      {/* 
        map()은 배열 안에 있는 가격 요소를 변환하여 새로운 배열을 만듦. 
        앞으로 리액트에서 동적인 배열을 렌더링해야 할 때는 map()함수를 사용하여 
        일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨.
      */}
      {/* 배열의 key는 index */}
      {/* 배열을 렌더링 할때에는 꼭 새로운 배열을 만드는걸로 해야한다. -> 리액트는 변화한것만 캣치 하는데 배열같은거는 주소를 참조하여 변화가 없는걸로 인식됨. for안됨 */}
      {comments.map((comment, index) => {
        return (
          // 넘겨줄때 key 를 prop으로 넘겨줘야 한다.
          <Comment key = {index}
            name={comment.name}
            comment={comment.comment}  
            date={comment.date}
          />
        );
      })}
      {/* map() 함수 결과 */}
      {/* {[<Comment name={'김재현'} comment={'안녕하세요. 고니입니다.'}/>,
        <Comment name={'유재석'} comment={'리액트 재미있어요~!'}/>,
        <Comment name={'이이경'} comment={'저도 리액트 배워보고 싶어요!!'}/>,
      ]} */}

      {/* 하드코딩 area */}
      {/* <Comment 
        name="차재경"
        comment="첫번째 댓글 입니다."
      />
      <Comment 
        name="이회은"
        comment="두번째 댓글 입니다."
      />
      <Comment 
        name="김석진"
        comment="BTS 진 입니다."
      /> */}
    </div>
  );
}

export default CommentList;