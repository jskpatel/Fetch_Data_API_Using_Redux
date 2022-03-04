import { combineReducers } from "redux";
import { setUserReducer, selectedUserReducer } from './Reducers'

const reducers = combineReducers({
    allUsers: setUserReducer,
    user: selectedUserReducer
})

export default reducers