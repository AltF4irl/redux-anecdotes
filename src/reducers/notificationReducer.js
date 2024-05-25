import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: '',
    visibility: false
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state = initialState, action) {
            state = {
                content: action.payload,
                visibility: true
            }

            return state
        },
        unsetNotification(state, action) {
            state = action.payload ? initialState : state
            
            return state
        }
    }
})

export const {setNotification, unsetNotification} = notificationSlice.actions
export const throwNotification = (content, time) => {
    const timeInMs = time * 1000
    return dispatch => {
        dispatch(setNotification(content))
        setTimeout(() => {
            dispatch(unsetNotification(true))
        }, timeInMs);
    }
}
export default notificationSlice.reducer