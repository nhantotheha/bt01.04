import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLoginState = async () => {
  try {
    const value = await AsyncStorage.getItem('isLoggedIn');
    return value === 'true';
  } catch (error) {
    console.error('Error getting login state:', error);
    return false;
  }
};

export const saveLoginState = async (state) => {
  try {
    await AsyncStorage.setItem('isLoggedIn', state.toString());
  } catch (error) {
    console.error('Error saving login state:', error);
  }
};

export const clearLoginState = async () => {
  try {
    await AsyncStorage.removeItem('isLoggedIn');
  } catch (error) {
    console.error('Error clearing login state:', error);
  }
};