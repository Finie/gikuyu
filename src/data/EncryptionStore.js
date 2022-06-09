import SecureStorage from 'react-native-secure-storage';

const tokenKey = 'token';

const userKeyStore = 'userKey';

const storeToken = async data => {
  try {
    await SecureStorage.setItem(tokenKey, JSON.stringify(data));
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

const storeUser = async data => {
  try {
    await SecureStorage.setItem(tokenKey, JSON.stringify(data));
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

const getUserToken = async () => {
  try {
    const result = await SecureStorage.getItem(tokenKey);
    return JSON.parse(result);
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

const getUserData = async () => {
  try {
    const result = await SecureStorage.getItem(userKeyStore);
    return JSON.parse(result);
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

export default {
  storeToken,
  storeUser,
  getUserToken,
  getUserData,
};
