import { useState } from 'react';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    const usernameValid = username.length >= 5 && username.length <= 10;
    const passwordValid = password.length >= 5 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (usernameValid && passwordValid) {
      return true;
    } else {
      return false;
    }
  };

  return { username, setUsername, password, setPassword, validateLogin };
};
