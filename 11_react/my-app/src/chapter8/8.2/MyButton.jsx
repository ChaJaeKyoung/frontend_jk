function MyButton() {
  const handleDelete = (id, e) => {
    // e: 이벤트 객체(발생한 이벤트에 관련한 여러 기능이 담겨 있음)
    // e.target: 현재 발생한 이벤트의 대상(여기서는 <button>)
    console.log(id, e.target);
  };

  const handleDeleteWrong = (id, e) => {
    console.log(id + '실행됨'); 
  };

  return ( 
    <div>
      {/* 인자값이 있는 경우에는? 함수를 만들어서 전달해 줘야 된다. 
      그래야지 handleDelete가 호출이 안되고 함수 형태로 전달된다. */}
      {/* 만일 그냥 handleDelete(1)를 쓰게 된다면? 함수가 즉시 호출되어 실행됨 버튼 클릭과는 관련없이 */}
      {/* 매개변수 event로 들어오는 값은 event 객체임 */}
      <button onClick={(event) => handleDelete(1, event) }>
        삭제하기
      </button>

      <br />

      {/* 잘못된 방법, 
      단순하게 마운트 시 함수가 실행 됨 (렌더링 되자마자 함수가 실행되어) 
      버튼을 눌러도 함수가 실행이 안 됨 */}
      <button onClick={handleDeleteWrong(1)}>
        삭제하기(잘못된 방법)
      </button>
    </div>
  );
}

export default MyButton;