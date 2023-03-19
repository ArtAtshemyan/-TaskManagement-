export interface IUser {
    id: number;
    username: null | string;
    email: null | string;
}
export interface ICitiesItem {
    name: string;
    id: number;
}
export interface IRegisterData {
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
    email: string;
    phone_number: string;
    confirm_code: string;
}
