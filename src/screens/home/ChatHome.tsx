import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import React from 'react';
// import {SwipeListView} from 'react-native-swipe-list-view';
import Screen from 'src/components/screen/Screen';
import Text from 'src/components/Text';

import HumberButton from 'src/assets/icons/humberbutton.svg';
import FloatingLabelInput from 'src/components/FloatingLabelInput';
import ChatListItem from 'src/components/view/ChatListItem';
import Slideonr from 'src/assets/images/sliderone.png';
import Slidetwo from 'src/assets/images/slidethree.png';
import useThemeStyles from 'src/hooks/useThemeStyles';

export default function ChatHome({navigation}) {
  const {colors} = useThemeStyles();
  const data = [
    {
      id: 0,
      name: 'Irene Wambui',
      image: Slideonr,
      unread: 5,
      text: 'I know this fire restaurant close to',
    },
    {
      id: 1,
      name: 'Jenny Shiro',
      image: Slidetwo,
      unread: 0,
      text: 'Haha that’s terrifying 😅',
    },
    {
      id: 2,
      name: 'Annette Kamau',
      image: Slideonr,
      unread: 2,
      text: 'Just ideas for next time',
    },
    {
      id: 3,
      name: 'Esther Wanja',
      image: Slidetwo,
      unread: 0,
      text: 'Almost there, in a taxi atm',
    },
    {
      id: 4,
      name: 'Irene Wambui',
      image: Slideonr,
      unread: 0,
      text: 'Perfect! 😊',
    },
    {
      id: 5,
      name: 'Teresa Kui',
      image: Slidetwo,
      unread: 0,
      text: 'I know this fire restaurant close to ',
    },
    {
      id: 6,
      name: 'Annette Kui',
      image: Slideonr,
      unread: 0,
      text: 'Haha that’s terrifying 😅',
    },
  ];
  const styles = StyleSheet.create({
    viewitem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
    },
    search: {
      marginHorizontal: 20,
    },
    flatlistContainer: {
      backgroundColor: colors.white,
      flexGrow: 1,
    },
    flatList: {},

    safearea: {
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      paddingTop: 40,
    },
    bottom: {
      marginBottom: 100,
      backgroundColor: colors.white,
    },
    separator: {
      height: 1,
      backgroundColor: colors.snow,
    },
  });

  const _headerComponent = () => {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.viewitem}>
          <Text>Chat</Text>

          <TouchableOpacity>
            <HumberButton />
          </TouchableOpacity>
        </View>

        <View style={styles.search}>
          <FloatingLabelInput
            onChangeText={text => console.log(text)}
            onBlur={() => console.log}
            label="Search"
            search
          />
        </View>
      </SafeAreaView>
    );
  };
  const Separator = () => {
    return <View style={styles.separator} />;
  };
  const _Footer = () => <View style={styles.bottom} />;
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.flatlistContainer}
      ListHeaderComponent={_headerComponent}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({item, index}) => (
        <ChatListItem
          data={item}
          index={index}
          onClick={() => navigation.navigate('messageUi', {data: item})}
        />
      )}
      ListFooterComponent={_Footer}
    />
  );
}
