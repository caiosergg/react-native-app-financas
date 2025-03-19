import React from 'react';

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

const SignIn: React.FC = () => {
  return (
    <Background>
      <Container>
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
        <SubmitButton onPress={() => console.log('Botão pressionado!')}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
};

export default SignIn;
