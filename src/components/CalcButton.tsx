import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  bgColor?: '#9b9b9b' | '#2d2d2d' | '#FF9427';
  bigBtn?: boolean;
  action: (number: string) => void;
}

const CalcButton = ({text, bgColor = '#2d2d2d', bigBtn, action}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => action(text)}>
      <View
        style={[
          styles.boton,
          {backgroundColor: bgColor},
          bigBtn && styles.bigBtn,
        ]}>
        <Text
          style={[
            styles.btnText,
            bgColor === '#9b9b9b' ? styles.btnTextBlack : styles.btnTextWhite,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
  btnTextBlack: {
    color: 'black',
  },
  btnTextWhite: {
    color: 'white',
  },
  bigBtn: {
    width: 180,
  },
});

export default CalcButton;
