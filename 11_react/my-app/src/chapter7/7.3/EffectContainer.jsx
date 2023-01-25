import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer(params) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => { setIsVisible(true)}}>나타나라</button>
      <button onClick={() => { setIsVisible(false)}}>사라져라</button>
      {/* 조건부 렌더링 */}
      {/* isVisible이 true이면 EffectSummary를 반환하겠다 */}
      {/* isVisible이 false이면 EffectSummary를 언마운트 하겠다 */}
      {isVisible && <EffectSummary />}
    </div>
  );
}

export default EffectContainer;