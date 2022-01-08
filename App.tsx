/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import GameScreen from 'screens/game/GameScreen';
import theme from 'theme';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.palette.black.light }}>
      <StatusBar animated={true} backgroundColor={theme.palette.black.medium} barStyle="light-content" />
      <GameScreen />
    </SafeAreaView>
  );
};

export default App;
