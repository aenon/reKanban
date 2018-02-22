import { createStore } from 'redux'
import reducer from './reducer'
import { loadState, saveState } from './localStorage'

// The default state of the app
const defaultState = {
  Winnie: [
    "card here",
    "another card"
  ],
  Bob: [
    "card here",
    "another card"
  ],
  Thomas: [
    "card here",
    "yet another card"
  ],
  George: [
    "card here",
    "another card"
  ]
}

const initialState = loadState(defaultState)
const store = createStore(reducer, initialState)
store.subscribe(() => saveState(store.getState()))

export default store
