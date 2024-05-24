import React, { useState } from "react";
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
  // Math.max(매개변수1,2,3) => 매개변수들 중에서 제일 큰 값 리턴
  // => 0보다 작으면 0 리턴

  return [count, increaseCount, decreaseCount];
}
export default useCounter;
