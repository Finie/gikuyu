import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigation from '../MainNavigation';
import ChatRoom from '../chat/ChatRoom';
import UserDescription from '../UserDescription';
import AboutScreen from '../AboutScreen';
import PreferenceScreen from '../PreferenceScreen';
import PriceQuotation from '../PriceQuotation';
import BlockedContacts from '../BlockedContacts';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={MainNavigation} />
      <Stack.Screen name="messageUi" component={ChatRoom} />
      <Stack.Screen name="userdetails" component={UserDescription} />
      <Stack.Screen name="aboutScreen" component={AboutScreen} />
      <Stack.Screen name="preference" component={PreferenceScreen} />
      <Stack.Screen name="pricestack" component={PriceQuotation} />
      <Stack.Screen name="blockedContacts" component={BlockedContacts} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
