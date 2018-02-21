import { createStore } from 'redux'
import reducer from './reducer'
import { loadState, saveState } from './localStorage'

// The default state of the app
const defaultState = {}

const initialState = loadState(defaultState)
const store = createStore(reducer, initialState)
store.subscribe(() => saveState(store.getState()))

export default store
