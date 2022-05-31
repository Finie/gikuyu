import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import useThemeStyles from 'src/hooks/useThemeStyles';

import Info from 'src/assets/icons/infoicon.svg';
import Add from 'src/assets/icons/add.svg';
import FloatingLabelInput from 'src/components/FloatingLabelInput';
import Button from 'src/components/pressable/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

export default function InterestsScreen() {
  const {colors} = useThemeStyles();
  const [ischecked, setisChecked] = useState(false);
  const [isart, setisart] = useState(false);
  const [isfashion, setisfashion] = useState(false);
  const [isfood, setisfood] = useState(false);
  const [ispainting, setispainting] = useState(false);
  const [istravel, setistravel] = useState(false);

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

    imageholdercontainer: {
      marginTop: 15,
    },
    passion: {
      fontSize: 16,
      lineHeight: 19,
      color: colors.black,
      fontWeight: '700',
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      backgroundColor: colors.snow,
      padding: 5,
      borderRadius: 10,
    },
    mustpick: {marginLeft: 16, fontSize: 12, lineHeight: 14},
    pash: {marginTop: 20},
    pash2: {marginTop: 20, flexDirection: 'row'},
    selectioninactive: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.snow,
      padding: 10,
      borderRadius: 8,
      marginRight: 8,
    },
    selectionactive: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 8,
      marginRight: 8,
    },
    selectiontexttypeinactive: {marginHorizontal: 16},
    selectiontexttypeactive: {marginHorizontal: 16, color: colors.white},
    buttoncontainer: {marginHorizontal: 30, marginBottom: 200, marginTop: 30},
  });
  return (
    <AuthScreen>
      <AppForm
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSumbit}>
        <View style={styles.container}>
          <Text style={styles.howtwxt}>
            Tell us something interesting about yourself.
          </Text>
          <Text style={styles.discalimertext2}>
            Your potential matches will get a better sense about who you are.
          </Text>

          <View style={styles.imageholdercontainer}>
            <FloatingLabelInput
              onBlur={() => console.log('blur')}
              onChangeText={text => console.log(text)}
              label="About Me"
            />

            <FloatingLabelInput
              onBlur={() => console.log('blur')}
              onChangeText={text => console.log(text)}
              label="I’m looking for ..."
            />

            <FloatingLabelInput
              onBlur={() => console.log('blur')}
              onChangeText={text => console.log(text)}
              label="I speak these languages"
            />
          </View>

          <View style={styles.pash}>
            <Text style={styles.passion}>Passions</Text>

            <View style={styles.info}>
              <Info />
              <Text style={styles.mustpick}>You must pick at least 3</Text>
            </View>
          </View>

          <View style={styles.pash2}>
            <TouchableOpacity
              onPress={() => setisart(!isart)}
              style={isart ? styles.selectionactive : styles.selectioninactive}>
              <Info />
              <Text
                style={
                  isart
                    ? styles.selectiontexttypeactive
                    : styles.selectiontexttypeinactive
                }>
                Arts & Music
              </Text>
              <Add />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setisfashion(!isfashion)}
              style={
                isfashion ? styles.selectionactive : styles.selectioninactive
              }>
              <Info />
              <Text
                style={
                  isfashion
                    ? styles.selectiontexttypeactive
                    : styles.selectiontexttypeinactive
                }>
                Fashion
              </Text>
              <Add />
            </TouchableOpacity>
          </View>

          <View style={styles.pash2}>
            <TouchableOpacity
              onPress={() => setisfood(!isfood)}
              style={
                isfood ? styles.selectionactive : styles.selectioninactive
              }>
              <Info />
              <Text
                style={
                  isfood
                    ? styles.selectiontexttypeactive
                    : styles.selectiontexttypeinactive
                }>
                Food & Drink
              </Text>
              <Add />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setispainting(!ispainting)}
              style={
                ispainting ? styles.selectionactive : styles.selectioninactive
              }>
              <Info />
              <Text
                style={
                  ispainting
                    ? styles.selectiontexttypeactive
                    : styles.selectiontexttypeinactive
                }>
                Painting
              </Text>
              <Add />
            </TouchableOpacity>
          </View>

          <View style={styles.pash2}>
            <TouchableOpacity
              onPress={() => setistravel(!istravel)}
              style={
                istravel ? styles.selectionactive : styles.selectioninactive
              }>
              <Info />
              <Text
                style={
                  istravel
                    ? styles.selectiontexttypeactive
                    : styles.selectiontexttypeinactive
                }>
                Travel & Places
              </Text>
              <Add />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttoncontainer}>
          <Button>Finish</Button>
        </View>
      </AppForm>
    </AuthScreen>
  );
}
