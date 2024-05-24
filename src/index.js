import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Library from "./chapter03/Library";
// import Clock from "./chapter04/Clock";
// import CommentList from "./chapter05/CommentList";
import NotificationList from "./chapter06/NotificationList";

const root = ReactDOM.createRoot(document.getElementById("root"));
// chapter06
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  // document.getElementById("root")
);

//chapter05
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

///////// chapter04
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }, 1000);

//////// chapter03
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

/////////기본
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
