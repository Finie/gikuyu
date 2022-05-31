import {View, StyleSheet} from 'react-native';
import React from 'react';
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
});

export default function NameScreen({navigation}) {
  const {colors} = useThemeStyles();

  const handleSumbit = data => {
    navigation.navigate('emailScreen');
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
      padding: 8,
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
        }}
        validationSchema={validationSchema}
        onSubmit={handleSumbit}>
        <View style={styles.container}>
          <Text style={styles.howtwxt}>How should we call you?</Text>

          <FormInput name={'firstName'} placeholder={'First Name'} />
          <FormInput name={'lastName'} placeholder={'Last Name'} />
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
