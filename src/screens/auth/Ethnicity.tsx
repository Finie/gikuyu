import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import FabSubmit from 'src/components/forms/FabSubmit';
import useThemeStyles from 'src/hooks/useThemeStyles';
import {Picker} from '@davidgovea/react-native-wheel-datepicker';
import Accordion from 'src/components/view/Accordion';
import FloatingButton from 'src/components/FloatingButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function Ethnicity({navigation}) {
  const {colors} = useThemeStyles();
  const [ischecked, setisChecked] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(3);

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
    accordion: {flex: 1, marginTop: 40},
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
          <Text style={styles.howtwxt}>What’s your ethnicity?</Text>
          <View style={styles.accordion}>
            <Accordion />
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.fabcontainer}>
            <FloatingButton
              onPress={() => navigation.navigate('locationTrack')}
            />
          </View>
        </View>
      </AppForm>
    </AuthScreen>
  );
}
