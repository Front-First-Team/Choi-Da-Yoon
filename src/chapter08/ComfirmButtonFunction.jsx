import React, { useState } from "react";
// 함수 컴포넌트
// function ConfirmButton(props) {
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const handleConfirm = () => {
//     setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
//   };

//   return (
//     <button onclick={handleConfirm} disabled={isConfirmed}>
//       {isConfirmed ? "확인됨" : "확인하기"}
//     </button>
//   );
// }
// export default ConfirmButton;
export function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
