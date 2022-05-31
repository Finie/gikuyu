import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import background from 'src/assets/images/moneyheader.png';
import Text from 'src/components/Text';
import BackButton from 'src/assets/images/whiteback.svg';
import FireBlaze from 'src/assets/icons/fireblaze.svg';
import useThemeStyles from 'src/hooks/useThemeStyles';

import CancelingItem from 'src/components/CancelingItem';
import Rewind from 'src/assets/icons/modalrewind.svg';
import Inclusive from 'src/assets/icons/inclusive.svg';
import Schedule from 'src/assets/icons/schedule.svg'; //border.svg
import Heart from 'src/assets/icons/border.svg'; //
import PlanItem from 'src/components/view/PlanItem';

export default function PriceQuotation() {
  const {colors} = useThemeStyles();

  const [active, setActive] = useState(1);
  const styles = StyleSheet.create({
    imagebackground: {
      height: 270,
    },
    scroll: {
      flexGrow: 1,
      backgroundColor: colors.snow,
    },

    topview: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    fireblazeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 190,
      marginHorizontal: 30,
    },
    textStyle: {
      color: colors.white,
      fontSize: 32,
      lineHeight: 38.88,
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 30,
    },
    afterbimage: {
      backgroundColor: colors.white,
    },

    meetingtext: {
      fontSize: 20,
      lineHeight: 24,
      color: colors.black,
      fontWeight: '400',
      textAlign: 'center',
      marginHorizontal: 30,
      marginVertical: 40,
    },
    listitems: {
      marginBottom: 40,
    },
    contents: {
      height: 40,
      flexDirection: 'row',
    },
    buttonback: {
      padding: 8,
      justifyContent: 'center',
      marginLeft: 15,
    },
    pickplsntext: {
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      marginVertical: 30,
    },
    plaintext: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    palinitem: {
      flex: 1,
      padding: 16,
    },
    pickcontainer: {justifyContent: 'center', alignItems: 'center'},
    plaintextlast: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 60,
    },
  });
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <ImageBackground style={styles.imagebackground} source={background}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="light-content"
        />
        <SafeAreaView>
          <View style={styles.contents}>
            <TouchableOpacity style={styles.buttonback}>
              <BackButton />
            </TouchableOpacity>
            <View style={styles.contents} />
          </View>
          <View style={styles.fireblazeContainer}>
            <FireBlaze />
            <Text style={styles.textStyle}>Upgrade to Gikuyu Singles Gold</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.afterbimage}>
        <Text style={styles.meetingtext}>
          Meeting your perfect Gikuyu match is easier when you can share better,
          unlimited connections with them.
        </Text>

        <View style={styles.listitems}>
          <CancelingItem
            title={'Rewind to profiles you already rated'}
            icon={<Rewind />}
          />
          <CancelingItem
            title={'Chat with no limitations'}
            icon={<Inclusive />}
          />
          <CancelingItem
            title={'Enhance your profile’s privacy'}
            icon={<Schedule />}
          />
          <CancelingItem
            title={'Shine with more photos & videos'}
            icon={<Inclusive />}
          />
          <CancelingItem title={'Create better connections'} icon={<Heart />} />
        </View>
      </View>

      <View style={styles.pickcontainer}>
        <Text style={styles.pickplsntext}>Pick a Plan</Text>
      </View>

      <View style={styles.plaintext}>
        <View style={styles.palinitem}>
          <PlanItem
            index={1}
            active={active}
            priceperMonth={'300/month'}
            total={'KSh 300'}
            months={'1'}
            onPress={() => setActive(1)}
          />
        </View>
        <View style={styles.palinitem}>
          <PlanItem
            index={2}
            active={active}
            priceperMonth={'285/month'}
            total={'KSh 850'}
            months={'3'}
            onPress={() => setActive(2)}
          />
        </View>
      </View>

      <View style={styles.plaintextlast}>
        <View style={styles.palinitem}>
          <PlanItem
            index={3}
            active={active}
            priceperMonth={'200/month'}
            total={'KSh 1200'}
            months={'6'}
            onPress={() => setActive(3)}
          />
        </View>
      </View>
    </ScrollView>
  );
}
