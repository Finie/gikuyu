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
import FormDataPicker from 'src/components/forms/FormDataPicker';
import GikuyuDate from 'src/components/GikuyuDate';
import FloatingLabelInput from 'src/components/FloatingLabelInput';
import FloatingButton from 'src/components/FloatingButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function BirthdateScreen({navigation}) {
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
    fabcontainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    cantchange: {
      fontSize: 12,
      lineHeight: 15,
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
          <Text style={styles.howtwxt}>What’s your date of birth?</Text>

          <GikuyuDate onDateChange={date => console.log(date)} />

          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>You are: </Text>
              <Text>18</Text>
            </View>
            <Text style={styles.cantchange}>This can’t be changed later.</Text>
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.fabcontainer}>
            <FloatingButton
              onPress={() => navigation.navigate('basicInfoLand')}
            />
          </View>
        </View>
      </AppForm>
    </AuthScreen>
  );
}
