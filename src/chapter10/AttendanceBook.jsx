import React from "react";

const students = [
  { id: "1", name: "Inje" },
  { id: "2", name: "Steve" },
  { id: "3", name: "Bill" },
];

function AttendanceBook() {
  //   return (
  //     <ul>
  // 이렇게 할 경우 Warning: Each child in a list should have a unique "key" prop. 라는 워닝이 등장한다.
  //       {students.map((student) => {
  //         return <li>{student.name}</li>;
  //       })}
  //     </ul>
  //   );
  return (
    <ul>
      {/* {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })} */}
      {students.map((student, index) => {
        return <li key={index}>{student.name}</li>;
      })}
    </ul>
  );
}


// 스틸북스 / 회현
// [도시에서 창의적으로 생산활동을 이어가는 이들이 영감을 얻고 성장할 수 있도록 돕는 서점]
// 

// 일루지앵 / 명동
// HAPPINESS CURATION STORE
export default AttendanceBook;
