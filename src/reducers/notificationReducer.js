import { createSlice } from "@reduxjs/toolkit";

const initialState = 'hehe'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state = initialState, action) {
            state = action.payload
            return state
        }
    }
})

export const {setNotification} = notificationSlice.actions
export default notificationSlice.reducer