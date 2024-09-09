export interface User {
    id?:               string,
    name:             string;
    lastname:         string;
    email:            string;
    phone:            string;
    password:         string;
    confirm_password: string;
    session_token?:   string;
}