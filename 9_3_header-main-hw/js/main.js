
// NAV 영역 호버 효과
const gnb = document.querySelector('.gnb');
const navBg = document.querySelector('.nav-bg');
const subMenuEls = document.querySelectorAll('.nav li ul' )

console.log(subMenuEls);


gnb.addEventListener('mouseover',function() {
  navBg.classList.add('on');  
  subMenuEls.forEach(function (subMenuEl) {   
  // if (navBg.classList.contains('on')) {
    subMenuEl.classList.add('on');
  // } else {
  //   subMenuEl.classList.remove('on');
  // }
  console.log(subMenuEl);
  });
});

gnb.addEventListener('mouseout',function() {
  navBg.classList.remove('on');  
  subMenuEls.forEach(function (subMenuEl) {   
    subMenuEl.classList.remove('on');
  });
});

// Search 영역

// const searchEl = document.querySelector('.search');
const searchSpanEl = document.querySelector('.search .material-symbols-outlined');
const searchInputEl = document.querySelector('.search input');


searchSpanEl.addEventListener('click',function () {
  searchInputEl.focus();

  // 1.search가 눌려져서 input이 활성화 되면 span요소를 못누르게 막고싶음
  // 2.누르는걸 방지를 못한다면 오른쪽으로 나가서 사라지게 만들자
  // 이것저것 안되면 물리적으로 막는 수 밖에 없다.

  // 3. 선생님 아이디어 
  // search를
  // span에다가만 해서
  // input요소가 focus된다면
  // span요소에 JS로 css 속성을 넣어준다 user-selector: none
  // 이라는 속성이 있다 
  searchSpanEl.style.userSelect="none";
  // 이것도 먹지 않는다.
});

//TODO 물리적 방식으로 교체,,,










