import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  signed: boolean;
  signUp: (nome: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
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

  async function signIn(email: string, password: string): Promise<void> {
    setLoadingAuth(true);
    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });
      const {id, name, token} = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });
      setLoadingAuth(false);
    } catch (error) {
      console.log('Erro ao logar usuário!', error);
      //setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
