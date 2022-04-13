import axios from "axios"
import { ActionTypes } from "../contants/action-types"

export const setPlayers = (players) => {
  return {
    type: ActionTypes.SET_PLAYERS,
    payload: players,
  }
}

export const setAddPlayer = () => {
  return {
    type: ActionTypes.ADD_PLAYER,
  }
}

export const setUpdatePlayer = () => {
  return {
    type: ActionTypes.UPDATE_PLAYER,
  }
}

export const setRemovePlayers = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PLAYER,
  }
}

export const fetchPlayers = (player) => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/allPlayers/" + player)
      .then((response) => {
        dispatch(setPlayers(response.data.data))
      })
      .catch((error) => console.error(error))
  }
}

export const addPlayer = (player) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/allPlayers/", player)
      .then((response) => {
        if (response.data.message === "1") {
          dispatch(setAddPlayer())
          dispatch(fetchPlayers("all"))
        }
      })
      .catch((error) => console.error(error))
  }
}

export const updatePlayer = (id, player) => {
  return function (dispatch) {
    axios
      .put("http://localhost:3001/allPlayers/" + id.idJugador, player)
      .then((response) => {
        if (response.data.message === "1") {
          dispatch(setUpdatePlayer())
          dispatch(fetchPlayers("all"))
        }
      })
      .catch((error) => console.error(error))
  }
}

export const removePlayer = (id) => {
  return function (dispatch) {
    axios
      .delete("http://localhost:3001/allPlayers/" + id)
      .then((response) => {
        dispatch(setRemovePlayers())
        dispatch(fetchPlayers("all"))
      })
      .catch((error) => console.error(error))
  }
}
