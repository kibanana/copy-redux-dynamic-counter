import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainPage extends Component {
  state = {
    value: 0,
    diff: 1,
  };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleClickIncrease = (e) => {
    const { value, diff } = this.state;
    this.setState({ value: Number(value) + Number(diff) });
  }
  handleClickDecrease = (e) => {
    const { value, diff } = this.state;
    this.setState({ value: Number(value) - Number(diff) });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.value}</h1>
          <br />
          <div>
            <input type="number" name="diff" value={this.state.diff} onChange={this.handleChangeInput} />
            <button onClick={this.handleClickIncrease}>+</button>
            <button onClick={this.handleClickDecrease}>-</button>
          </div>
          <br />
          <NavLink to="/use-redux">Use Redux</NavLink>
        </div>
      </div>
    );
  }
}

export default MainPage;
