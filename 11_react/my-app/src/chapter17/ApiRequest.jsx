import React, { useState } from 'react';
import axios from "axios";


function ApiRequest(props) {
  // 서버에서 가져온 데이터를 담을 state
  const [data, setData] = useState(null);

  // // 1. Promise/then
  // const handleRequestById = (id) => {
  //   // JSON placeholder에서 제공하는 테스트용 API 호출
  //   // photos 5000개, 따라서 id값도 1부터 5000까지로 추정
  //   axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.data); // axios 라이브러리가 JSON 스트링을 자동으로 JS의 object와 array형식으로 변환해서 들여와줌
  //     }) 
  //     .catch((error) => { // 요청 실패한 경우 에러 핸들링
  //       console.error(error);
  //     }); 
      
    // (참조)
    // axios.post(`https://jsonplaceholder.typicode.com/photos/${id}`, { id: id }) //post는 이런식으로 뒤에 객체로 부가적인 정보도 보내기 가능!

    // 2. async/await 위와 완전 동일한 코드 -> 깔끔하게 리펙토링
    // 비동기 함수에서만 await는 사용 가능 , 아래처럼 무명함수에 async를 붙여주면 됨
    const handleRequestById = async (id) => {
      try{
        // JSON placeholder 에서 제공하는 테스트용 API 호출
        const response =await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        console.log(response);
        setData(response.data); // axios 라이브러리가 JSON 스트링을 자동으로 JS의 object와 array형식으로 변환해서 들여와줌
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div>
      <div>
        {/* 인자값이 있는 경우에는 항상 함수를 콜백형태로 불러와야 한다. */}
        <button type="button" onClick={() => {handleRequestById(100); }}>불러오기</button>
      </div>
      {data &&
        <>  
        {/* stringify(JSONdata,함수값: 데이터를 가공해서 보여주고 싶을 때 사용, 없으면 null로 자리를 지켜줘야함. 참고) 정답은 아니지만 대충 이런 느낌으로 콜백함수 사용 (key,value) => {return value +'수정'}, line-height같은 느낌 2) */}
          <textarea cols={70} rows={8} value={JSON.stringify(data, null, 2)} readOnly />
          <p>{data.title}</p>
          <img src={data.thumbnailUrl} alt="thumbnail" />
        </>
      }
    </div>
  );
}

export default ApiRequest;

// API 호출을 위한 필기
// 자바스크립트를 이용하여 서버 쪽 데이터를 필요로 할 때에는
// Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신
// Ajax: 비동기 자바스크립트와 XML의 줄임말

// Ajax 쓰는 다양한 방법
// 1. XML Http Request(XHR) 객체 - 잘 안씀 why? es6차에서 fetch()라는 함수가 생겼기 때문에
// 2. fetch() 함수 - ES6차의 HTTP 요청 함수 - 간단하게 HTTP 요청 가능 
// 3. axios - 외부 라이브러리(제일 많이 씀)

// Axios 라이브러리 설치
// npm istall axios
// 기본 사용법

// 프로미스가 반환됨 (promise then 문법 확인)
// axios.post('url').then(); - post요청: 회원가입 할 때 사용 보내는 데이터를 request의 body에 실어서 보냄 (보안유지) , 파일보내기 등 데이터 조회말고 다 쓰임
// axios.get('url').then(); - get요청: 데이터 조회용: 무언가를 검색할 때 사용, url 에 담아서 보냄, 그러나 보안이 안됨, 또한 용량제한도 있음