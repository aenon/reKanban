export const loadState = state => {
  try {
    const serializedState = localStorage.getItem('kanbanState')
    if (serializedState === null) {
      return state}
    return JSON.parse(serializedState)
  } catch (err) {
    return state}}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('kanbanState', serializedState)
  } catch (err) {}}
