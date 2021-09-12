import React from "react";
import { connect } from 'react-redux';

const ThirdPage = props => (
  <div className="container">
    <h1>Hello from ReactJS</h1>
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.value}</span>
      <button onClick={props.increment}>+</button>
    </div>
  </div>
);

const mapStateToProps = state => ({ value: state });

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INC' }),
  decrement: () => dispatch({ type: 'DEC' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdPage);
