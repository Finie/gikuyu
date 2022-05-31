import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import FabSubmit from 'src/components/forms/FabSubmit';
import useThemeStyles from 'src/hooks/useThemeStyles';
import FormInput from 'src/components/forms/FormInput';

import ChechBox from 'src/assets/icons/checkboxcheck.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function EmailScreen({navigation}) {
  const {colors} = useThemeStyles();
  const [ischecked, setisChecked] = useState(false);

  const handleSumbit = () => {
    navigation.navigate('birthdayScreen');
  };

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
    fabcontainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
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
          <Text style={styles.howtwxt}>What’s your email?</Text>

          <FormInput name={'email'} placeholder={'Email'} />
        </View>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.disclaimer} onPress={handleSwitch}>
            {ischecked ? <ChechBox /> : <View style={styles.emptychecjbox} />}
            <Text style={styles.discalimertext}>
              If you do not wish to get marketing communications about our
              products and services, check this box
            </Text>
          </TouchableOpacity>

          <View style={styles.fabcontainer}>
            <FabSubmit />
          </View>
        </View>
      </AppForm>
    </AuthScreen>
  );
}
