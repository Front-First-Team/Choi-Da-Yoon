import React, { useEffect, useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name} 성별 ${gender}`);
    event.preventDefault();
  };

  //   useEffect(() => {
  //     console.log(name);
  //   });

  return (
    <form>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleChangeName}></input>
        성별 :
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit" onClick={handleSubmit}>
        제출
      </button>
    </form>
  );
}
export default SignUp;
