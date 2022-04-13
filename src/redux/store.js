import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers/index"
import reduxThunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const middlewares = [reduxThunk]
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
