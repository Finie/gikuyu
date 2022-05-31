import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import useThemeStyles from 'src/hooks/useThemeStyles';
import AppForm from 'src/components/forms/AppForm';
import FormInput from 'src/components/forms/FormInput';
import SubmitForm from 'src/components/forms/SubmitForm';
import ChechBox from 'src/assets/icons/checkboxcheck.svg';
import Link from 'src/components/Link';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().trim().label('Email'),
  password: Yup.string().required().label('Password'),
});

export default function SignIn({navigation}) {
  const {colors, text} = useThemeStyles();

  const [rememberMe, setrememberMe] = useState(true);

  const handleRemember = () => setrememberMe(!rememberMe);

  const handleSubmission = data => {
    navigation.navigate('mainScreen');
  };

  const styles = StyleSheet.create({
    textarea: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1,
    },
    testsize: {
      fontWeight: '600',
      lineHeight: 38.88,
      fontSize: 32,
    },
    main: {
      flex: 3,
      marginHorizontal: 30,
    },
    bottomlayout: {
      flex: 1,
    },
    checkboxtouchable: {paddingVertical: 30, flexDirection: 'row'},
    emptychecjbox: {
      borderWidth: 2,
      borderColor: colors.silver,
      width: 20,
      height: 21,
      borderRadius: 4,
    },
    remember: {
      marginLeft: 16,
    },
    bottomlay: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    fogot: {
      color: colors.primary,
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 17.01,
      marginTop: 30,
    },
    donthav: {fontWeight: '700', fontSize: 16, lineHeight: 17.01},
    sign: {
      color: colors.primary,
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 17.01,
      marginTop: 1,
    },
  });
  return (
    <AuthScreen
      onBackPressed={() => {
        navigation.goBack();
      }}>
      <View style={styles.textarea}>
        <Text style={[text.heading, styles.testsize]}>
          {'Let’s Sign You In'}
        </Text>
      </View>
      <View style={styles.main}>
        <AppForm
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmission}
          validationSchema={validationSchema}>
          <FormInput name={'email'} placeholder={'Email*'} />
          <FormInput name={'password'} placeholder={'Password*'} ispassword />

          <View style={styles.bottomlayout}>
            <TouchableOpacity
              onPress={handleRemember}
              style={styles.checkboxtouchable}>
              {rememberMe ? (
                <ChechBox />
              ) : (
                <View style={styles.emptychecjbox} />
              )}
              <Text style={styles.remember}> Remember me</Text>
            </TouchableOpacity>
            <SubmitForm title="Sign in" />

            <View style={styles.bottomlay}>
              <Text style={styles.fogot}>Forgot Password</Text>
              <Text style={styles.donthav}>
                Don't have an account?{' '}
                <Link
                  onPress={() => navigation.navigate('signinWelcome')}
                  style={styles.sign}
                  title={` Sign up →`}
                />
              </Text>
            </View>
          </View>
        </AppForm>
      </View>
    </AuthScreen>
  );
}
