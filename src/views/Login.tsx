import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { AuthController } from '../controllers/AuthController';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const authController = new AuthController();

  const handleLogin = async () => {
    try {
      await authController.signIn(email, password);
    } catch (error) {
     // setErrorMessage(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Log in" onPress={handleLogin} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};
