// div.search 요소 선택시 강제 포커스 및 제어 -> 전체 검색 영역으로 지정해주기 위해서 (돋보기를 누르면 input이 포커스가 되지 않는 문제 해결)   
// 전체 html 내에서 검색창 요소(.search) 찾기
const searchEl = document.querySelector('.search');
// .search안에 있는 input을 찾아라!
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function() {
  // JS에 포커스라는 메서드가 있다. focus도 이벤트의 하나 
  searchInputEl.focus();
});

// search 전체 요소에 포커스 되면 실행 <----> focus의 반대는 blur
// 포커스를 줄 수 있는 요소는 "대화형 요소" 한정이므로 결국 input에 변화를 같이 줘야 한다!
searchInputEl.addEventListener('focus', function () {
  const state = searchEl.classList.add('focused');
  // input에 placeholder 속성을 추가 해줄 것 -> setAttribute ('추가하고싶은속성', '속성값');
  searchInputEl.setAttribute('placeholder', '통합검색'); 
}); 

// input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  const state = searchEl.classList.remove('focused');
  // input에 placeholder 속성을 추가 해줄 것 -> setAttribute ('추가하고싶은속성', '속성값');
  searchInputEl.setAttribute('placeholder', ''); 
});


// 스크롤 시 전역 배지(고정 배너) 숨기기
// 페이지 스크롤에 다른 배지 요소 제어
const badgeEl = document.querySelector('header .badges');

// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (this.window.scrollY > 500) {
    // style속성을 조작할 때 요소 뒤에 style을 줌
    // badgeEl.style.display = 'none'; 

    // gsap cdn 라이브러리 도입
    // gsap.to(요소, 시간, 속성) 메소드: CSS속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0 // x축 0px 지점으로 이동
    });
  } else {
    // 다시 상단으로 올라왔을 때 뱃지를 보이게 해야 됨
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    }); 
    // 상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100 // x축 0px 지점으로 이동
    });
  }
});






// 순차적으로 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 요소들을 하나씩 반복해서 처리!
// foreach (function (반복되는 요소, index) {}); 
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 0.7s, 1.4s, 2.1s, 2.8s
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// 최상단으로 이동하는 버튼
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
          // 적용대상, 지속시간, { 키:벨류 }객체데이터
  gsap.to(window, 0.6, {
    scrollTo: 0, // 페이지의 0px 지점(최상단)으로 이동
    
  });
});



// 공지사항 수직 슬라이드 기능 작성
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(선택자, 옵션 객체)
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(다른 옵션들은 API 페이지 참고)

new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical', // 수직 슬라이드
  loop: true, // 반복 재생 여부
  autoplay: true // 자동 재생 여부
});

// 프로모션 섹션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드 (기본값) 빼도 적용
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 5000 // 5초마다 슬라이드 바뀜
  }, // 자동 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 수 있는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소
    clickable: true, // 사용자의 번호 제어 여부
  },
  navigation: { // 이전/다음 슬라이드 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

// 프로모션 토글 기능
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 토글 아이콘 제어
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// 토글 버튼을 클릭 했을 때 실행
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload';
  } else {
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download';
  }
});

// 유튜브 섹션 위에 부유 요소 애니메이션 처리
gsap.to('.floating1', 1.5, {
  // 0.7s, 1.4s, 2.1s, 2.8s
  delay: 1, // 얼마나 늦게 애니매이션을 시작할 것인지 지연 시간
  y: 15, // 수직적으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복할지 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 것을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
gsap.to('.floating2', 1.3, {
  // 0.7s, 1.4s, 2.1s, 2.8s
  delay: 1, // 얼마나 늦게 애니매이션을 시작할 것인지 지연 시간
  y: 20, // 수직적으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복할지 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 것을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
gsap.to('.floating3', 1.7, {
  // 0.7s, 1.4s, 2.1s, 2.8s
  delay: 1, // 얼마나 늦게 애니매이션을 시작할 것인지 지연 시간
  y: 30, // 수직적으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복할지 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 것을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});

// ScrollMagic 사용 
// 그 외 scrollreveal 등의 라이브러리가 있다
const spyEls = document.querySelectorAll('section.scroll-spy'); //여러개 선택 배열로 온다
spyEls.forEach(function(spyEl) {
  //메소드 체이닝
  new ScrollMagic.Scene({ // 감시 할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 감시 할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시 (0~1사이 지정)
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당[이 라이브러리를 쓰려면 꼭 넣어줘야 한다.]
}); // 다시 CSS로 가서 효과를 넣어줘야 한다.


// AWARDS 섹션 수평 슬라이드 기능
new Swiper('.awards .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드 (기본값) 빼도 적용
  loop: true, // 반복 재생 여부
  autoplay: true, // 자동 재생 여부  true 기본값은 3000 ->3초
  slidesPerView: 5, // 한 번에 보여줄 수 있는 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 이전/다음 슬라이드 버튼 사용
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});

// 현재 연도 표시
// 날짜 정보를 가진 JS Data 객체를 활용
// JS 기본 제공 객체 (여러 데이터들의 묶음)
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022

