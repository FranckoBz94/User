import { ActionTypes } from "../contants/action-types"

const initialState = {
  players: [],
}

export const playersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PLAYERS:
      return { ...state, players: payload }
    case ActionTypes.REMOVE_SELECTED_PLAYER:
      return { ...state }
    case ActionTypes.ADD_PLAYER:
      return { ...state }
    case ActionTypes.UPDATE_PLAYER:
      return { ...state, players: payload }
    default:
      return state
  }
}
