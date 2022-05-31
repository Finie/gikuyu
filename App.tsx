import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ModalPortal} from 'react-native-modals';
import SplashScreen from 'react-native-splash-screen';

import HomeNavigator from 'src/screens/home/nav/HomeNavigator';
import AuthNavigator from 'src/screens/auth/AuthNavigator';
import ProfileScreen from 'src/screens/home/ProfileScreen';
import ParalaxScreen from 'src/screens/home/ParalaxScreen';
import PreferenceScreen from 'src/screens/home/PreferenceScreen';
import BlockedContacts from 'src/screens/home/BlockedContacts';
import PriceQuotation from 'src/screens/home/PriceQuotation';
import Onboarding from 'src/screens/auth/Onboarding';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      <AuthNavigator />

      <ModalPortal />
    </NavigationContainer>
  );
};

export default App;
