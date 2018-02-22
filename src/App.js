import React from 'react'
import store from './store'
import {addCard} from './actions'


// import { increaseValue, resetValue } from './actions'
//
// const Counter = ({
//   value, onIncrease, onDecrease, onReset, onDouble, increaseAsync}) => (
//   <div className="col-lg-12">
//     <p>React Redux Counter App</p>
//     <h1>{value}</h1>
//     <button className="btn btn-primary" onClick={onDecrease}>-</button>
//     <button className="btn btn-primary" onClick={onIncrease}>+</button>
//     <button className="btn btn-warning" onClick={increaseAsync}>ASYNC +</button>
//     <button className="btn btn-success" onClick={() => onDouble(value)}>DOUBLE</button>
//     <button className="btn btn-danger" onClick={onReset}>RESET</button>
//   </div>)
//
// const mapStateToProps = state => ({
//   value: state.value})
//
// const mapDispatchToProps = dispatch => ({
//   onIncrease: () => dispatch(increaseValue(1)),
//   onDecrease: () => dispatch(increaseValue(-1)),
//   increaseAsync: () => setTimeout(() => dispatch(increaseValue(1)), 1000),
//   onDouble: value => dispatch(increaseValue(value)),
//   onReset: () => dispatch(resetValue())})
//
// const CounterContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

const Card = props => {
  const {content} = props
  return (
    <div className="card">
      {content}
    </div>
  )
}
// const column

// const columnStyle = {
//   Winnie: {
//     titleColor: "8E6E95"
//   }
// }

const onAddNote = columnName => {
  const message = "Enter your card content "
  const cardContent = window.prompt(message)
  store.dispatch(addCard(columnName, cardContent))
}

const Column = props => {
  const {name} = props
  const state = store.getState()
  const cards = state[name]
  // const titleColor = columnStyle.name.titleColor
  return (
    <div className="col-sm">
      <div className="titleBox" id={name}><h1>{name}</h1></div>
      {cards.map(card => (
        <Card content={card} />
      ))}
      <button
        className="btn btn-primary"
        onClick={() => onAddNote(name)}>Add a card</button>
    </div>
  )
}

const Kanban = () => (
  <div className="row">
    <Column name="Winnie"/>
    <Column name="Bob"/>
    <Column name="Thomas"/>
    <Column name="George"/>
  </div>
)


const App = state => (
  <div className="App">
    <Kanban />
  </div>)

export default App
