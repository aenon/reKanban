// actions: increaseValue, resetValue
// const increaseValue = value => ({
//   type: 'INCREMENT',
//   value})
//
// const resetValue = () => ({
//   type: 'RESET'})

const addCard = (columnName, cardContent) => ({
  type: 'ADD_CARD',
  columnName,
  cardContent
})

export {addCard}
