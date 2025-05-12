import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
  loading: boolean;
  signOut: () => Promise<void>;
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
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');
      if (storageUser) {
        try {
          const response = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          });

          if (response && response.data) {
            api.defaults.headers.Authorization = `Bearer ${storageUser}`;
            setUser(response.data);
            setLoading(false);
          }
        } catch (error) {
          setUser(null);
        }
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function signUp(
    nome: string,
    email: string,
    password: string,
  ): Promise<void> {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email,
      });
      setLoadingAuth(false);

      navigation.goBack();
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário!', 'Tente novamente.');
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

      await AsyncStorage.setItem('@finToken', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });

      setLoadingAuth(false);
    } catch (error) {
      Alert.alert('Erro ao logar usuário!', 'Tente novamente.');
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
