import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Text from './Text';
import {launchImageLibrary} from 'react-native-image-picker';
import mime from 'mime';
import useThemeStyles from 'src/hooks/useThemeStyles';

import CameraActive from 'src/assets/icons/cameraactive.svg';
import CameraInActive from 'src/assets/icons/imageactive.svg';
import InactiveImage from 'src/assets/icons/inactiveImage.svg';
import InactiveRecord from 'src/assets/icons/inactiveRecord.svg';
import ReadioChecked from 'src/assets/icons/checkboxcheck.svg';
import UncheckedRadio from 'src/assets/icons/checkboxunchek.svg';
import FloatingLabelInput from './FloatingLabelInput';
import DropDwon from './DropDwon';

import Info from 'src/assets/icons/infoicon.svg';
import Musicnote from 'src/assets/icons/musicnote.svg';
import InactiveNote from 'src/assets/icons/inactivenote.svg';
import Fashion from 'src/assets/icons/fashionprimary.svg';
import InactiveFashion from 'src/assets/icons/inactivefashion.svg';
import PaintPrimary from 'src/assets/icons/fooddrinkprimary.svg';
import PaintInactivr from 'src/assets/icons/paininactive.svg';
import Foodiconprimaty from 'src/assets/icons/paintprimary.svg';
import BirthDayCake from 'src/assets/icons/birthdaycake.svg';
import BirthDayCakeInactive from 'src/assets/icons/cakeinactive.svg';
import MapInactive from 'src/assets/icons/mapinactive.svg';
import CloseSelected from 'src/assets/icons/closeimageselected.svg'; //
import PassionItem from './PassionItem';
import Button from './pressable/Button';
import Helpers from 'src/Helpers';
import authRouter from 'src/api/routers/authRouter';
import BaseContextProvider from 'src/context/BaseContextProvider';

