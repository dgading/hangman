const gameManager = (state = [], action) => {
  switch (action.type) {
    case 'START_GAME':
      return [
        ...state,
        {gameActive: true}
      ]
    default:
      return state
  }
}

export default gameManager;