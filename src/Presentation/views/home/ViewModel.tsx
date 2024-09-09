import React, { useEffect, useState } from 'react';
import { LoginAuthCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUser';

const HomeViewModel = () => {

    const [ errorMessage, setErrorMessage ] = useState("")

    const [ values, setValues ] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        getUserSession();
    },[]);

    const getUserSession = async() => {
        const user = await GetUserUseCase();
        console.log('Usuario sesión: ' + JSON.stringify(user));
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value} );
    }

    const login = async () => {
        if(isValidForm()){
            const response = await LoginAuthCase(values.email, values.password);
            console.log('Response: ' + JSON.stringify(response));
            if(!response.success){
                setErrorMessage("El correo o la contraseña son inconrrectos")
            }
            else{
                await SaveUserUseCase(response.data);
            }
        }
        
    }

    const isValidForm = (): boolean => {
        if(values.email === ''){
            setErrorMessage("Ingresa el correo electrónico");
            return false;
        }
        if(values.password === ''){
            setErrorMessage("Ingrese la contraseña");
            return false;
        }
        
        return true;
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel;