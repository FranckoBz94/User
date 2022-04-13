import { combineReducers } from "redux"
import {
  playersReducer,
  membersReducer,
  movimientosReducer,
} from "./playerReducer"

const reducers = combineReducers({
  allPlayers: playersReducer,
  allMembers: membersReducer,
  allMovimientos: movimientosReducer,
})

export default reducers
