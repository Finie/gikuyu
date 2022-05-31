import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Outline from 'src/assets/icons/loveoutline.svg';
import Text from 'src/components/Text';
import FloatingLabelInput from 'src/components/FloatingLabelInput';
import MatchItem from 'src/components/view/MatchItem';
export default function MatchesScreen() {
  const {colors} = useThemeStyles();

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.white,
    },
    backgroundimage: {
      width: '100%',
      height: 200,
      alignItems: 'center',
      paddingTop: 40,
    },
    matches: {
      fontSize: 32,
      lineHeight: 39,
      color: colors.white,
      fontWeight: '700',
      marginVertical: 16,
    },
    matchesdescription: {
      fontSize: 12,
      lineHeight: 15,
      textAlign: 'center',
      marginHorizontal: 80,
      color: colors.white,
    },
    floatview: {
      marginHorizontal: 30,
    },
    scrollflex: {
      flexGrow: 1,
    },
  });
  return (
    <ScrollView
      contentContainerStyle={styles.scrollflex}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../assets/images/homeheader.png')}
        style={styles.backgroundimage}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="light-content"
        />
        <Outline />

        <Text style={styles.matches}>Matches</Text>
        <Text style={styles.matchesdescription}>
          You matched profiles. You liked each other. Now take it to the next
          level.
        </Text>
      </ImageBackground>
      <View style={styles.floatview}>
        <FloatingLabelInput label={'Search'} search />
      </View>

      <View style={{marginBottom: 60}}>
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem isNew />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
        <View style={{backgroundColor: colors.snow, height: 2}} />
        <MatchItem />
      </View>
    </ScrollView>
  );
}
