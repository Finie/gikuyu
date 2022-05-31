import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import React, {useRef} from 'react';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Text from '../Text';
import Irene from 'src/assets/images/sliderone.png';
import LeftSwipeIcon from 'src/assets/icons/leftswipeicon.svg';
import RightSwipable from 'src/assets/icons/rightswipable.svg';

type Props = {
  data: {
    id: number;
    name: String;
    image: URL;
    unread?: number;
    text?: string;
  };

  index: number;
  onClick: () => void;
};

const ChatListItem: React.FC<Props> = ({data, index, onClick}) => {
  const {colors} = useThemeStyles();

  let row: Array<any> = [];
  let prevOpenedRow;

  const onRenderLeftAction = (progress, dragX, onClick) => {
    return (
      <TouchableOpacity style={styles.leftswipe}>
        <LeftSwipeIcon />
      </TouchableOpacity>
    );
  };

  const renderRightActions = (progress, dragX, onClick) => {
    return (
      <TouchableOpacity style={styles.rightswipable}>
        <RightSwipable />
      </TouchableOpacity>
    );
  };

  const closeRow = index => {};

  const styles = StyleSheet.create({
    rightswipable: {
      backgroundColor: colors.danger,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
    },
    leftswipe: {
      backgroundColor: colors.warning,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
    },
    touchableOpacity: {
      flexDirection: 'row',
      paddingHorizontal: 30,
      backgroundColor: colors.white,
      height: 90,
    },
    image: {
      width: 56,
      height: 56,
      borderRadius: 28,
    },

    imageContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    centercontainer: {
      flex: 4,
      paddingHorizontal: 16,
      justifyContent: 'center',
      marginBottom: 6,
    },
    endcontainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    numberholder: {
      backgroundColor: colors.primary,
      width: 20,
      height: 20,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 6,
    },
    numberofunred: {
      color: colors.white,
      fontSize: 12,
      lineHeight: 14,
    },
    name: {
      fontSize: 20,
      lineHeight: 24,
      color: colors.black,
      fontWeight: '600',
      marginBottom: 6,
    },
    message: {
      fontSize: 12,
      lineHeight: 16,
    },
    time: {
      fontSize: 12,
      lineHeight: 14,
    },
    timewraper: {
      height: 40,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });
  return (
    <Swipeable
      renderLeftActions={onRenderLeftAction}
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => closeRow(index)}
      ref={ref => (row[index] = ref)}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onClick}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={data.image} />
        </View>
        <View style={styles.centercontainer}>
          <Text numberOfLines={1} style={styles.name}>
            {data.name}
          </Text>
          <Text numberOfLines={1} style={styles.message}>
            {data.text}
          </Text>
        </View>
        <View style={styles.endcontainer}>
          <View style={styles.timewraper}>
            {data.unread > 0 && (
              <View style={styles.numberholder}>
                <Text numberOfLines={1} style={styles.numberofunred}>
                  {data.unread}
                </Text>
              </View>
            )}

            <Text numberOfLines={1} style={styles.time}>
              11:30am
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ChatListItem;
