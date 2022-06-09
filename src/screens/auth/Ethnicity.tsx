import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import LottieView from 'lottie-react-native';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import FabSubmit from 'src/components/forms/FabSubmit';
import useThemeStyles from 'src/hooks/useThemeStyles';
import {Picker} from '@davidgovea/react-native-wheel-datepicker';
import Accordion from 'src/components/view/Accordion';
import FloatingButton from 'src/components/FloatingButton';
import authRouter from 'src/api/routers/authRouter';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function Ethnicity({navigation}) {
  const {colors} = useThemeStyles();
  const [ischecked, setisChecked] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSumbit = () => {};

  const handleSwitch = () => setisChecked(!ischecked);

  const fetchEthnicGroups = async () => {
    setIsLoading(true);
    const response = await authRouter.getEthnicGroups();
    setIsLoading(false);

    if (response.ok) {
      setData(response.data.data);
      return;
    }

    console.log('====================================');
    console.log(response);
    console.log('====================================');
  };

  useEffect(() => {
    fetchEthnicGroups();
  }, []);

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
    lottieholder: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    lottie: {
      height: 200,
      width: '100%',
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
          <Text style={styles.howtwxt}>What’s your ethnicity?</Text>

          {isLoading ? (
            <View style={styles.lottieholder}>
              <LottieView
                autoPlay={true}
                loop={true}
                source={require('src/assets/lottie/heart.json')}
                style={styles.lottie}
              />

              <Text>Loading ...</Text>
            </View>
          ) : (
            <View style={styles.accordion}>
              <Accordion data={data} />
            </View>
          )}
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
