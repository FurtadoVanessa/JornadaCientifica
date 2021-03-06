import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
import * as auth from '../serviços/auth';
import * as utils from '../serviços/utils';

const AuthContexto = createContext({signed: false, user: {}});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const {storageUser, storageToken} = utils.getUser();

      if (storageUser && storageToken) {
        setUser(storageUser);
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function register(
    name,
    email,
    course,
    institution,
    campus,
    whatsapp,
    password,
    type,
  ) {
    setLoading(true);
    const data = {
      username: name,
      email: email,
      course: course,
      school: institution,
      campus: campus,
      whatsapp: whatsapp,
      password: password,
      type: type,
    };

    const response = await auth.register(data);
    if (response.status === 200) {
      Alert.alert('Aviso', 'Cadastrado com sucesso', [{text: 'OK'}], {
        cancelable: true,
      });
    } else {
      Alert.alert(
        'Erro ao cadastrar',
        'Verifique se o e-mail já foi cadastrado, tente logar-se',
        [{text: 'OK'}],
        {
          cancelable: true,
        },
      );
    }
    setLoading(false);
  }

  async function signIn(username, password) {
    await CookieManager.clearAll();
    setLoading(true);
    const response = await auth.signIn({
      user: username,
      password: password,
    });

    if (response.status === 200 && response.data.token !== undefined) {
      utils.storeUser(response.data.token, username);
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
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        register,
        loading,
        resetPassword,
        setLoading,
      }}>
      {children}
    </AuthContexto.Provider>
  );
};

export default AuthContexto;
