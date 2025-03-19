import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AreaInput = styled.View`
  flex-direction: column;
  width: 80%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  background-color: #000;
  height: 50px;
  border: 2px solid #32cd32;
  border-radius: 12px;
  margin-top: 10px;
  padding-left: 15px;
  font-size: 16px;
  color: #fff;
`;

export const Logo = styled.Image`
  width: 175px;
  height: 175px;
  margin-bottom: 30px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #32cd32;
  border-radius: 12px;
  height: 50px;
  width: 75%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #fff;
  margin-bottom: 50px;
`;
