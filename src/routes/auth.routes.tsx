import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={
          {
            headerStyle: {
              backgroundColor: '#000',
              borderBottomWidth: 1,
              borderBottomColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitle: 'Voltar',
            headerBackTitleVisible: false,
          } as NativeStackNavigationOptions
        }
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
