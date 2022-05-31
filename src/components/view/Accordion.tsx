import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Text from '../Text';
import useThemeStyles from 'src/hooks/useThemeStyles';
import Unchecked from 'src/assets/icons/checkboxunchek.svg';
import Checked from 'src/assets/icons/checkboxcheck.svg';
import FloatingLabelInput from '../FloatingLabelInput';

const Accordion = () => {
  const {colors} = useThemeStyles();
  const [isExpanded, setisExpanded] = useState(false);
  const [ismiddleExpanded, setismiddleExpanded] = useState(false);
  const [isOthersExpanded, setisOthersExpanded] = useState(false);
  const [selectedId, setselectedId] = useState(100);

  const tribeData = [
    {
      id: 0,
      name: 'Kikuyu',
    },
    {
      id: 1,
      name: 'Luhya',
    },
    {
      id: 2,
      name: 'Kalenjin',
    },
    {
      id: 3,
      name: 'Luo',
    },
    {
      id: 4,
      name: 'Kamba',
    },
    {
      id: 5,
      name: 'Somali',
    },
    {
      id: 6,
      name: 'Kisii',
    },
    {
      id: 7,
      name: 'Meru',
    },
    {
      id: 8,
      name: 'Maasai',
    },
    {
      id: 9,
      name: 'Turkana',
    },
    {
      id: 10,
      name: 'Mijikenda',
    },
    {
      id: 11,
      name: 'Other',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.snow,
    },
    kencontainer: {
      borderWidth: 1,
      borderColor: colors.snow,
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
    },
    otncontainer: {
      borderWidth: 1,
      borderColor: colors.snow,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
    },
    headercontainer: {
      padding: 8,
      flexDirection: 'row',
      height: 56,
      alignItems: 'center',
    },
    headertext: {
      marginLeft: 16,
      fontSize: 14,
      lineHeight: 17,
      color: colors.black,
    },
    bodycontainer: {
      padding: 8,
      flexDirection: 'row',
      height: 56,
      alignItems: 'center',
      marginLeft: 30,
      borderWidth: 1,
      borderColor: colors.snow,
    },
    bodycontainerinput: {
      padding: 8,
      marginLeft: 30,
      borderWidth: 1,
      borderColor: colors.snow,
    },
  });

  const toogleExpand = () => {
    setisExpanded(!isExpanded);
    setisOthersExpanded(false);
    setismiddleExpanded(false);
  };

  const toogleOtherExpand = () => {
    setisOthersExpanded(!isOthersExpanded);
    setisExpanded(false);
    setismiddleExpanded(false);
  };

  const tooglemiddleExpand = () => {
    setisOthersExpanded(false);
    setisExpanded(false);
    setismiddleExpanded(!ismiddleExpanded);
  };

  const Accordions = ({header, onPress, isExpanded}) => {
    return (
      <Collapse isExpanded={isExpanded}>
        <CollapseHeader>
          <TouchableOpacity
            onPress={onPress}
            style={
              header === 'Kenyan'
                ? styles.kencontainer
                : header === 'Other'
                ? styles.otncontainer
                : styles.container
            }>
            <View style={styles.headercontainer}>
              {!isExpanded ? <Unchecked /> : <Checked />}
              <Text style={styles.headertext}>{header}</Text>
            </View>
          </TouchableOpacity>
        </CollapseHeader>

        <CollapseBody>
          {header !== 'Kenyan' ? (
            <View style={styles.bodycontainerinput}>
              <FloatingLabelInput
                onBlur={() => console.log()}
                style={{marginVertical: 0}}
                label="Country"
              />
              <FloatingLabelInput
                style={{marginVertical: 0}}
                label="City / Town"
                onBlur={() => console.log()}
              />
            </View>
          ) : (
            <>
              {tribeData.map((item, index) => {
                console.log(item.name);
                return (
                  <>
                    {item.name !== 'Other' ? (
                      <TouchableOpacity
                        onPress={() => setselectedId(item.id)}
                        style={styles.bodycontainer}>
                        {item.id === selectedId ? <Checked /> : <Unchecked />}
                        <Text style={styles.headertext}>{item.name}</Text>
                      </TouchableOpacity>
                    ) : (
                      <Collapse>
                        <CollapseHeader>
                          <TouchableOpacity
                            onPress={() => setselectedId(item.id)}
                            style={styles.bodycontainer}>
                            {item.id === selectedId ? (
                              <Checked />
                            ) : (
                              <Unchecked />
                            )}
                            <Text style={styles.headertext}>{item.name}</Text>
                          </TouchableOpacity>
                        </CollapseHeader>
                        <CollapseBody>
                          <Text>fdgdfgdf</Text>
                        </CollapseBody>
                      </Collapse>
                    )}
                  </>
                );
              })}
            </>
          )}
        </CollapseBody>
      </Collapse>
    );
  };

  return (
    <>
      <Accordions
        onPress={toogleExpand}
        isExpanded={isExpanded}
        header={'Kenyan'}
      />
      <Accordions
        onPress={tooglemiddleExpand}
        isExpanded={ismiddleExpanded}
        header={'Black / African descent'}
      />
      <Accordions
        onPress={toogleOtherExpand}
        isExpanded={isOthersExpanded}
        header={'Other'}
      />
    </>
  );
};

export default Accordion;
