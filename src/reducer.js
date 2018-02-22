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
    "another card"
  ],
  George: [
    "card here",
    "another card"
  ]
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const columnName = action.columnName
      const cardContent = action.cardContent
      return {
        ...state,
        columnName: [
          ...state.columnName, cardContent
        ]
      }
    default:
      return state
  }
}

export default reducer
