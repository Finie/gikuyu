import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import Geolocation from '@react-native-community/geolocation';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Location from 'src/assets/icons/location.svg';
import FloatingButton from 'src/components/FloatingButton';
import {NavigationContainer} from '@react-navigation/native';

export default function LocationTrack({navigation}) {
  const {colors} = useThemeStyles();

  const handleSumbit = () => {};

  const getLocationPermissions = async () => {
    if (Platform.OS === 'ios') {
      const response = Geolocation.requestAuthorization();
      console.log(response);
    } else {
      let androidGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Gikuyu Singles Geolocation Permission',
          message: "Gikuyu Singles needs access to your phone's location.",
        },
      );

      if (androidGranted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('====================================');
        console.log(androidGranted);
        console.log('====================================');
      } else {
        console.log('Location permission not granted!!!!');
      }
    }
  };

  const styles = StyleSheet.create({
    main: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      padding: 30,
    },

    howtwxt: {
      fontWeight: '600',
      fontSize: 32,
      lineHeight: 39,
      color: colors.black,
    },
    sharetext: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 15,
    },
    bottomcontainer: {
      flexDirection: 'row',
      padding: 8,
    },
    emptychecjbox: {
      borderWidth: 2,
      borderColor: colors.silver,
      width: 20,
      height: 21,
      borderRadius: 4,
    },

    discalimertext: {
      fontSize: 12,
      lineHeight: 14,
      marginVertical: 16,
    },
    fabcontainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },

    accordion: {flex: 1, marginTop: 40},
    locationButton: {
      height: 60,
      borderWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 24,
      borderRadius: 30,
      borderColor: colors.primary,
      flex: 3,
    },
    texts: {
      marginLeft: 24,
      fontSize: 14,
      lineHeight: 17,
      fontWeight: '700',
      color: colors.primary,
    },
    mainb: {flexDirection: 'row'},
    helperview: {flex: 1},
  });
  return (
    <AuthScreen
      onBackPressed={function (): void {
        navigation.goBack();
      }}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.howtwxt}>Meet people nearby & far away</Text>
          <View style={styles.accordion}>
            <View style={styles.mainb}>
              <TouchableOpacity
                onPress={getLocationPermissions}
                style={styles.locationButton}>
                <Location />
                <Text style={styles.texts}>Enable Location Tracking</Text>
              </TouchableOpacity>
              <View style={styles.helperview}></View>
            </View>

            <Text style={styles.discalimertext}>
              Your location will be used to show potential matches near you, and
              show subscription plans available in your region.
            </Text>
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.fabcontainer}>
            <FloatingButton onPress={() => navigation.navigate('startIntro')} />
          </View>
        </View>
      </View>
    </AuthScreen>
  );
}
