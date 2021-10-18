import React from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import {useCalc} from '../hooks/useCalc';
import {globalStyles} from '../theme/appTheme';

const CalculadoraScreens = () => {
  const {
    prevResult,
    result,
    cleanResult,
    plusMinus,
    btnDelete,
    btnDiv,
    resultNumber,
    btnMulti,
    btnRest,
    btnSum,
    calcular,
  } = useCalc();
  return (
    <View style={globalStyles.calcContainer}>
      {prevResult !== '0' && (
        <Text style={globalStyles.smallResult}>{prevResult}</Text>
      )}
      <Text
        style={globalStyles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={globalStyles.fila}>
        <CalcButton text="C" bgColor="#9b9b9b" action={cleanResult} />
        <CalcButton text="+/-" bgColor="#9b9b9b" action={plusMinus} />
        <CalcButton text="del" bgColor="#9b9b9b" action={btnDelete} />
        <CalcButton text="/" bgColor="#FF9427" action={btnDiv} />
      </View>
      <View style={globalStyles.fila}>
        <CalcButton text="7" action={resultNumber} />
        <CalcButton text="8" action={resultNumber} />
        <CalcButton text="9" action={resultNumber} />
        <CalcButton text="x" bgColor="#FF9427" action={btnMulti} />
      </View>
      <View style={globalStyles.fila}>
        <CalcButton text="4" action={resultNumber} />
        <CalcButton text="5" action={resultNumber} />
        <CalcButton text="6" action={resultNumber} />
        <CalcButton text="-" bgColor="#FF9427" action={btnRest} />
      </View>
      <View style={globalStyles.fila}>
        <CalcButton text="1" action={resultNumber} />
        <CalcButton text="2" action={resultNumber} />
        <CalcButton text="3" action={resultNumber} />
        <CalcButton text="+" bgColor="#FF9427" action={btnSum} />
      </View>
      <View style={globalStyles.fila}>
        <CalcButton text="0" bigBtn action={resultNumber} />
        <CalcButton text="." action={resultNumber} />
        <CalcButton text="=" bgColor="#FF9427" action={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreens;
