import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {AuthContext} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} color="#32cd32" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;