const EditAboutMe = () => {
  const {colors} = useThemeStyles();
  const [idrink, setidrink] = useState(false);
  const [ismoke, setismoke] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isOthersFetching, setisOthersFetching] = useState(false);
  const [ihavechildren, setihavechildren] = useState(false);
  const [passionLoading, setPassionLoading] = useState(false);
  const [isLangLoading, setisLangLoading] = useState(false);
  const [image1uri, setImage1uri] = useState('' as string | undefined | null);
  const [image2uri, setImage2uri] = useState('' as string | undefined | null);
  const [image3uri, setImage3uri] = useState('' as string | undefined | null);
  const [image4uri, setImage4uri] = useState('' as string | undefined | null);
  const [image5uri, setImage5uri] = useState('' as string | undefined | null);
  const [image6uri, setImage6uri] = useState('' as string | undefined | null);
  const [moreSelected, setmoreSelected] = useState([] as any);
  const [dataMore, setdataMore] = useState([]);
  const [passion, setPassion] = useState([]);

  const {userData} = useContext(BaseContextProvider);

  console.log('====================================');
  console.log(JSON.stringify(userData.profile));
  console.log('====================================');

  const [imageArray, setImageArray] = useState([] as any);

  // const handleMale = () => setgender('Male');

  // const handleFemale = () => setgender('Female');

  const fetchPassions = async () => {
    setPassionLoading(true);
    const response = await authRouter.fetchPassions();
    setPassionLoading(false);

    if (response.ok) {
      setPassion(response.data.data);
      return;
    }

    console.log('====================================');
    console.log(response);
    console.log('====================================');
  };

  const fetchOtherData = async () => {
    setisOthersFetching(true);
    const response = await authRouter.fetchOtherPersions();
    setisOthersFetching(false);

    if (response.ok) {
      console.log('====================================');
      console.log(JSON.stringify(response.data.data));
      console.log('====================================');
      setdataMore(response.data.data);
      return;
    }

    console.log('====================================');
    console.log(response);
    console.log('====================================');
  };

  const fetchLanguages = async () => {
    const response = await authRouter.fetchLanguages();

    if (response.ok) {
      setLanguage(response.data.data);
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');

      return;
    }

    console.log('====================================');
    console.log(response);
    console.log('====================================');
  };

  const pickImageFromGalary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });
      const response = {
        status: 'success',
        base64: result.assets[0].base64,
        uri: result.assets[0].uri,
      };

      return response;
    } catch (error) {
      const response = {
        status: 'error',
        base64: null,
        uri: null,
        error: error,
      };

      return response;
    }
  };

  const pickVideoFromGalary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'video',
        includeBase64: true,
      });
      const response = {
        status: 'success',
        base64: result.assets[0].base64,
        uri: result.assets[0].uri,
      };

      return response;
    } catch (error) {
      const response = {
        status: 'error',
        base64: null,
        uri: null,
        error: error,
      };

      return response;
    }
  };

  const handleGetImage = async (currentImage: number) => {
    switch (currentImage) {
      case 0:
        const {status, uri, base64} = await pickImageFromGalary();
        if (status === 'success') {
          setImage1uri(uri);
          const imageRequest = {
            encoded_file: `data:${mime.getType(
              uri?.split('/').pop() || 'image/png',
            )};base64,${base64}`,
            name: uri?.split('/').pop() || 'photo',
            type: 'PHOTO',
            is_default: true,
          };
          setImageArray([...imageArray, imageRequest]);
        }
        break;
      case 1:
        const {
          status: status1,
          uri: uri1,
          base64: base641,
        } = await pickImageFromGalary();
        if (status1 === 'success') {
          setImage2uri(uri1);
          const imageRequest = {
            encoded_file: `data:${mime.getType(
              uri?.split('/').pop() || 'image/png',
            )};base64,${base641}`,
            name: uri1?.split('/').pop() || 'photo',
            type: 'PHOTO',
            is_default: false,
          };
          setImageArray([...imageArray, imageRequest]);
        }
        break;
      case 2:
        const {
          status: status2,
          uri: uri2,
          base64: base642,
        } = await pickImageFromGalary();
        if (status2 === 'success') {
          setImage3uri(uri2);
          const imageRequest = {
            encoded_file: `data:${mime.getType(
              uri?.split('/').pop() || 'image/png',
            )};base64,${base642}`,
            name: uri?.split('/').pop() || 'photo',
            type: 'PHOTO',
            is_default: false,
          };
          setImageArray([...imageArray, imageRequest]);
        }
        break;

      case 3:
        const {
          status: status3,
          uri: uri3,
          base64: base643,
        } = await pickImageFromGalary();
        if (status3 === 'success') {
          setImage4uri(uri3);
          const imageRequest = {
            encoded_file: `data:${mime.getType(
              uri?.split('/').pop() || 'image/png',
            )};base64,${base643}`,
            name: uri?.split('/').pop() || 'photo',
            type: 'PHOTO',
            is_default: false,
          };
          setImageArray([...imageArray, imageRequest]);
        }
        break;

      case 4:
        const {
          status: status4,
          uri: uri4,
          base64: base644,
        } = await pickVideoFromGalary();
        if (status4 === 'success') {
          setImage5uri(uri4);
          const imageRequest = {
            encoded_file: `data:${mime.getType(
              uri?.split('/').pop() || 'image/png',
            )};base64,${base644}`,
            name: uri?.split('/').pop() || 'photo',
            type: 'PHOTO',
            is_default: false,
          };
          setImageArray([...imageArray, imageRequest]);
        }
        break;

      case 5:
        const {
          status: status5,
          uri: uri5,
          base64: base645,
        } = await pickVideoFromGalary();
        if (status5 === 'success') {
          setImage6uri(uri5);
          const imageRequest = {
            encoded_file: `data:${mime.getType(
              uri?.split('/').pop() || 'image/png',
            )};base64,${base645}`,
            name: uri?.split('/').pop() || 'photo',
            type: 'PHOTO',
            is_default: false,
          };
          setImageArray([...imageArray, imageRequest]);
        }
        break;
    }
  };

  const styles = StyleSheet.create({
    photo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 32,
    },
    imagePickerContainer: {
      marginHorizontal: 30,
    },
    imageholders: {
      height: 142,
      flex: 1,
      backgroundColor: colors.snow,
      margin: 3,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    imageholdercontainer: {
      // height: 200,
      flexDirection: 'row',
      marginTop: 15,
    },
    scroll: {
      flexGrow: 1,
    },
    biosection: {
      margin: 30,
    },

    holder: {
      borderWidth: 1,
      borderColor: colors.snow,
      borderRadius: 6,
      marginVertical: 40,
      marginHorizontal: 30,
    },
    gender: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      paddingHorizontal: 20,
    },
    gender2: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderColor: colors.snow,
    },
    genderitem: {
      marginLeft: 16,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 16,
      backgroundColor: colors.snow,
      padding: 5,
      borderRadius: 10,
    },
    mustpick: {marginLeft: 16, fontSize: 12, lineHeight: 14},

    passioniteholder: {
      marginVertical: 5,
      flexDirection: 'row',
    },
    passionname: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: colors.black,
      marginVertical: 20,
    },
    passion: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: colors.black,
    },
    lastbutton: {
      marginHorizontal: 30,
      marginBottom: 60,
    },
  });
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.photo}>
        <Text>Photo</Text>
        <Text>Drag to reorder</Text>
      </View>

      <View style={styles.imagePickerContainer}>
        <View style={styles.imageholdercontainer}>
          <TouchableOpacity
            onPress={() => handleGetImage(0)}
            style={styles.imageholders}>
            {Helpers.isEmpty(image1uri) ? (
              <CameraActive />
            ) : (
              <ImageBackground
                style={{height: 142, width: '100%', alignItems: 'flex-end'}}
                source={{uri: image1uri}}>
                <TouchableOpacity onPress={() => setImage1uri('')}>
                  <CloseSelected />
                </TouchableOpacity>
              </ImageBackground>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleGetImage(1)}
            style={styles.imageholders}>
            {Helpers.isEmpty(image2uri) ? (
              <CameraInActive />
            ) : (
              <ImageBackground
                style={{height: 142, width: '100%', alignItems: 'flex-end'}}
                source={{uri: image2uri}}>
                <TouchableOpacity onPress={() => setImage2uri('')}>
                  <CloseSelected />
                </TouchableOpacity>
              </ImageBackground>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleGetImage(2)}
            style={styles.imageholders}>
            {Helpers.isEmpty(image3uri) ? (
              <CameraInActive />
            ) : (
              <ImageBackground
                style={{height: 142, width: '100%', alignItems: 'flex-end'}}
                source={{uri: image3uri}}>
                <TouchableOpacity onPress={() => setImage3uri('')}>
                  <CloseSelected />
                </TouchableOpacity>
              </ImageBackground>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.imageholdercontainer}>
          <TouchableOpacity
            onPress={() => handleGetImage(3)}
            style={styles.imageholders}>
            {Helpers.isEmpty(image4uri) ? (
              <InactiveImage />
            ) : (
              <ImageBackground
                style={{height: 142, width: '100%', alignItems: 'flex-end'}}
                source={{uri: image4uri}}>
                <TouchableOpacity onPress={() => setImage4uri('')}>
                  <CloseSelected />
                </TouchableOpacity>
              </ImageBackground>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleGetImage(4)}
            style={styles.imageholders}>
            {Helpers.isEmpty(image5uri) ? (
              <InactiveRecord />
            ) : (
              <ImageBackground
                style={{height: 142, width: '100%', alignItems: 'flex-end'}}
                source={{uri: image5uri}}>
                <TouchableOpacity onPress={() => setImage5uri('')}>
                  <CloseSelected />
                </TouchableOpacity>
              </ImageBackground>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleGetImage(5)}
            style={styles.imageholders}>
            {Helpers.isEmpty(image6uri) ? (
              <InactiveRecord />
            ) : (
              <ImageBackground
                style={{height: 142, width: '100%', alignItems: 'flex-end'}}
                source={{uri: image6uri}}>
                <TouchableOpacity onPress={() => setImage6uri('')}>
                  <CloseSelected />
                </TouchableOpacity>
              </ImageBackground>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.biosection}>
        <Text>Bio</Text>

        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="First name"
          textValue={userData.first_name}
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Last name"
          textValue={userData.last_name}
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Birthday"
          textValue={userData.profile.birth_date}
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Gender"
          textValue={userData.profile.gender}
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="I live in"
          textValue={userData.profile.location.name}
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Describe yourself"
          multiline={true}
          numberOfLines={10}
          textValue={userData.profile.bio.bio}
          style={{
            paddingTop: 10,
            textAlignVertical: 'center',
          }}
        />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="What are you looking for?"
        />
        <FloatingLabelInput
          label="Height"
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
        />
        <DropDwon title={'Height'} description={'Slender'} />
      </View>

      <View style={styles.biosection}>
        <Text>More</Text>

        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Which languages do you speak?"
        />
        <DropDwon title={'Education Level'} description={'Master’s Degree'} />
        <FloatingLabelInput
          onBlur={() => console.log()}
          onChangeText={() => console.log()}
          label="Occupation"
        />
        <DropDwon title={'Religion'} description={'I prefer not to say'} />
      </View>

      <View style={styles.holder}>
        <TouchableOpacity onPress={() => setismoke(true)} style={styles.gender}>
          {ismoke ? <ReadioChecked /> : <UncheckedRadio />}
          <Text style={styles.genderitem}>I smoke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setidrink(true)}
          style={styles.gender2}>
          {idrink ? <ReadioChecked /> : <UncheckedRadio />}

          <Text style={styles.genderitem}>I drink</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setihavechildren(true)}
          style={styles.gender2}>
          {ihavechildren ? <ReadioChecked /> : <UncheckedRadio />}

          <Text style={styles.genderitem}>I have a child / children</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.biosection}>
        <Text style={styles.passion}>Passions</Text>

        <View style={styles.info}>
          <Info />
          <Text style={styles.mustpick}>You must pick at least 3</Text>
        </View>

        <View style={styles.passioniteholder}>
          <PassionItem
            Icon={<Musicnote />}
            label={'Arts & Music'}
            Inactive={<InactiveNote />}
            onItemAdded={function (): void {
              // throw new Error('Function not implemented.');
            }}
            onItemRemoved={function (): void {
              // throw new Error('Function not implemented.');
            }}
          />
          <PassionItem
            Icon={<Fashion />}
            label={'Fashion'}
            Inactive={<InactiveFashion />}
            onItemAdded={function (): void {
              // throw new Error('Function not implemented.');
            }}
            onItemRemoved={function (): void {
              // throw new Error('Function not implemented.');
            }}
          />
        </View>

        <View style={styles.passioniteholder}>
          <PassionItem
            Icon={<BirthDayCake />}
            label={'Food & Drink'}
            Inactive={<BirthDayCakeInactive />}
            onItemAdded={function (): void {
              // throw new Error('Function not implemented.');
            }}
            onItemRemoved={function (): void {
              // throw new Error('Function not implemented.');
            }}
          />
          <PassionItem
            Icon={<PaintPrimary />}
            label={'Painting'}
            Inactive={<PaintInactivr />}
            onItemAdded={function (): void {
              // throw new Error('Function not implemented.');
            }}
            onItemRemoved={function (): void {
              // throw new Error('Function not implemented.');
            }}
          />
        </View>

        <View style={styles.passioniteholder}>
          <PassionItem
            Icon={<Foodiconprimaty />}
            label={'Travel & Places'}
            Inactive={<MapInactive />}
            onItemAdded={function (): void {
              // throw new Error('Function not implemented.');
            }}
            onItemRemoved={function (): void {
              // throw new Error('Function not implemented.');
            }}
          />
        </View>
      </View>

      <View style={styles.lastbutton}>
        <Button>Save</Button>
      </View>
    </ScrollView>
  );
};

export default EditAboutMe;
