function NumberList(props) {
  const { numbers } = props;
  
  // 배열을 렌더링 할 때는 map 함수를 사용한다.
  // map 함수를 사용할 때에는 key값을 꼭 줘야한다.
  // 배열의 변화가 없으면 ? 괜찮지만
  // 배열이 동적으로 움직인다면,,, 그 자리에 머무는 버그가 발생한다!
  // index는 주소값이기 때문이다.
  
  const listItem = numbers.map((number, index) => {
    return <li key={index}>{number}</li>
  });
  // map() 함수 결과
  // [
  //   <li>1</li>,
  //   <li>2</li>,
  //   <li>3</li>,
  //   <li>4</li>,
  //   <li>5</li>
  // ]

  return (  
    <ul>{listItem}</ul>
  );
}

export default NumberList;