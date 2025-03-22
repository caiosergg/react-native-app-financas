import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

interface User {
  nome: String;
}

interface AuthContextData {
  user: User;
  signUp: (nome: string, email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>({nome: 'Caio teste'});

  const navigation = useNavigation();

  async function signUp(
    nome: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password,
      });
      navigation.goBack();
    } catch (error) {
      console.log('Erro ao cadastrar usuário!', error);
    }
  }

  return (
    <AuthContext.Provider value={{user, signUp}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
