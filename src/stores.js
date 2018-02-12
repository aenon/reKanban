import { createStore } from 'redux'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'

// The default state of the app
const defaultState = {value: 0}

const state = loadState(defaultState)
const store = createStore(reducer, state)
store.subscribe(() => saveState(store.getState()))

export default store
