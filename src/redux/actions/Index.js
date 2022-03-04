import actionType from '../constant/ActionType'

export const setUser = users => {
    return {
        type: actionType.SET_USER,
        payload: users
    }
}

export const selectedUser = user => {
    return {
        type: actionType.SELECTED_USER,
        payload: user
    }
}