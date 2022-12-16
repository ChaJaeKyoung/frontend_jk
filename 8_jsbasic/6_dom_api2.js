// HTML에서 해당 요소를 검색하여 찾은 요소들을 모두 반환
const boxEls = document.querySelectorAll('.box');

console.log(boxEls); 
// 요소들의 리스트가 반환됨 => 앞에서 사용한 속성들을 바로 쓸 수가 없음
// 왜냐하면  boxEls는 배열이기 때문에!!!!! 우리가 클래스를 붙일 것은 요소임!
// 클래스를 붙이기 위해서는 배열에서 요소를 뽑아야한다. 
// 따라서 배열에서 뽑아와서 쓰는 메소드는?!! -> forEach 메소드 사용

// forEach 메소드 사용
// 인수(인자)로 반복 요소를 처리하는 함수 추가 가능! => 콜백함수
// 반복으로 가져온 요소와 요소의 순서(매개변수의 순서가 중요, 이름은 자유)
//          클래스명 찾는 변수, 변수의 순서 (변수자리에서 요소는 필수, 인덱스는 선택)
//                      돔요소 , 순서 
boxEls.forEach(function(boxEl, index) { // 매개변수 안에 있는 index를 java에서는 따로 선언하고 사용해야 한다. ex) let index해야된다, but자바스크립트에서는 const나 let을 매개변수 자리에 넣어주면 에러임
  console.log(boxEl, index);

  // boxEl.classList.add('order' + index);
  boxEl.classList.add(`order-${index + 1}`); //백틱으로 더 간편하게 클래스명에 숫자 추가
});

// Getter, 값을 얻는 용도 / Setter, 값을 지정하는 용도
// 요소의 내용 확인 및 수정

const boxEl = document.querySelector('.box');

//           돔요소.메소드
console.log(boxEl.textContent); //요소의 내용 출력 
// textContent =''; 요소의 콘텐츠 변환-> 내용변경
boxEl.textContent = 'CHANGE!!';
console.log(boxEl.textContent);


// 메소드 체이닝
// 여러 메소드 들을 .으로 찍어 연결




