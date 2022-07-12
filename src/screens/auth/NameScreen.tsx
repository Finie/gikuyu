import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import FabSubmit from 'src/components/forms/FabSubmit';
import useThemeStyles from 'src/hooks/useThemeStyles';
import FormInput from 'src/components/forms/FormInput';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First name'),
  lastName: Yup.string().required().label('Last name'),
  userName: Yup.string().required().label('Username'),
  phone: Yup.string().required().label('Phone'),
});

export default function NameScreen({navigation}) {
  const {colors} = useThemeStyles();

  const handleSumbit = (data: {
    firstName: string;
    lastName: string;
    userName: string;
    phone: string;
  }) => {
    const request = {
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.lastName,
      phone: data.phone,
      username: data.userName,
    };

    navigation.navigate('emailScreen', {data: request});
  };

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
      justifyContent: 'flex-end',
      alignItems: 'flex-end',

      paddingVertical: 16,
      paddingHorizontal: 30,
    },
  });
  return (
    <AuthScreen
      onBackPressed={function (): void {
        navigation.goBack();
      }}>
      <AppForm
        initialValues={{
          firstName: '',
          lastName: '',
          userName: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSumbit}>
        <View style={styles.container}>
          <Text style={styles.howtwxt}>How should we call you?</Text>

          <FormInput name={'firstName'} placeholder={'First Name'} />
          <FormInput name={'lastName'} placeholder={'Last Name'} />
          <FormInput name={'userName'} placeholder={'Username'} />
          <FormInput
            name={'phone'}
            placeholder={'Phone number'}
            keyboardType={'decimal-pad'}
          />
          <Text style={styles.sharetext}>
            Your last name will only be shared with matches.
          </Text>
        </View>
        <View style={styles.bottomcontainer}>
          <FabSubmit />
        </View>
      </AppForm>
    </AuthScreen>
  );
}
