import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slice/UserSlice"

export const makeStore = () =>  {
return configureStore({
    reducer: {
        user: userReducer
    }
})
}
