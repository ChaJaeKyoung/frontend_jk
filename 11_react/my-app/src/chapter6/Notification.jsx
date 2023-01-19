import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}; // state에 아무런 데이터도 없음
  }
  // 컴포넌트가 마운트 된 이후 호출
  componentDidMount() {
    // 함수가 아니고 class로 접근했기 때문에 this로 접근해야 됨
    console.log(`${this.props.id} componentDidMount() called.`);
  }

  // 컴포넌트가 업데이트 된 이후 호출
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`)
  }

  // 컴포넌트가 언마운트 되기 전 호출
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`)
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;