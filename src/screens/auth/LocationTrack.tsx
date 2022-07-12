import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Location from 'src/assets/icons/location.svg';
import FloatingButton from 'src/components/FloatingButton';
import {NavigationContainer} from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import {UserProfile} from 'src/utils/shared.types';

export default function LocationTrack({navigation, route}) {
  const {colors} = useThemeStyles();
  const [locationIsGranted, setLocationIsGranted] = useState(false);
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  const UserInfo: UserProfile = route.params.data;

  const handleSumbit = () => {
    const request = {
      first_name: UserInfo.first_name,
      email: UserInfo.email,
      last_name: UserInfo.last_name,
      password: UserInfo.password,
      middle_name: UserInfo.middle_name,
      phone: UserInfo.phone,
      username: UserInfo.username,
      profile: {
        birth_date: UserInfo.profile.birth_date,
        gender: UserInfo.profile.gender,
        height: UserInfo.profile.height,
        physical_frame: UserInfo.profile.physical_frame,
        ethnicity: UserInfo.profile.ethnicity,
        location: {
          google_place_id: 'string',
          name: 'string',
          longitude: currentLongitude,
          latitude: currentLatitude,
        },
      },
    };

    console.log('====================================');
    console.log(request);
    console.log('====================================');

    navigation.navigate('startIntro', {data: request});
  };

  const getLocationPermissions = async () => {
    if (Platform.OS === 'ios') {
      const response = Geolocation.requestAuthorization();
      if (response === undefined) {
        Geolocation.requestAuthorization();
        return;
      }

      console.log('====================================');
      console.log('sdcafghsfdafgc');
      console.log(response);
      console.log('====================================');

      // const res = await Geocoder;
    } else {
      let androidGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Gikuyu Singles Geolocation Permission',
          message: "Gikuyu Singles needs access to your phone's location.",
        },
      );

      if (androidGranted === PermissionsAndroid.RESULTS.GRANTED) {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        console.log('Location permission not granted!!!!');
      }
    }
  };

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    const watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
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
      paddingVertical: 16,
      paddingHorizontal: 30,
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

  React.useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

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
            <FloatingButton onPress={handleSumbit} />
          </View>
        </View>
      </View>
    </AuthScreen>
  );
}
