import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

interface User {
  nome: String;
}

interface AuthContextData {
  user: User | null;
  signed: boolean;
  signUp: (nome: string, email: string, password: string) => Promise<void>;
  loadingAuth: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(
    nome: string,
    email: string,
    password: string,
  ): Promise<void> {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password,
      });
      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      console.log('Erro ao cadastrar usuário!', error);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
