import React from 'react'
import { connect } from 'react-redux'

import { increaseValue, resetValue } from './actions'

const Counter = ({
  value, onIncrease, onDecrease, onReset, onDouble, increaseAsync}) => (
  <div className="col-lg-12">
    <p>React Redux Counter App</p>
    <h1>{value}</h1>
    <button className="btn btn-primary" onClick={onDecrease}>-</button>
    <button className="btn btn-primary" onClick={onIncrease}>+</button>
    <button className="btn btn-warning" onClick={increaseAsync}>ASYNC +</button>
    <button className="btn btn-success" onClick={() => onDouble(value)}>DOUBLE</button>
    <button className="btn btn-danger" onClick={onReset}>RESET</button>
  </div>)

const mapStateToProps = state => ({
  value: state.value})

const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increaseValue(1)),
  onDecrease: () => dispatch(increaseValue(-1)),
  increaseAsync: () => setTimeout(() => dispatch(increaseValue(1)), 1000),
  onDouble: value => dispatch(increaseValue(value)),
  onReset: () => dispatch(resetValue())})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const App = state => (
  <div className="app">
    <CounterContainer />
  </div>)

export default App
