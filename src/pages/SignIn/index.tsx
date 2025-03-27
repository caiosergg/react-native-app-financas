import React, {useState, useContext} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Platform, ActivityIndicator} from 'react-native';
import {
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from './style';

import {AuthContext} from '../../contexts/auth';

type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export default function SignIn() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const {signIn, loadingAuth} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Logo source={require('../../assets/Logo1.png')} />
        <AreaInput>
          <Input
            placeholder="Seu email"
            placeholderTextColor="#808080"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
            placeholderTextColor="#808080"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
