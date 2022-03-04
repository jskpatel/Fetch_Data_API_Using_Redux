import actionType from '../constant/ActionType'

const initialState = {
    users: []
}

export const setUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_USER:
            return { ...state, users: payload }
        default:
            return state
    }
}

export const selectedUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_USER:
            return { ...state, ...payload }
        default:
            return state
    }
}