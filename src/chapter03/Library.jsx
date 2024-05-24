import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="달리기를 말할 떄" numOfPage={200}></Book>
      <Book name="처음만난 리액트" numOfPage={300}></Book>
    </div>
  );
}

export default Library;
