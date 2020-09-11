import AsyncStorage from '@react-native-community/async-storage';

export async function getUser() {
  try {
    const storageUser = await AsyncStorage.getItem('@RNAuth:username');
    const storageToken = await AsyncStorage.getItem('@RNAuth:token');
    return {storageUser, storageToken};
  } catch (e) {
    throw e;
  }
}

export async function storeUser(userToken, username) {
  try {
    await AsyncStorage.setItem('@RNAuth:username', username);
    return await AsyncStorage.setItem(
      '@RNAuth:token',
      JSON.stringify(userToken),
    );
  } catch (e) {
    throw e;
  }
}

export async function deleteUser() {
  try {
    await AsyncStorage.removeItem('@RNAuth:username');
    return await AsyncStorage.removeItem('@RNAuth:token');
  } catch (e) {
    throw e;
  }
}
