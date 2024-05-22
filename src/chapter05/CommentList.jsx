import React from "react";
import Comment from "./Comment";
function CommentList() {
  return (
    <div>
      <Comment name={"유재석"} comment={"오늘은 수요일이에요"}></Comment>
      <Comment name={"정형돈"} comment={"오늘은 목요일이에요"}></Comment>
    </div>
  );
}
export default CommentList;
