import React, { Component } from 'react';
import './App.css';
import { variation } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (e) => {
    this.props.store.dispatch(variation(5))
    // 상태값을 수정할 때 사용하는 메서드
    // 인수로 action이 전달된다.
  }

  render() {
    let centerStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect:'none',
      userSelect: 'none',
      cursor: 'pointer'
    };

    return (
      <div
        onClick={this.handleOnClick}
        style={centerStyle}
      >
        <h1>{this.props.store.getState().value}</h1>
      </div>
    ) // 현재 스토어에 있는 데이터를 표시한다.

  }
}

export default App;
