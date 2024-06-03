import { useState } from 'react';
import { Alert } from 'react-native';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    const usernameValid = username.length >= 5 && username.length <= 10;
    const passwordValid = password.length >= 5 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (usernameValid && passwordValid) {
      Alert.alert('Sesión iniciada', 'Bienvenido de nuevo ' + username + '!');
      return true;
    } else {
      Alert.alert('Error', 'Nombre de usuario o contraseña inválidos.');
      return false;
    }
  };

  return { username, setUsername, password, setPassword, validateLogin };
};

export default useLogin;
