import * as React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {onScrollEvent} from 'react-native-redash';
// import {onScrollEvent} from 'react-native-redash/lib/module/v1';

import {Album, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT} from './Model';
import Track from './Track';
import ShufflePlay, {BUTTON_HEIGHT} from './ShufflePlay';
import Header from './Header';
import {colors} from '@react-spring/shared';
import Text from '../Text';

import ArrowBack from 'src/assets/icons/arrowback.svg';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Chat from 'src/assets/icons/chatwhite.svg';
import Direction from 'src/assets/icons/directions.svg';
import Musicnote from 'src/assets/icons/musicnote.svg';
import Fashion from 'src/assets/icons/fashionprimary.svg';
import PaintPrimary from 'src/assets/icons/fooddrinkprimary.svg';
import Foodiconprimaty from 'src/assets/icons/paintprimary.svg';
import BirthDayCake from 'src/assets/icons/birthdaycake.svg';
import Close from 'src/assets/icons/close.svg';
import Block from 'src/assets/icons/block.svg';

interface ContentProps {
  album: Album;
  y: Animated.Value<number>;
}

const {interpolateNode, Extrapolate} = Animated;

export default ({album: {artist, tracks}, y}: ContentProps) => {
  const {colors} = useThemeStyles();
  const height = interpolateNode(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolateNode(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
    },
    cover: {
      height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
    },
    gradient: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      alignItems: 'center',
    },
    artistContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    artist: {
      textAlign: 'center',
      color: 'white',
      fontSize: 48,
      fontWeight: 'bold',
    },
    header: {
      marginTop: -BUTTON_HEIGHT,
    },
    tracks: {
      paddingTop: 32,
      backgroundColor: colors.white,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      flexGrow: 1,
      paddingHorizontal: 30,
    },
    scroll: {
      flexGrow: 1,
    },

    nametext: {
      fontSize: 32,
      fontWeight: '600',
      lineHeight: 39,
      color: colors.black,
    },

    directioncontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 16,
    },
    directionstyles: {fontSize: 12, marginLeft: 16},
    abountcontainer: {
      marginVertical: 15,
    },
    about: {
      fontSize: 20,
      lineHeight: 24,
      color: colors.black,
    },
    description: {
      color: colors.black,
      marginVertical: 16,
    },
    touch: {
      flexDirection: 'row',
      backgroundColor: colors.snow,
      padding: 12,
      marginRight: 16,
      marginTop: 16,
      borderRadius: 10,
    },
    touchtitle: {
      fontSize: 12,
      lineHeight: 14,
      marginLeft: 16,
      color: colors.black,
    },
    moreabout: {fontSize: 20, lineHeight: 24, color: colors.black},
    moreaboutdescription: {
      fontSize: 16,
      lineHeight: 19,
      color: colors.black,
      marginTop: 10,
    },
    bottom: {
      marginBottom: 150,
    },
  });
  return (
    <Animated.ScrollView
      onScroll={onScrollEvent({y})}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      contentContainerStyle={styles.scroll}
      stickyHeaderIndices={[1]}>
      <View style={styles.cover} />
      <View style={styles.header}>
        <Header {...{y, artist}} />
      </View>
      <View style={styles.tracks}>
        <Text style={styles.nametext}>Adam, 32</Text>

        <View style={styles.directioncontainer}>
          <Direction />
          <Text style={styles.directionstyles}>16 miles away</Text>
        </View>

        <View style={styles.abountcontainer}>
          <Text style={styles.about}>About</Text>
          <Text style={styles.description}>
            I’m single and 22 years old. I love design, travelling, and going
            out to play. You can find me in Nairobi trying out local
            restaurants.
          </Text>
        </View>

        <View style={styles.abountcontainer}>
          <Text style={styles.about}>I’m looking for ...</Text>
          <Text style={styles.description}>
            I’m single and 22 years old. I love design, travelling, and going
            out to play. You can find me in Nairobi trying out local
            restaurants.
          </Text>
        </View>

        <View style={styles.abountcontainer}>
          <Text style={styles.about}>I love</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touch}>
              <Musicnote />
              <Text style={styles.touchtitle}>Arts & Music</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Fashion />
              <Text style={styles.touchtitle}>Fashion</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <BirthDayCake />
              <Text style={styles.touchtitle}>Food & Drink</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touch}>
              <PaintPrimary />
              <Text style={styles.touchtitle}>Painting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Foodiconprimaty />
              <Text style={styles.touchtitle}>Travel & Places</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.moreabout}>More about me</Text>
          <Text style={styles.moreaboutdescription}>Ethnicity: Gusii</Text>
        </View>
      </View>
    </Animated.ScrollView>
  );
};
