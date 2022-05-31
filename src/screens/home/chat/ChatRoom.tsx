import {View, StyleSheet, TextInput, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatScreen from 'src/components/screen/ChatScreen';
import CurrentUserFirstBubble from 'src/components/view/CurrentUserFirstBubble';
import CurrentUserSecondBubble from 'src/components/view/CurrentUserSecondBubble';
import OtherUserFirstBubble from 'src/components/view/OtherUserFirstBubble';
import OtherUserSecondBubble from 'src/components/view/OtherUserSecondBubble';
import useThemeStyles from 'src/hooks/useThemeStyles';

import SendIcon from 'src/assets/icons/sendicon.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ChatRoom({navigation, route}) {
  const {data} = route.params;

  const {colors} = useThemeStyles();

  const [message, setMessage] = useState('');

  const [thread, setThread] = useState([
    {
      id: 0,
      userId: 0,
      message: 'Hi Irene 👋',
      time: '8.00pm',
    },
    {
      id: 1,
      userId: 0,
      message:
        'My name is Adam, I’m 24 years old. It looks like we have a lot of similarities to each other. Can I know you a bit more? 😁',
      time: '8.01pm',
    },
    {
      id: 2,
      userId: 1,
      message: 'Hi Adam ...',
      time: '8.00pm',
    },
    {
      id: 3,
      userId: 1,
      message:
        'I’m Jenny, I’m 21 years old. I currently live in Los Angeles 😊',
      time: '8.00pm',
    },
    {
      id: 4,
      userId: 0,
      message: 'Where are you from?',
      time: '8.00pm',
    },
  ]);

  /**
   * react hook
   * @returns triggers forceupdate
   */

  //create your forceUpdate hook
  function useForceUpdate() {
    return () => {
      setMessage('');
      setThread([
        {
          id: thread.length + 1,
          userId: 0,
          message: message,
          time: '8.00pm',
        },
        ...thread,
      ]);
    }; // update the state to force render
  }

  const styles = StyleSheet.create({
    messagecontainer: {
      justifyContent: 'flex-end',
      flexGrow: 1,
    },

    inputFieldcontainer: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.snow,
      flexDirection: 'row',
      margin: 8,
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors.white,
      zIndex: 10,
    },
    inputfield: {
      padding: 20,
      justifyContent: 'center',
      flex: 1,
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '400',
      minHeight: 56,
    },
    sendButton: {
      padding: 16,
      justifyContent: 'center',
    },
    incontainer: {
      backgroundColor: colors.white,
      width: '100%',
      flex: 1,
    },
  });

  const onChangeText = (text: string) => {
    setMessage(text);
  };

  const forceUpdate = useForceUpdate();

  return (
    <ChatScreen
      image={data.image}
      isheaderVisible
      onBackPress={() => navigation.goBack()}
      title={data.name}>
      <View style={{flex: 9, paddingTop: 16}}>
        <FlatList
          contentContainerStyle={styles.messagecontainer}
          data={thread}
          inverted
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            switch (item.userId) {
              case 0:
                return (
                  <CurrentUserFirstBubble
                    message={item.message}
                    time={item.time}
                  />
                );

              default:
                return (
                  <OtherUserFirstBubble
                    message={item.message}
                    time={item.time}
                  />
                );
            }
          }}
        />
        <ScrollView>{thread.map((item, index) => {})}</ScrollView>
      </View>

      <View style={styles.incontainer}>
        <View style={styles.inputFieldcontainer}>
          <TextInput
            // multiline
            style={styles.inputfield}
            placeholder="Message ..."
            onChangeText={onChangeText}
            value={message}
          />

          <TouchableOpacity onPress={forceUpdate} style={styles.sendButton}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ChatScreen>
  );
}
