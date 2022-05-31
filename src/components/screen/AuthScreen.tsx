import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';
import Logo from 'src/assets/icons/gikuyulogo.png';
import BackButton from 'src/assets/icons/backbutton.svg';
import useThemeStyles from 'src/hooks/useThemeStyles';

type Props = {
  onBackPressed: () => void;
  children: ReactNode;
};

const AuthScreen: React.FC<Props> = props => {
  const {onBackPressed, children} = props;

  const {colors} = useThemeStyles();

  const styles = StyleSheet.create({
    continer: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      flexGrow: 1,
      backgroundColor: colors.white,
    },
    image: {
      width: 35,
      height: 35,

      marginHorizontal: 8,
    },
    appbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 30,
    },
    apptouchable: {
      padding: 8,
    },
    scrol: {
      flexGrow: 1,
    },
  });
  return (
    <SafeAreaView style={styles.continer}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View style={styles.appbar}>
        <TouchableOpacity onPress={onBackPressed} style={styles.apptouchable}>
          <BackButton />
        </TouchableOpacity>

        <Image style={styles.image} source={Logo} />
      </View>
      <ScrollView contentContainerStyle={styles.scrol}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
