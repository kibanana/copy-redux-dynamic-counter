import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ValueBinding, DiffBinding } from '../../actions';

class UseRedux extends Component {
  handleChangeDiff = (e) => {
    this.props.DiffBinding(e.target.value);
  }
  handleClickIncrease = (e) => {
    const { value, diff } = this.props;
    this.props.ValueBinding(Number(value) + Number(diff));
  }
  handleClickDecrease = (e) => {
    const { value, diff } = this.props;
    this.props.ValueBinding(Number(value) - Number(diff));
  }

  render() {
    const { value, diff } = this.props;
    return (
      <div>
        <div>
          <h1>🥴 {value} 🥴</h1>
          <br />
          <div>
            <input type="number" name="diff" value={diff} onChange={this.handleChangeDiff}></input>
            <button onClick={this.handleClickIncrease}>+</button>
            <button onClick={this.handleClickDecrease}>-</button>
          </div>
          <br />
          <NavLink to="/">Use self</NavLink>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  value: state.valueStore.value, // this.props.value === this.state.valueStore.value
  diff: state.diffStore.diff, // this.props.diff === this.state.diffStore.value
});

const mapDispatch = (dispatch) => ({
  ValueBinding: value => dispatch(ValueBinding(value)),
  DiffBinding: diff => dispatch(DiffBinding(diff)),
});

export default connect(mapState, mapDispatch)(UseRedux);
