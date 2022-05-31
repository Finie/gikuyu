import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

import useThemeStyles from 'src/hooks/useThemeStyles';
import Text from '../Text';
import MessageOutline from 'src/assets/icons/messageoutline.svg';
import StarOutline from 'src/assets/icons/startoutline.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  isNew?: boolean;
};
const MatchItem: React.FC<Props> = props => {
  const {colors} = useThemeStyles();

  const {isNew} = props;

  const styles = StyleSheet.create({
    image: {width: 56, height: 56, borderRadius: 28},
    container: {
      flexDirection: 'row',
      paddingHorizontal: 30,
      marginVertical: 15,
    },
    centercontainer: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 16,
      flexDirection: 'row',
    },
    newcontainer: {
      height: 35,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginHorizontal: 16,
    },
    newtext: {
      color: colors.white,
      padding: 6,
    },
    endconatiner: {
      flexDirection: 'row',
    },
    touchable: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      padding: 12,
    },
    nameitem: {
      fontSize: 16,
      lineHeight: 20,
      color: colors.black,
      fontWeight: '600',
    },
  });
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/sliderone.png')}
        />
      </View>

      <View style={styles.centercontainer}>
        <Text style={styles.nameitem}>Irene Wambui</Text>

        {isNew && (
          <View style={styles.newcontainer}>
            <Text style={styles.newtext}>New</Text>
          </View>
        )}
      </View>

      <View style={styles.endconatiner}>
        <TouchableOpacity style={styles.touchable}>
          <StarOutline />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <MessageOutline />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchItem;
