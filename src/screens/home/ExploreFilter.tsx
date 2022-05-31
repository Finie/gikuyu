import {View, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import RangeSlider from 'rn-range-slider';

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

import Screen from 'src/components/screen/Screen';
import FloatingLabelInput from 'src/components/FloatingLabelInput';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Thumb from 'src/components/Slider/Thumb';
import Rail from 'src/components/Slider/Rail';
import RailSelected from 'src/components/Slider/RailSelected';
import Label from 'src/components/Slider/Label';
import Notch from 'src/components/Slider/Notch';
import Text from 'src/components/Text';
import PassionItem from 'src/components/PassionItem';
import Button from 'src/components/pressable/Button';

export default function ExploreFilter({navigation}) {
  const {colors} = useThemeStyles();

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [minDistane, setminDistane] = useState(0);
  const [maxDistance, setMaxDistance] = useState(900);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const distanceValueChange = useCallback((low, high) => {
    setminDistane(low);
    setMaxDistance(high);
  }, []);

  const styles = StyleSheet.create({
    floatinputcontainer: {
      marginHorizontal: 30,
    },
    root: {
      alignItems: 'stretch',
      padding: 12,
      flex: 1,
      backgroundColor: '#555',
    },
    slider: {},
    button: {},
    header: {
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 12,
    },
    horizontalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    valueText: {
      width: 50,
      color: 'white',
      fontSize: 20,
    },
    age: {
      color: colors.primary,
      fontSize: 14,
      lineHeight: 17.01,
      fontWeight: '600',
    },
    ageContainer: {
      marginHorizontal: 30,
      marginVertical: 20,
    },
    between: {
      marginVertical: 20,
      fontSize: 14,
      lineHeight: 17.01,
      fontWeight: '400',
    },
    agetext: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: colors.black,
    },
    passionholder: {
      marginHorizontal: 30,
    },
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
    buttons: {
      marginTop: 60,
      marginHorizontal: 30,
      marginBottom: 200,
    },
  });
  return (
    <Screen
      title="Search"
      isheaderVisible
      onBackPress={() => navigation.goBack()}>
      <View style={styles.floatinputcontainer}>
        <FloatingLabelInput
          label="Search"
          search
          onChangeText={text => console.log(text)}
          onBlur={() => console.log()}
        />
      </View>

      <View style={styles.ageContainer}>
        <Text style={styles.agetext}>Age</Text>
        <Text style={styles.between}>
          Between <Text style={styles.age}>{low}</Text> and{' '}
          <Text style={styles.age}>{high}</Text> years
        </Text>
        <RangeSlider
          style={styles.slider}
          min={18}
          max={50}
          step={1}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
      </View>

      <View style={styles.ageContainer}>
        <Text style={styles.agetext}>Distance</Text>
        <Text style={styles.between}>
          Between <Text style={styles.age}>{minDistane}</Text> and{' '}
          <Text style={styles.age}>{maxDistance}</Text> kilometres away
        </Text>
        <RangeSlider
          style={styles.slider}
          min={0}
          max={900}
          step={1}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={distanceValueChange}
        />
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

      <View style={styles.passionholder}>
        <Text style={styles.passionname}>Education</Text>

        <View style={styles.passioniteholder}>
          <PassionItem label={'High school diploma'} />
          <PassionItem label={'College diploma'} />
        </View>
        <View style={styles.passioniteholder}>
          <PassionItem label={'Master’s degree'} />
        </View>
        <View style={styles.passioniteholder}>
          <PassionItem label={'Doctoral research degree (PhD)'} />
        </View>
      </View>

      <View style={styles.passionholder}>
        <Text style={styles.passionname}>More</Text>

        <View style={styles.passioniteholder}>
          <PassionItem label={'Smokes'} />
          <PassionItem label={'Drinks'} />
        </View>
        <View style={styles.passioniteholder}>
          <PassionItem label={'Has pets'} />
          <PassionItem label={'Has children'} />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          onPress={() => navigation.navigate('exporeScreen', {isSearch: true})}>
          Search
        </Button>
      </View>
    </Screen>
  );
}
