import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Carousel from 'react-native-anchor-carousel';

import Logo from 'src/assets/icons/gikuyulogo.png';
import Text from 'src/components/Text';
import Button from 'src/components/pressable/Button';
import Slider1 from 'src/assets/images/sliderone.png'; //
import Slider2 from 'src/assets/images/slidetwo.png';
import Slider3 from 'src/assets/images/slidethree.png';
import ImageWhite from 'src/assets/images/images.png';

export default function Onboarding({navigation}) {
  const {colors, text} = useThemeStyles();
  const [renderNext, setrenderNext] = useState(0);
  const [header, setHeader] = useState('Find your one person, your');
  const [description, setdescription] = useState(' perfect match');

  const {width: windowWidth} = Dimensions.get('window');
  var carousel = useRef(null);

  console.log('====================================');
  console.log(JSON.stringify(carousel.current));
  console.log('====================================');

  // useEffect(() => {
  //   if (carousel !== null) {
  //     carousel.current.scrollToIndex(renderNextto);
  //   }
  // }, []);

  const data = [
    {
      id: 0,
      image: ImageWhite,
    },
    {
      id: 1,
      image: Slider1,
    },
    {
      id: 2,
      image: Slider3,
    },
    {
      id: 3,
      image: Slider2,
    },
    {
      id: 4,
      image: ImageWhite,
    },
  ];

  const onScrollEvent = (value: number) => {
    switch (value) {
      case 1:
        setHeader('Find your one person, your');
        setdescription(' perfect match');
        setrenderNext(1);
        break;
      case 3:
        setHeader('Get chatting about things');
        setdescription('you both love');
        setrenderNext(0);
        break;

      case 1:
        setHeader('Find your one person, your');
        setdescription(' perfect match');
        setrenderNext(1);
        break;

      case 2:
        setHeader('Don’t wait. Find your');
        setdescription(' soulmate now');
        setrenderNext(2);
        break;

      default:
        break;
    }
    console.log(value);
  };

  const onNextClick = () => {
    if (renderNext === 4) {
      setrenderNext(0);
      onScrollEvent(0);
      return;
    }
    onScrollEvent(renderNext + 1);
    carousel.current.scrollToIndex(renderNext + 1);
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.white,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollView: {flexGrow: 1, flexDirection: 'column'},
    logo: {
      width: 56,
      height: 56,
    },
    logoContainder: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontWeight: '600',
    },
    headerPrimary: {
      color: colors.primary,
    },
    headercontainer: {
      marginHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    lowerdisign: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    skipcont: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    nextContainer: {
      justifyContent: 'flex-end',
      marginHorizontal: 64,
      // marginBottom: 30,
    },
    button: {
      width: 80,
    },

    carousel: {
      flexGrow: 0,
      height: 350,
      paddingVertical: 16,
    },
    item: {borderRadius: 32, overflow: 'hidden'},
    itemContainerStyle: {
      borderRadius: 30,
      overflow: 'hidden',
    },
    imageRender: {
      width: '100%',
      height: 350,
    },
    skip: {
      fontSize: 14,
      fontWeight: '700',
      color: colors.primary,
    },
    bottom: {flex: 1, justifyContent: 'flex-end'},
  });

  const renderItem = ({item, index}) => {
    return (
      <View
        style={styles.item}
        onPress={() => {
          carousel.current.scrollToIndex(index);
        }}>
        <Image style={styles.imageRender} source={item.image} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View style={styles.logoContainder}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View>
        <View style={{}}>
          <Carousel
            ref={carousel}
            initialIndex={1}
            data={data}
            renderItem={renderItem}
            style={styles.carousel}
            itemWidth={windowWidth * 0.6}
            containerWidth={windowWidth}
            separatorWidth={24}
            finCurrentIndex={onScrollEvent}
            inActiveScale={0.8}
            itemContainerStyle={styles.itemContainerStyle}
          />
        </View>
      </View>

      <View style={styles.headercontainer}>
        <Text style={[text.heading, styles.header]}>
          {`${header}`}
          <Text style={[text.heading, styles.headerPrimary]}>
            {` ${description}`}
          </Text>
        </Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.lowerdisign}>
          <TouchableOpacity
            onPress={() => navigation.navigate('welcomeScreen')}
            style={styles.skipcont}>
            <Text style={styles.skip}>Skip →</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nextContainer}>
          <Button onPress={onNextClick} style={styles.button}>
            Next
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
