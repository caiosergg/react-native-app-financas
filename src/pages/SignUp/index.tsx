import React, {useContext, useState} from 'react';
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

export default function SignUp() {
  const {signUp} = useContext(AuthContext);

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSignUp() {
    signUp(nome, email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            placeholderTextColor="#808080"
            value={nome}
            onChangeText={(text: React.SetStateAction<string>) => setNome(text)}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#808080"
            value={email}
            onChangeText={(text: React.SetStateAction<string>) =>
              setEmail(text)
            }
          />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#808080"
            value={password}
            onChangeText={(text: React.SetStateAction<string>) =>
              setPassword(text)
            }
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
