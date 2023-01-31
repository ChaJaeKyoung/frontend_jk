import { useState } from "react";

// 여러 가지 단위의 온도를 입력하는 컴포넌트 (자식 - 하위)
const scaleNames = {
  c: '섭씨',
  f: '화씨'
};

function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
      setTemperature(e.target.value);
    };
    return (  
      // fieldset태그: 입력 양식 폼에서 관련된 것들기리 그룹화 할 때 사용 (자동으로 박스가 그려짐)
      // legend태그: fieldset에 붙이는 설명
      <fieldset>
        <legend>온도를 입력하세요(단위: {scaleNames[props.scale]})</legend>
        <input type="text" value={temperature} onChange={handleChange}/>
      </fieldset>
    );
}

export default TemperatureInput;