import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Routes from './src/routes';

import {NavigationContainer} from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';

function App(): React.JSX.Element {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor={scheme === 'dark' ? '#000000' : '#FFFFFF'}
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
