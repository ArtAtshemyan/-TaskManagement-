import {combineReducers, configureStore} from '@reduxjs/toolkit';
import usersInfSlice from "./slices/userInfoSlice";
const rootReducer = combineReducers({
    usersInfSlice,

})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
