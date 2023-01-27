
// Quiz: 배열의 각 요소를 렌더링하고 배열 렌더링 시 key 값 추가해보기,
// key값은 id속성을 추가
function AttendanceBook(props) {
  // const listItem = numbers.map((number) => {
  //   return <li key={id}>{number}</li>
  // });
  console.log(props);
  return (  
    <ul>
      {
        props.students.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })
      }
    </ul>
  );
}

export default AttendanceBook;