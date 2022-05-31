import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import Search from 'src/assets/icons/search.svg';
import useThemeStyles from 'src/hooks/useThemeStyles';
import ExploreListItem from 'src/components/view/ExploreListItem';

import MusicImage from 'src/assets/images/music.png';
import Fashon from 'src/assets/images/fashion.png';
import FoodDrink from 'src/assets/images/fooddrink.png';
import Travels from 'src/assets/images/travel.png';

export default function ExploreScreen({navigation}) {
  const {colors} = useThemeStyles();

  const exploreData = [
    {
      id: 0,
      image: MusicImage,
    },
    {
      id: 1,
      image: Fashon,
    },
    {
      id: 2,
      image: FoodDrink,
    },
    {
      id: 3,
      image: Travels,
    },
    {
      id: 4,
      image: MusicImage,
    },
    {
      id: 5,
      image: Fashon,
    },
    {
      id: 6,
      image: FoodDrink,
    },
    {
      id: 7,
      image: Travels,
    },
  ];
  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: colors.white,
      flexGrow: 1,
    },
    explorecontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      paddingTop: 30,
    },
    exploretext: {
      fontSize: 24,
      lineHeight: 29.16,
      fontWeight: '600',
    },
    potentialmatches: {
      fontSize: 12,
      lineHeight: 15,
      color: colors.silver,
      marginHorizontal: 30,
      marginVertical: 10,
    },
    flatlist: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 100,
    },
    footer: {marginBottom: 100},
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View style={styles.explorecontainer}>
        <Text style={styles.exploretext}>Explore</Text>
        <TouchableOpacity onPress={() => navigation.navigate('searchFilter')}>
          <Search />
        </TouchableOpacity>
      </View>
      <Text style={styles.potentialmatches}>
        Find potential matches who match your interests
      </Text>

      <FlatList
        data={exploreData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ExploreListItem
            image={item.image}
            onPress={() =>
              navigation.navigate('exporeScreen', {isSearch: false})
            }
          />
        )}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </SafeAreaView>
  );
}
