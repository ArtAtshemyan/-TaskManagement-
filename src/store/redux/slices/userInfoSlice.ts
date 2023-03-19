import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types/types';
interface UsersState {
    user: IUser;
    isLogin: boolean;
    isLoading: boolean;
    error: string;
}
const initialState: UsersState = {
    user: {
        id: 0,
        username: '',
        email: '',
    },
    isLogin: false,
    isLoading: false,
    error: '',
};
export const usersInfSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
            state.isLogin = true
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.isLogin = false;
        },
    },
});


export const {usersFetching,usersFetchingSuccess,usersFetchingError} = usersInfSlice.actions;
export default usersInfSlice.reducer;
