import { useState } from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native-web';


export default function AgregarTarea() {
  const [text, setText] = useState("");


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/b8/6f/0c/b86f0cfe9305f6fda41bbb764da67cb9.jpg' }} style={{ 'margin': 5, 'border': '1px solid white' }} />
        <Card.Content>
          <TextInput
            mode='outlined'
            label="Titulo"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.input}
          />
          <TextInput
            mode='outlined'
            label="Descripción"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.input}
          />
          <TextInput
            mode='outlined'
            label="Autor"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.input}
          />
        </Card.Content>
        <Card.Actions>
          <Button>Cancelar</Button>
          <Button>Guardar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 10,
    margin: 5
  },
  input: {
    borderRadius: 8,
    margin: 4,
  },
})
