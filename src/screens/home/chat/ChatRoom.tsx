import {View, StyleSheet, TextInput, ScrollView, FlatList} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Manager} from 'socket.io-client';

import moment from 'moment';

import {CompatClient, Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import ChatScreen from 'src/components/screen/ChatScreen';
import CurrentUserFirstBubble from 'src/components/view/CurrentUserFirstBubble';
import CurrentUserSecondBubble from 'src/components/view/CurrentUserSecondBubble';
import OtherUserFirstBubble from 'src/components/view/OtherUserFirstBubble';
import OtherUserSecondBubble from 'src/components/view/OtherUserSecondBubble';
import useThemeStyles from 'src/hooks/useThemeStyles';

import SendIcon from 'src/assets/icons/sendicon.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MessageItem, UserMatchType} from 'src/utils/shared.types';
import Helpers from 'src/Helpers';
import AnimatedLottieView from 'lottie-react-native';
import Text from 'src/components/Text';
import BaseContextProvider from 'src/context/BaseContextProvider';
import EncryptionStore from 'src/data/EncryptionStore';
import chatRouter from 'src/api/routers/chatRouter';

// let stompClient: CompatClient | null = null;

const baseUrl = 'http://165.22.28.94';

export default function ChatRoom({navigation, route}) {
  const {data, token, usename} = route.params;
  const [bearerToken, setBearerToken] = useState(token);
  const [userName, setUserName] = useState(usename);
  const [isConnected, setisConnected] = useState(false);
  const [newdata, setNewData] = useState({});
  const {userData} = useContext(BaseContextProvider);

  const updateData = useCallback(() => {
    console.log(
      '====================================\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
    );
    console.log(thread);
    console.log(
      '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n====================================',
    );
    setThread(thread);
  }, []);

  // const forceUpdate = updateData();

  const [receiver, setReceiver] = useState('');

  const userInfo: UserMatchType = data;

  const header = {
    Authorization: 'Bearer ' + bearerToken,
    'App-ID': 1,
  };

  const stompClient = Stomp.over(() => new SockJS(baseUrl + '/chat-ws'));
  stompClient.configure({
    reconnectDelay: 5000,
  });
  stompClient.connect(header, onConnected, onError);

  function onConnected(data: any) {
    // console.log('====================================');
    // console.log('is now connected :::::: ', data);
    // console.log('====================================');

    //Subscribe to private
    stompClient?.subscribe('/user/' + userName + '/private', onMessageReceived);

    //Subscribe to errors
    stompClient?.subscribe('/queue/errors', onErrorReceived);

    //Tell your username to the server
    stompClient?.send(
      '/api/message',
      header,
      JSON.stringify({sender: userName, type: 'JOIN'}),
    );

    setisConnected(true);
  }

  function onError(error: any) {
    console.log('====================================');
    console.log(error);
    console.log(
      'Could not connect to WebSocket server. Please refresh this page to try again!',
    );
    console.log('====================================');
  }

  function onErrorReceived(payload: {body: any}) {
    console.log(payload.body);
  }

  function onMessageReceived(payload: {body: string}) {
    console.log("We're here ::::", payload);

    const message = JSON.parse(payload.body);
    // setThread((thread: any) => [...thread, message]);

    thread.push(message);

    updateData();

    console.log(
      '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n===============Messages recieved=====================',
    );
    console.log(message);
    console.log('====================================\n\n\n\n\n\n\n\n\n\n\n');
  }

  const sendMessage = async () => {
    // console.log('====================================');
    // console.log('the message');
    // console.log(message);
    // console.log('====================================');
    // return;

    updateData();

    if (message !== '') {
      const chatMessage = {
        sender: userName,
        receiver: userInfo.user.username,
        content: message,
        type: 'CHAT',
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      // console.log('====================================');
      // console.log('Sending message :::: ');
      // console.log('Header :::: ', header);
      // console.log('message :::: ', JSON.stringify(chatMessage));
      // console.log('====================================');

      stompClient?.send(
        '/api/private-message',
        header,
        JSON.stringify(chatMessage),
      );

      const messageRequest: MessageItem = {
        content: message,
        created_on: `${new Date(Date.now())}`,
        id: 0,
        sender: userName,
      };

      // thread.concat(messageRequest);
      setThread([...thread, messageRequest]);
      setNewData(messageRequest);

      // setThread((thread: any) => [...thread, chatMessage]);
      setMessage('');
    }
  };

  const {colors} = useThemeStyles();

  const [message, setMessage] = useState('');

  const [thread, setThread] = useState([] as any);

  const fetchChalog = async () => {
    const response = await chatRouter.getIndividualMessages(
      data.user.username,
      1,
      100,
    );

    if (response.ok) {
      // console.log('====================================');
      // console.log(response.data.data);
      // console.log('====================================');

      setThread(response.data.data);
    }

    // console.log('====================================');
    // console.log(response);
    // console.log('====================================');
  };

  useEffect(() => {
    fetchChalog();
  }, []);

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

  // const forceUpdate = useForceUpdate();

  return (
    <ChatScreen
      image={data?.image || ''}
      isheaderVisible
      onBackPress={() => navigation.goBack()}
      title={`${userInfo.user.first_name} ${userInfo.user.last_name}`}>
      {Helpers.isEmpty(thread) ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <AnimatedLottieView
            autoPlay={true}
            loop={false}
            style={{height: 200}}
            source={require(`src/assets/lottie/nomessage.json`)}
          />

          <Text style={{fontSize: 24, lineHeight: 32, marginTop: 16}}>
            No previous chats
          </Text>
        </View>
      ) : (
        <View style={{flex: 9, paddingTop: 16}}>
          <FlatList
            contentContainerStyle={styles.messagecontainer}
            data={thread}
            inverted
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              if (item.sender === userName) {
                return (
                  <CurrentUserFirstBubble
                    message={item.content}
                    time={moment(item.created_on).format('HH:MM a')}
                  />
                );
              } else {
                return (
                  <OtherUserFirstBubble
                    message={item.content}
                    time={moment(item.created_on).format('HH:MM a')}
                  />
                );
              }
            }}
          />
        </View>
      )}

      <View style={styles.incontainer}>
        <View style={styles.inputFieldcontainer}>
          <TextInput
            // multiline
            style={styles.inputfield}
            placeholder="Message ..."
            onChangeText={onChangeText}
            value={message}
          />

          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ChatScreen>
  );
}
