import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const {signOut, user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.name}>
        Nome: {user?.name || 'Usuário não autenticado'}
      </Text>
      <Button
        title="Sair da conta"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  name: {
    color: '#FFF',
  },
});
