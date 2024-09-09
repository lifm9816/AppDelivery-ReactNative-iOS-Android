import React, { useState } from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {

  const [ errorMessage, setErrorMessage ] = useState('');

  const [ values, setValues ] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value })
  }

  const register = async() => {
    if(isValidForm())
    {
      const response = await RegisterAuthUseCase(values)
      console.log('Result: ' + JSON.stringify(response));
    }
  }

  const isValidForm = (): boolean => {
    if(values.name === '')
    {
      setErrorMessage('El campo nombre no puede estar vacío');
      return false;
    }
    if(values.lastname === '')
    {
      setErrorMessage('El campo apellido no puede estar vacío');
      return false;
    }
    if(values.email === '')
    {
      setErrorMessage('El campo email no puede estar vacío');
      return false
    }
    if(values.phone === '')
    {
      setErrorMessage('El campo teléfono no puede estar vacío');
      return false;
    }
    if(values.password === '')
    {
      setErrorMessage('El campo contraseña no puede estar vacío');
      return false;
    }
    if(values.confirm_password === '')
    {
      setErrorMessage('La confirmación de contraseña no puede estar vacía');
      return false;
    }
    if(values.confirm_password !== values.password)
    {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }
    return true;
  }

  return{
    ...values,
    onChange,
    register,
    errorMessage
  }
}

export default RegisterViewModel;