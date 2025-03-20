import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
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

type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const SignIn: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Logo source={require('../../assets/Logo1.png')} />
        <AreaInput>
          <Input
            placeholder="Seu email"
            keyboardType="email-address"
            placeholderTextColor="#808080"
          />
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
            placeholderTextColor="#808080"
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
};

export default SignIn;
