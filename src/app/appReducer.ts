import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppStatusType = 'idle' | 'error' | 'success' | 'loading'

export type AppInitialStateType = {
    status: AppStatusType
    message: string
}

export const appInitialState: AppInitialStateType = {
    status: 'idle',
    message: ''
}


const slice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<{ status: AppStatusType, message?: string }>) => {
            state.status = action.payload.status
            state.message = action.payload.message || appInitialState.message
        }
    }
})

export const appReducer = slice.reducer

export const appActions = slice.actions