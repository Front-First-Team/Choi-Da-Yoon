import React from "react";

// 클래스 컴포넌트
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    // 확인여부를 저장하는 state
    this.state = {
      isConfirmed: false,
    };

    // bind를 사용해서 이벤트 핸들러 사용을 하거나 하위 이벤트핸들러를 애로우함수로 변경
    // this.handleConfirm = this.handleConfirm.bind(this);
  }

  // event 함수 -> Confirm을 하면 바뀐다는것을 이름에서 암시한다.
  // 1. bind를 사용하는 경우
  // handleConfirm() {
  //   // state를 update하기 위한 setState()함수
  //   this.setState((prevState) => ({
  //     isConfirmed: !prevState.isConfirmed,
  //   }));
  // }
  // 2. bind를 사용하지 않는 경우
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  render() {
    return (
      // onClick에 사용하는 이벤트핸들러
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}
export default ConfirmButton;
