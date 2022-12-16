// querySelector('CSS 선택자')
// 실무에서 querySelectorAll 과 querySelector을 많이 쓴다 ->css요소를 선택할 수 있기 때문에
// HTML에서 해당 요소를 검색하여 찾은 첫 번째 요소 하나만 반환
// 요소를 찾지 못하면 null 반환
// querySelector() -> 함수명뒤에()괄호까지 같이 씀-> '메소드' 사용
const boxEl = document.querySelector('.box');
console.log(boxEl);

// 요소에 EventListener 등록하기
// 이벤트: 마우스(click), 스크롤(scroll), 키보드(keydown) 등
// addEventListener() 메소드: 해당 요소에 지정한 이벤트(Event)가 발생하는지 듣고(Listen) 있다가 실제 이벤트가 발생하면 연결된 함수(콜백)를 실행
//                      이벤트, 실행함수
boxEl.addEventListener('click', function() {
  console.log('Click!!');
});

// classList객체 : 클레스 정보를 가지고 있는 객체 
// classList 속성: 요소의 HTML Class 속성에 대한 제어 명령이 포함
//               add라는 메소드
boxEl.classList.add('active'); //boxEl요소에 active라는 클래스 추가

let hasActive = boxEl.classList.contains('active'); //요소에 active라는 클래스 속성의 값이 있는지 확인 -> 있으면 true / 없으면 false 결과 값을 return -> 따라서 결과값을 저장할 수 있는 변수를 가지고 있어야 함. let hasActive 변수 선언

console.log(hasActive); // active 클래스를 가지고 있기에 true 출력

boxEl.classList.remove('active'); //boxEl요소에 active라는 클래스 속성 제거
hasActive = boxEl.classList.contains('active'); // 변한값을 hasActive에 저장


console.log(boxEl.classList.contains('active'));
console.log(hasActive); // active 클래스가 삭제되어 false출력
