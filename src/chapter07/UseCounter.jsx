import React, { useState } from "react";

// useCounter 훅 : 초기 count값을 파라미터로 받아서 count라는 이름의 값을 제공하고 count증가 및 감소를 편리하게 하는 것. 그래서 다른 곳에서 useCounter 훅을 사용하면 어디서든 카운트 기능을 쉽게 쓸 수 있다.
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
  // Math.max(매개변수1,2,3) => 매개변수들 중에서 제일 큰 값 리턴
  // => 0보다 작으면 0 리턴

  return [count, increaseCount, decreaseCount];
}
export default useCounter;
