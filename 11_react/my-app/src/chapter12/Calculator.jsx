import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

// 입력한 온도에서 물의 끓는 여부를 추정하는 온도 계산기 (부모 - 상위) 
function Calculatror() {
  return (  
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
      <BoilingVerdict />
    </div>

    // 문제상황:
    // 1.
    // TemperatureInput 컴포넌트를 재사용함으로써 두 개의 입력필드를 갖게 됨
    // 그러나 둘 중 하나에 온도를 입력하더라도 다른 하나는 갱신되지 않고 각각 state로 값이 관리됨(동기화 안됨)
    
    // 2.
    // 또한 BoilingVerdict 컴포넌트로 물의 끓는 여부를 알려줄 수도 없음
    // 왜냐하면 입력된 온도 정보가 TemperatureInput 안에 숨겨져 있으므로 Calculator는 그 값을 알 수 없기 때문
  );
}

export default Calculatror;