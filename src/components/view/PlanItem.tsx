import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../Text';
import useThemeStyles from 'src/hooks/useThemeStyles';

const PlanItem = ({months, priceperMonth, total, index, active, onPress}) => {
  const {colors} = useThemeStyles();

  const stylesactive = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      borderRadius: 16,
    },
    pricecontainer: {
      borderTopWidth: 2,
      borderTopColor: colors.snow,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    text: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
      color: colors.white,
    },
    textinfocontainer: {
      justifyContent: 'center',
    },
    textinfo: {
      textAlign: 'center',
      margin: 6,
      fontSize: 32,
      lineHeight: 39,
      fontWeight: '600',
      color: colors.white,
    },
    textinfo2: {
      textAlign: 'center',
      margin: 6,
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '600',
      color: colors.white,
    },
    dollas: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A04D3136',
      width: '35%',
      alignSelf: 'center',
      margin: 16,
      borderRadius: 15,
    },
    dollatext: {
      color: colors.white,
      fontWeight: '600',
    },
  });
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 16,
    },
    pricecontainer: {
      borderTopWidth: 2,
      borderTopColor: colors.snow,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    text: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
    },
    textinfocontainer: {
      justifyContent: 'center',
    },
    textinfo: {
      textAlign: 'center',
      margin: 6,
      fontSize: 32,
      lineHeight: 39,
      fontWeight: '600',
    },
    textinfo2: {
      textAlign: 'center',
      margin: 6,
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '600',
    },
    dollas: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A04D3136',
      width: '35%',
      alignSelf: 'center',
      margin: 16,
      borderRadius: 15,
    },
    dollatext: {
      fontWeight: '600',
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      style={active === index ? stylesactive.container : styles.container}>
      <View style={styles.dollas}>
        <Text
          style={active === index ? stylesactive.dollatext : styles.dollatext}>
          {' '}
          $ $ $ ${' '}
        </Text>
      </View>

      <View style={styles.textinfocontainer}>
        <Text
          style={active === index ? stylesactive.textinfo : styles.textinfo}>
          {months}
        </Text>
        <Text
          style={
            active === index ? stylesactive.textinfo2 : styles.textinfo2
          }>{`Month`}</Text>
        <Text
          style={active === index ? stylesactive.textinfo2 : styles.textinfo2}>
          {priceperMonth}
        </Text>
        <View style={styles.pricecontainer}>
          <Text style={active === index ? stylesactive.text : styles.text}>
            {total}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanItem;
