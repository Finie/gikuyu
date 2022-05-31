import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BottomModal, ModalContent} from 'react-native-modals';

import Dropdown from 'src/assets/icons/dropdown.svg';
import Text from './Text';
import useThemeStyles from 'src/hooks/useThemeStyles';

const DropDwon = ({title, description}) => {
  const {colors} = useThemeStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const styles = StyleSheet.create({
    dropcontainer: {
      borderWidth: 0.3,
      padding: 8,
      borderRadius: 10,
      borderColor: colors.silver,
      marginVertical: 10,
    },
    header: {},
    description: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 12,
    },
    desc: {
      color: colors.black,
    },
  });
  return (
    <>
      <View style={styles.dropcontainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.header}>{title}</Text>
          <View style={styles.description}>
            <Text style={styles.desc}>{description}</Text>
            <Dropdown />
          </View>
        </TouchableOpacity>
      </View>

      <BottomModal
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(false)}
        height={0.5}
        width={1}
        onSwipeOut={() => setModalVisible(false)}>
        <ModalContent>
          <View></View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default DropDwon;
