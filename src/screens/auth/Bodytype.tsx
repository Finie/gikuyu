import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import useThemeStyles from 'src/hooks/useThemeStyles';
import FloatingButton from 'src/components/FloatingButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function Bodytype({navigation}) {
  const {colors} = useThemeStyles();
  const [ischecked, setisChecked] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(3);

  let heights = [
    '5`4 (166cm)',
    '5`5 (167cm)',
    '5`6 (168cm)',
    '5`7 (169cm)',
    '5`8 (170cm)',
    '5`9 (171cm)',
  ];

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
            <FloatingButton onPress={() => navigation.navigate('ethnicity')} />
          </View>
        </View>
      </AppForm>
    </AuthScreen>
  );
}