import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Modal, ModalContent} from 'react-native-modals';

import Text from 'src/components/Text';
import useThemeStyles from 'src/hooks/useThemeStyles';
import ProfileOutline from 'src/components/ProfileOutline';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CircularButton from 'src/components/CircularButton';
import Profile from 'src/assets/images/profile.png';
import CloseIcon from 'src/assets/icons/close.svg';
import Listred from 'src/assets/icons/listred.svg';
import Link from 'src/components/Link';

import Face from 'src/assets/icons/face.svg';
import Tune from 'src/assets/icons/tune.svg';
import Security from 'src/assets/icons/securityicon.svg';
import Support from 'src/assets/icons/support.svg';
import ProfButton from 'src/components/pressable/ProfButton';
import Whatshot from 'src/assets/icons/whatshot.svg';
import Whatshotbig from 'src/assets/icons/whatshottwo.svg';
import Button from 'src/components/pressable/Button';
import CancelingItem from 'src/components/CancelingItem';
import Rewind from 'src/assets/icons/modalrewind.svg';
import Inclusive from 'src/assets/icons/inclusive.svg';
import Schedule from 'src/assets/icons/schedule.svg'; //border.svg
import Heart from 'src/assets/icons/border.svg'; //

export default function ProfileScreen({navigation}) {
  const {colors} = useThemeStyles();

  const [isModalVisible, setModalIsVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.white,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    },

    text: {
      color: colors.silver,
      fontSize: 16,
      lineHeight: 20,
    },
    scroll: {
      flexGrow: 1,
    },

    profileholder: {
      alignItems: 'center',
    },
    buttoncont: {
      marginTop: -40,
    },
    namejoincont: {
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      lineHeight: 24.3,
      fontWeight: '600',
      color: colors.black,
      marginBottom: 11,
    },
    joined: {
      fontSize: 12,
      lineHeight: 14.58,
      fontWeight: '600',
      color: colors.black,
      marginBottom: 11,
    },
    listred: {
      flexDirection: 'row',
      backgroundColor: '#FF22220F',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 16,
    },
    listredtext: {
      fontSize: 12,
      lineHeight: 14.58,
      fontWeight: '400',
      color: colors.danger,
      marginLeft: 8,
    },
    closecont: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cliseicon: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginLeft: 16,
      padding: 8,
    },
    desctext: {
      marginTop: 15,
      textAlign: 'center',
      fontSize: 14,
      lineHeight: 17,
      color: colors.black,
    },
    descover: {
      padding: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
      backgroundColor: colors.white,
      margin: 30,
      borderRadius: 10,
    },
    checkout: {
      marginTop: 15,
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '700',
      color: colors.secondary,
    },
    step: {
      textAlign: 'center',
      marginTop: 15,
    },
    bottomlayout: {
      backgroundColor: colors.accent,
      marginHorizontal: 30,
      marginTop: 30,
      marginBottom: 60,
      borderRadius: 10,
      padding: 30,
    },
    whats: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    whatstext: {
      fontSize: 24,
      lineHeight: 29,
      color: colors.primary,
      fontWeight: '700',
    },
    unlimited: {
      textAlign: 'center',
      marginVertical: 20,
      color: colors.black,
    },
    autorew: {
      fontSize: 12,
      lineHeight: 14.55,
      color: colors.primary,
      textAlign: 'center',
      fontWeight: '700',
    },
    link: {
      color: colors.danger,
      fontSize: 12,
      lineHeight: 14.56,
      fontWeight: '700',
    },
    cancel: {
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    toplayout: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 15,
    },
    modaldescription: {
      fontSize: 32,
      lineHeight: 39,
      fontWeight: '700',
      color: colors.primary,
    },
    modelcanceldisclaimer: {
      fontSize: 16,
      lineHeight: 19.44,
      marginVertical: 40,
      marginHorizontal: 8,
      color: colors.black,
      fontWeight: '400',
      textAlign: 'center',
    },
    listitems: {
      marginBottom: 40,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <View style={styles.profileholder}>
          <ProfileOutline image={Profile} />

          <View style={styles.buttoncont}>
            <CircularButton />
          </View>
        </View>

        <View style={styles.namejoincont}>
          <Text style={styles.name}>Adam Weko</Text>
          <Text>Joined two weeks ago</Text>
        </View>

        <View style={styles.descover}>
          <View style={styles.closecont}>
            <View style={styles.listred}>
              <Listred />
              <Text style={styles.listredtext}>
                Your profile needs some more detail
              </Text>
            </View>

            <TouchableOpacity style={styles.cliseicon}>
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <Text style={styles.desctext}>
            Add some more photos to your profile to shop some personality and
            get more matches.
          </Text>

          <Link style={styles.checkout} title={'Check it out →'} />

          <Text style={styles.step}>1/3</Text>
        </View>

        <View>
          <ProfButton
            title="About Me"
            Icon={<Face />}
            onClick={() => navigation.navigate('aboutScreen')}
          />
          <ProfButton
            title="Preferences"
            Icon={<Tune />}
            onClick={() => navigation.navigate('preference')}
          />
          <ProfButton
            title="Security"
            Icon={<Security />}
            onClick={() => console.log()}
          />
          <ProfButton
            title="Safety & Help Center"
            Icon={<Support />}
            onClick={() => console.log()}
          />
        </View>

        <View style={styles.bottomlayout}>
          <View style={styles.whats}>
            <Whatshot />
            <Text style={styles.whatstext}>My Gikuyu Singles Gold</Text>
          </View>

          <Text style={styles.unlimited}>
            3 months of unlimited swipes, matches, chats, and more
          </Text>

          <Text style={styles.autorew}>
            Automatically renews on May 25, 2023 12:31pm
          </Text>

          <TouchableOpacity
            onPress={() => setModalIsVisible(true)}
            style={styles.cancel}>
            <Text style={styles.link}>Cancel My Subscription →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        width={'95%'}
        swipeThreshold={200} // default 100
        onTouchOutside={() => {
          setModalIsVisible(false);
        }}>
        <ModalContent>
          <View style={styles.toplayout}>
            <Whatshotbig />
            <Text style={styles.modaldescription}>Are you sure?</Text>
          </View>

          <Text style={styles.modelcanceldisclaimer}>
            Canceling your subscription instantly downgrades your experience to
            the free plan and some features will be limited. You will not be
            able to:
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
            <CancelingItem
              title={'Create better connections'}
              icon={<Heart />}
            />
          </View>

          <Button onPress={() => setModalIsVisible(false)}>
            Confirm Cancellation
          </Button>
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
}
