import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "./states/user.js"

export default configureStore ({
    reducer: {
        user: userSlice.reducer
    }
})