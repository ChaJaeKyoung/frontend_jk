// Youtube Iframe API 비동기로 로드
// api를 사용하지 않고 iframe 태그만 써서 영상 삽입이 가능한데 태그 속성만으로 커스텀하기에 한계가 있음
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          // height: '360',
          // width: '640',
          videoId: 'csPjJQ7c-yE', // 최초 재생할 유튜브 영상 ID
          playerVars: { // 자세한 옵션은 플레이어 매개변수 메뉴 확인
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무 (아래 플레이리스트 옵션 필수 영상이 하나일 지라도 반복재생 하고 싶으면 playlist를 꼭 채워줘야한다.)
            playlist: ['csPjJQ7c-yE','M7lc1UVf-VE'], // 반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange

            // 영상 준비되었을 때 발생하는 이벤트
            onReady: function (event) {
              event.target.mute(); // 음소거!
            }
          }
        });
      }
