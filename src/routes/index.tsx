import React from 'react';
import {View} from 'react-native';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  //const loading = false;
  const signed = false;

  return signed ? <View>a</View> : <AuthRoutes />;
};

export default Routes;
