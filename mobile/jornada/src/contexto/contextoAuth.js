import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
import * as auth from '../serviços/auth';

const AuthContexto = createContext({signed: false, user: {}});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        setUser(storageUser);
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(username, password) {
    await CookieManager.clearAll();
    setLoading(true);
    const response = await auth.signIn({
      user: username,
      password: password,
    });

    if (response.status === 200 && response.data.token !== undefined) {
      await AsyncStorage.setItem('@RNAuth:user', username);
      await AsyncStorage.setItem('@RNAuth:token', response.data.token);
      setUser(username);
    } else {
      Alert.alert('Erro', 'E-mail e/ou senha incorretos', [{text: 'OK'}], {
        cancelable: true,
      });
    }
    setLoading(false);
  }

  async function signOut() {
    setLoading(true);
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
    await CookieManager.clearAll();
    setLoading(false);
  }

  function resetPassword(email) {
    Alert.alert(
      'Aviso',
      'Um e-mail com uma nova senha foi enviado, verifique sua caixa de entrada. Mentira kkkkk',
      [{text: 'OK'}],
      {
        cancelable: true,
      },
    );
    return console.log('Implemente a de recuperação de senha', email);
  }

  return (
    <AuthContexto.Provider
      value={{signed: !!user, user, signIn, signOut, loading, resetPassword}}>
      {children}
    </AuthContexto.Provider>
  );
};

export default AuthContexto;
