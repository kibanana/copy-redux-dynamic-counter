import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <h1>🥴{ this.props.value }🥴</h1>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    value: state.value // Counter의 this.props.value === this.state.value
  };
}

export default connect(mapStateToProps)(Counter); // 특정 컴포넌트 클래스의 props를 store의 데이터에 연결하는 또 다른 함수를 리턴한다. 그리고 이 함수에 Counter를 연결한다. 결과적으로 새로운 컴포넌트가 return된다.
