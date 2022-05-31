import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import FabSubmit from 'src/components/forms/FabSubmit';
import useThemeStyles from 'src/hooks/useThemeStyles';

import CameraActive from 'src/assets/icons/cameraactive.svg';
import CameraInActive from 'src/assets/icons/imageactive.svg';
import InactiveImage from 'src/assets/icons/inactiveImage.svg'; //inactiveRecord.svg
import InactiveRecord from 'src/assets/icons/inactiveRecord.svg'; //
import FloatingButton from 'src/components/FloatingButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function Personalityphotos({navigation}) {
  const {colors} = useThemeStyles();
  const [ischecked, setisChecked] = useState(false);

  const handleSumbit = () => {};

  const handleSwitch = () => setisChecked(!ischecked);

  const styles = StyleSheet.create({
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
      //   justifyContent: 'flex-end',
      //   alignItems: 'flex-end',

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
    disclaimer: {
      flexDirection: 'row',
      flex: 2,
      alignItems: 'center',
    },
    discalimertext: {
      marginLeft: 15,
      fontSize: 12,
      lineHeight: 14,
    },
    discalimertext2: {
      fontSize: 12,
      lineHeight: 14,
      marginTop: 20,
      color: colors.black,
    },
    fabcontainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    imageholders: {
      height: 142,
      flex: 1,
      backgroundColor: colors.snow,
      margin: 3,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageholdercontainer: {
      // height: 200,
      flexDirection: 'row',
      marginTop: 15,
    },
  });
  return (
    <AuthScreen
      onBackPressed={function (): void {
        navigation.goBack();
      }}>
      <AppForm
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSumbit}>
        <View style={styles.container}>
          <Text style={styles.howtwxt}>
            Show your personality with photos & videos
          </Text>
          <Text style={styles.discalimertext2}>
            Give people a better sense of who you are with photos and videos.
          </Text>

          <View style={styles.imageholdercontainer}>
            <TouchableOpacity style={styles.imageholders}>
              <CameraActive />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageholders}>
              <CameraInActive />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageholders}>
              <CameraInActive />
            </TouchableOpacity>
          </View>

          <View style={styles.imageholdercontainer}>
            <TouchableOpacity style={styles.imageholders}>
              <InactiveImage />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageholders}>
              <InactiveRecord />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageholders}>
              <InactiveRecord />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.disclaimer}>
            <Text style={styles.discalimertext}>
              Get the premium plan to add videos or more than three photos to
              your profile
            </Text>
          </View>

          <View style={styles.fabcontainer}>
            <FloatingButton
              onPress={() => navigation.navigate('finisOnboard')}
            />
          </View>
        </View>
      </AppForm>
    </AuthScreen>
  );
}
