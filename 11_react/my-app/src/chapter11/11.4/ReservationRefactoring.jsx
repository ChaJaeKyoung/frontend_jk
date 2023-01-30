import { useState } from "react";

function ReservationRefactoring() {
  // 만약 여러 개의 state가 서로 관련이 있는 데이터라면 객체 형태로 묶어서 관리 가능
  // input에 name 속성을 설정하고 이벤트가 발생했을 때 이 값을 참조하여 객체에 접근
  const [inputs, setInputs] = useState({
    breakfast: false,
    numberOfGuests: 2,
    nameOfGuests: ''
  });
  // 아래두개를 묶어서 위로 하나로 객체로 관리함 key: value 형태로
  // const [breakfast, setBreakfast] = useState(true);
  // const [numberOfGuests, setNumberOfGuests] = useState(2);
  const { breakfast, numberOfGuests, nameOfGuests } = inputs; // 구조 분해 할당을 통해 값 추출


  // set함수도 마찬가지로 묶어서 관리함
  const handleInputChange = (e) => {
    const { type, name, checked, value } = e.target;
    const inputValue = type ===( 'checkbox' || 'radio' ) ? checked : value;
    console.log(name, inputValue);
    // radio 조건은 차차가 추가해봄

    // 중요!!
    // React 상태에서 객체를 수정해야 할 때에는
    // inputs[breakfast] = inputValue;
    // setINputs(inputs)
    // 이런식으로 직접 수정하면 안됨(inputs가 가리키는 객체의 내부 데이터만 바뀐 것이지, 참조값(주소)는 변하지 않기 때문에 상태변화 감지를 하지 못함)
    // 그 대신 새로운 객체를 만들어서 '새 메모리 할당 (곧 새 주소값)' 으로 새롭게 상태 변화를 만들어서 사용해야 함.
    // 이런 작업을 "불변성을 지킨다"라고 부름
    // 불변성을 지켜주어야만 React 컴포넌트에서 상태가 업데이트 됐음을 감지 할 수 있고, 재 렌더링이 진행됨
    // 결론: React에서 객체를 업데이트 할 때에는 기존 객체를 직접 수정하면 안되고
    // 새로운 객체를 만들어서 그 객체에 변화를 주고 마지막으로 set함수에 넣어주어야 함

    // 새로운 객체를 만드는 방법!!
    // const copyObj = {
    //   ...inputs
    // };
    // copyObj[name] = inputValue;
    // setInputs(copyObj);

    // 위의 문법 생략한 es6차 버전
    // setInputs({
    //   ...inputs,
    //   [name]: inputValue
    // });
    // console.log([name]);
    // 콜백함수형태
    setInputs(inputs => ({
      ...inputs, 
      [name]: inputValue
    }));
    // 위에서 사용한 문법 <es6차 수업 예제 참고>
    // 1) 2_arrow_functoin - 객체를 암시적으로 반환하기 ({}와return을 생략할 때 객체는 꼭 소괄호로 묶어줘야 함({key:value}))
    // 2) 9_spread_rest - 객체의 복사, 결합
    // 3) 10_object_literal - 객체의 속성을 동적으로 정의하기
    };
  // 아래 두 함수를 묶어서-> handleInputChange 하나의 set함수로 관리함
  // const handleBreakFastChange = (event) => {
  //   setBreakfast(event.target.checked);
  // };
  // const handleGuestsChange = (e) => {
  //   setNumberOfGuests(e.target.value);
  // };
  const handleSubmit = () => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 이름: ${nameOfGuests}`);
  }

  return (  
    <>
      <label>
        조식 여부:
        <input 
          type="checkbox" 
          // name 속성 추가
          name="breakfast"
          // checked 속성은 checkbox랑 radio 타입에 존재하고
          // boolean 타입의 값
          checked={breakfast}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
          type="number"
          // name 속성 추가
          name="numberOfGuests"
          value={numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        이름:
        <input 
          type="text"
          // name 속성 추가
          name="nameOfGuests"
          value={nameOfGuests}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default ReservationRefactoring;
