import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Text from './Text';
import useThemeStyles from 'src/hooks/useThemeStyles';

import CameraActive from 'src/assets/icons/cameraactive.svg';
import CameraInActive from 'src/assets/icons/imageactive.svg';
import InactiveImage from 'src/assets/icons/inactiveImage.svg';
import InactiveRecord from 'src/assets/icons/inactiveRecord.svg';
import ReadioChecked from 'src/assets/icons/checkboxcheck.svg';
import UncheckedRadio from 'src/assets/icons/checkboxunchek.svg';
import FloatingLabelInput from './FloatingLabelInput';
import DropDwon from './DropDwon';

import Info from 'src/assets/icons/infoicon.svg';
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
import PassionItem from './PassionItem';
import Button from './pressable/Button';

const EditAboutMe = () => {
  const {colors} = useThemeStyles();
  const [idrink, setidrink] = useState(false);
  const [ismoke, setismoke] = useState(false);
  const [ihavechildren, setihavechildren] = useState(false);
  const handleMale = () => setgender('Male');

  const handleFemale = () => setgender('Female');
  const styles = StyleSheet.create({
    photo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 32,
    },
    imagePickerContainer: {
      marginHorizontal: 30,
    },
    imageholders: {
      height: 142,
      flex: 1,
      backgroundColor: colors.snow,
      margin: 3,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageholdercontainer: {
      // height: 200,
      flexDirection: 'row',
      marginTop: 15,
    },
    scroll: {
      flexGrow: 1,
    },
    biosection: {
      margin: 30,
    },

    holder: {
      borderWidth: 1,
      borderColor: colors.snow,
      borderRadius: 6,
      marginVertical: 40,
      marginHorizontal: 30,
    },
    gender: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      paddingHorizontal: 20,
    },
    gender2: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderColor: colors.snow,
    },
    genderitem: {
      marginLeft: 16,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 16,
      backgroundColor: colors.snow,
      padding: 5,
      borderRadius: 10,
    },
    mustpick: {marginLeft: 16, fontSize: 12, lineHeight: 14},

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
    passion: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: colors.black,
    },
    lastbutton: {
      marginHorizontal: 30,
      marginBottom: 60,
    },
  });
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.photo}>
        <Text>Photo</Text>
        <Text>Drag to reorder</Text>
      </View>

      <View style={styles.imagePickerContainer}>
        <View style={styles.imageholdercontainer}>
          <TouchableOpacity style={styles.imageholders}>
            <CameraActive />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageholders}>
            <CameraInActive />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageholders}>
            <CameraInActive />
          </TouchableOpacity>
        </View>

        <View style={styles.imageholdercontainer}>
          <TouchableOpacity style={styles.imageholders}>
            <InactiveImage />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageholders}>
            <InactiveRecord />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageholders}>
            <InactiveRecord />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.biosection}>
        <Text>Bio</Text>

        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="First name"
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Last name"
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Birthday"
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Gender"
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="I live in"
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Describe yourself"
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="What are you looking for?"
        />
        <FloatingLabelInput
          label="Height"
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
        />
        <DropDwon title={'Height'} description={'Slender'} />
      </View>

      <View style={styles.biosection}>
        <Text>More</Text>

        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Which languages do you speak?"
        />
        <DropDwon title={'Education Level'} description={'Master’s Degree'} />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Occupation"
        />
        <DropDwon title={'Religion'} description={'I prefer not to say'} />
      </View>

      <View style={styles.holder}>
        <TouchableOpacity onPress={() => setismoke(true)} style={styles.gender}>
          {ismoke ? <ReadioChecked /> : <UncheckedRadio />}
          <Text style={styles.genderitem}>I smoke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setidrink(true)}
          style={styles.gender2}>
          {idrink ? <ReadioChecked /> : <UncheckedRadio />}

          <Text style={styles.genderitem}>I drink</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setihavechildren(true)}
          style={styles.gender2}>
          {ihavechildren ? <ReadioChecked /> : <UncheckedRadio />}

          <Text style={styles.genderitem}>I have a child / children</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.biosection}>
        <Text style={styles.passion}>Passions</Text>

        <View style={styles.info}>
          <Info />
          <Text style={styles.mustpick}>You must pick at least 3</Text>
        </View>

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

      <View style={styles.lastbutton}>
        <Button>Save</Button>
      </View>
    </ScrollView>
  );
};

export default EditAboutMe;
