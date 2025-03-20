import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/style';

import {AuthContext} from '../../contexts/auth';

const SignUp: React.FC = () => {
  const {user} = useContext(AuthContext);

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <AreaInput>
          <Input placeholder="Seu nome" placeholderTextColor="#808080" />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#808080"
          />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#808080"
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.7}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
