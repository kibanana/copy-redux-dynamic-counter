import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: '1',
    };
  }

  onChangeDiff = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    this.setState({ diff: e.target.value });
    if (e.target.value === '') {
      this.setState({ diff: '0' });
    }
    this.props.onUpdateDiff(Number(e.target.value));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.diff} onChange={this.onChangeDiff} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateDiff: (value) => dispatch(setDiff(value)),
  };
};

export default connect(null, mapDispatchToProps)(Option); // 값이 수정될 때마다 새로운 값 dispatch
