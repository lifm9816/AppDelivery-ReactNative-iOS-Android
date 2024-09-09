import React, { useEffect, useState } from 'react'
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-root-toast';
import useViewModel from './ViewModel';
import RegisterStyles from './Styles';

export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirm_password, errorMessage, onChange, register } = useViewModel();
    useEffect(() => {
      if(errorMessage != '')
      {
        Toast.show(errorMessage)
      }
    }, [errorMessage])

    return (
        <View style = {RegisterStyles.container}>
            <Image
              source = { require('../../../../assets/chef.jpg')}
              style = { RegisterStyles.imageBackground }
            />
            <View style = { RegisterStyles.logoContainer }>
                <Image 
                    source = { require ('../../../../assets/user_image.png')}
                    style = { RegisterStyles.logoImage }
                />
                <Text style = { RegisterStyles.logoText }>Seleccione una imagen</Text>
            </View>

            <View style = { RegisterStyles.form }>
                <Text style = { RegisterStyles.formText }>Regístrate</Text>
              <KeyboardAwareScrollView>  
                <CustomTextInput 
                  image = { require('../../../../assets/user.png') }
                  placeholder = "Nombre"
                  value = { name }
                  keyboardType = 'default'
                  property = 'name'
                  onChangeText = { onChange }
                />

                <CustomTextInput 
                  image = { require('../../../../assets/my_user.png') }
                  placeholder = 'Apellido'
                  value = { lastname }
                  keyboardType = 'default'
                  property = 'lastname'
                  onChangeText = { onChange }
                />

                <CustomTextInput 
                  image = { require('../../../../assets/email.png') }
                  placeholder = 'Correo electrónico'
                  value = { email }
                  keyboardType = 'email-address'
                  property = 'email'
                  onChangeText = { onChange }
                />

                <CustomTextInput 
                  image = { require('../../../../assets/phone.png') }
                  placeholder = 'Teléfono'
                  value = { phone }
                  keyboardType = 'phone-pad'
                  property = 'phone'
                  onChangeText = { onChange }
                />

                <CustomTextInput 
                  image = { require('../../../../assets/password.png') }
                  placeholder = 'Contraseña'
                  value = { password }
                  keyboardType = 'default'
                  property = 'password'
                  secureTextEntry = { true }
                  onChangeText = { onChange }
                />

                <CustomTextInput 
                  image = { require('../../../../assets/confirm_password.png') }
                  placeholder = 'Confirmar contraseña'
                  value = { confirm_password }
                  keyboardType = 'default'
                  property = 'confirm_password'
                  secureTextEntry = { true }
                  onChangeText = { onChange }
                />
    
                <View style = {{marginTop: 30}}>
                    <RoundedButton text = 'Crear cuenta' onPress={ () => register()}/>
                </View>
              </KeyboardAwareScrollView>
            </View>
        </View>
    
      );
}