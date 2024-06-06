import { TextInput, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useLogin } from '@/hooks/useLogin';
import { router } from 'expo-router';


export default function LoginScreen () {

  const { username, setUsername, password, setPassword, validateLogin } = useLogin();

  const handleLogin = () => {
    validateLogin() == true ? router.replace('/home') : alert('El usuario o la contraseña no son válidos');
  }

  const handleCancel = () => {
    setUsername('');
    setPassword('');
  };
  
  return (
    <View style={styles.outerContainer}>
      <Card style={styles.container}>
        <Text style={styles.texto}>Inicio de Sesión</Text>
        <Card.Cover source={{ uri: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/06/603732-cars-3-john-lasseter-quiere-volver-origenes.jpg?tf=3840x' }} />
        <Card.Content style={{ "marginTop": 4 }}>
          <TextInput
            mode='outlined'
            label="User name"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            mode='outlined'
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}
          />
        </Card.Content>

        <Card.Actions style={styles.actions}>

          <Button onPress={handleCancel} mode="outlined" style={styles.button}>
            Cancelar
          </Button>

          <Button onPress={handleLogin} mode="contained" style={styles.button}>
            Ingresar
          </Button>

        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    marginVertical: 16,
  },
  input: {
    borderRadius: 8,
    margin: 4,
  },
  actions: {
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 4,
  },
});
