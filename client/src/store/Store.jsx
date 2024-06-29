import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/CounterSlice"
import userReducer from "./slices/UserSlice"

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
})
export default Store;