import {AppDispatch} from "../configStore";
import {IRegisterData} from "../types/types";
import {usersFetching, usersFetchingError, usersFetchingSuccess} from "./userInfoSlice";
interface ILoginData {
    password: string;
    email: string;
}
export const authLogIn = (data: ILoginData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching());
        // dispatch(usersFetchingSuccess(response.data.user_detail.user))
        // console.log(response.data.user_detail, 'authLogIn');
    } catch (err:any) {
        dispatch(usersFetchingError(err.massage))
        throw err;
    }
};
export const authRegister = (data: IRegisterData) => async () => {
    try {
        // const response = await mainApi.post(`register/`, data);
        // console.log(response, 'authRegisterLog');
    } catch (err) {
        throw err;
    }
};
