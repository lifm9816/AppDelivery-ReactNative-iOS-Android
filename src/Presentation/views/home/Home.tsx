import React, { useEffect } from 'react'
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import HomeStyles from './Styles';
import Toast from 'react-native-root-toast';

export const HomeScreen = () => {

    const { email, password, onChange, login, errorMessage } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    useEffect(() => {
      if(errorMessage !== ''){
        Toast.show(errorMessage)
      }
    }, [errorMessage])

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style = {HomeStyles.container}>
          <Image
            source = { require('../../../../assets/chef.jpg')}
            style = { HomeStyles.imageBackground }
          />
          
          <View style = { HomeStyles.logoContainer }>
            <Image 
              source = { require ('../../../../assets/logo.png')}
              style = { HomeStyles.logoImage }
            />
            <Text style = { HomeStyles.logoText }>Food App</Text>
          </View>

          <View style = { HomeStyles.form }>
              
            <Text style = { HomeStyles.formText }>Ingresar</Text>

            <CustomTextInput 
              image = {require('../../../../assets/email.png')}
                placeholder='Correo electrónico'
                keyboardType='email-address'
                property = 'email'
                onChangeText={onChange}
              value= {email}
            />

            <CustomTextInput 
              image = { require('../../../../assets/password.png')}
                placeholder = 'Contraseña'
                keyboardType ='default'
                property = 'password'
                onChangeText = {onChange}
                value = {password}
              secureTextEntry = {true}
            />
    
            <View style = {{marginTop: 30}}>
              <RoundedButton text = 'Entrar' onPress={ () => login()}/>
            </View>
              
            <View style = { HomeStyles.formRegister }>
              <Text>No tienes cuenta?</Text>
                
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style = { HomeStyles.formRegisterText }>Regístrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      );
}