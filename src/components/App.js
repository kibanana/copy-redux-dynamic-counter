import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';

class App extends Component {
  render() {
    return (
      <div
        style={{ textAlign: 'center' }}
      >
        <Counter />
        <Option />
        <Buttons />
      </div>
    ) // 현재 스토어에 있는 데이터를 표시한다.

  }
}

export default App;
