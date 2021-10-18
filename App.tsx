import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreens from './src/screens/CalculadoraScreens';
import {globalStyles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreens />
    </SafeAreaView>
  );
};

export default App;
