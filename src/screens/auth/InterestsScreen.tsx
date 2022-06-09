import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';

import AuthScreen from 'src/components/screen/AuthScreen';
import Text from 'src/components/Text';
import AppForm from 'src/components/forms/AppForm';
import useThemeStyles from 'src/hooks/useThemeStyles';

import Musicnote from 'src/assets/icons/musicnote.svg'; //
import InactiveNote from 'src/assets/icons/inactivenote.svg'; //mapinactive.svg
import Fashion from 'src/assets/icons/fashionprimary.svg';
import InactiveFashion from 'src/assets/icons/inactivefashion.svg';
import PaintPrimary from 'src/assets/icons/fooddrinkprimary.svg';
import PaintInactivr from 'src/assets/icons/paininactive.svg';
import Foodiconprimaty from 'src/assets/icons/paintprimary.svg';
import BirthDayCake from 'src/assets/icons/birthdaycake.svg';
import BirthDayCakeInactive from 'src/assets/icons/cakeinactive.svg';
import MapInactive from 'src/assets/icons/mapinactive.svg';
import Unchecked from 'src/assets/icons/checkboxunchek.svg';
import Checked from 'src/assets/icons/checkboxcheck.svg';

import Info from 'src/assets/icons/infoicon.svg';
import Add from 'src/assets/icons/add.svg';
import FloatingLabelInput from 'src/components/FloatingLabelInput';
import Button from 'src/components/pressable/Button';
import PassionItem from 'src/components/PassionItem';
import Helpers from 'src/Helpers';

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
  const [moreSelected, setmoreSelected] = useState([] as any);

  const data = [
    {
      id: 1,
      name: 'I smoke',
    },
    {
      id: 2,
      name: 'I smoke',
    },
    {
      id: 3,
      name: 'I smoke',
    },
  ];

  const handleSumbit = () => {};

  const handleSwitch = () => setisChecked(!ischecked);

  const isFirstElement = (index: number) => {
    if (index === 0) {
      return true;
    }

    return false;
  };

  const isLastElement = (index: number, length: number) => {
    if (index === length) {
      return true;
    }

    return false;
  };

  const onMoreItemsSelection = (data: {id: number; name: string}) => {
    if (Helpers.isEmpty(moreSelected)) {
      moreSelected.push(data);
      return;
    }

    const array = moreSelected.filter((element: {id: number; name: string}) => {
      return element.id !== data.id;
    });

    setmoreSelected(array);
  };

  useEffect(() => {
    console.log('====================================');
    console.log(JSON.stringify(moreSelected));
    console.log('====================================');
  }, [moreSelected.lenght]);

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
    passionholder: {},
    passioniteholder: {
      marginVertical: 5,
      flexDirection: 'row',
    },
    passionname: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: colors.black,
      marginVertical: 20,
    },
    morecontainer: {
      borderWidth: 1,
      padding: 16,
      borderColor: colors.snow,
    },

    morecontainerisFirst: {
      borderWidth: 1,
      padding: 16,
      borderColor: colors.snow,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    morecontainerisLast: {
      borderWidth: 1,
      padding: 16,
      borderColor: colors.snow,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    morename: {
      marginLeft: 16,
      fontSize: 14,
      lineHeight: 17,
      color: colors.black,
    },
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

          <View style={styles.passionholder}>
            <Text style={styles.passionname}>Passions</Text>

            <View style={styles.passioniteholder}>
              <PassionItem
                Icon={<Musicnote />}
                label={'Arts & Music'}
                Inactive={<InactiveNote />}
              />
              <PassionItem
                Icon={<Fashion />}
                label={'Fashion'}
                Inactive={<InactiveFashion />}
              />
            </View>

            <View style={styles.passioniteholder}>
              <PassionItem
                Icon={<BirthDayCake />}
                label={'Food & Drink'}
                Inactive={<BirthDayCakeInactive />}
              />
              <PassionItem
                Icon={<PaintPrimary />}
                label={'Painting'}
                Inactive={<PaintInactivr />}
              />
            </View>

            <View style={styles.passioniteholder}>
              <PassionItem
                Icon={<Foodiconprimaty />}
                label={'Travel & Places'}
                Inactive={<MapInactive />}
              />
            </View>
          </View>

          <View>
            <Text style={styles.passionname}>More</Text>
            <>
              {data.map((item, index) => {
                console.log('====================================');
                console.log(data.length);
                console.log(index);
                console.log('====================================');
                return (
                  <TouchableOpacity
                    onPress={() => onMoreItemsSelection(item)}
                    key={index}
                    style={
                      isLastElement(index, data.length - 1)
                        ? styles.morecontainerisLast
                        : isFirstElement(index)
                        ? styles.morecontainerisFirst
                        : styles.morecontainer
                    }>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Checked />
                      <Text style={styles.morename}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          </View>
        </View>

        <View style={styles.buttoncontainer}>
          <Button>Finish</Button>
        </View>
      </AppForm>
    </AuthScreen>
  );
}
