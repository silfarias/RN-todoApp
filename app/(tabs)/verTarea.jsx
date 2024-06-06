import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import task from '../../assets/task.json';
import { Button } from "react-native-paper";

export default function VerTarea() {
  const { id } = useLocalSearchParams();
  const tareaId = parseInt(id, 10);
  const tarea = task.find(t => t.id === tareaId);

  if (!tarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Tarea no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{tarea.titulo}</Text>
      <Text style={styles.descripcion}>{tarea.descripcion}</Text>
      <Text style={styles.detalles}>Autor: {tarea.autor}</Text>
      <Text style={styles.detalles}>Fecha: {tarea.fecha}</Text>

      <Button style={styles.button} mode="contained">Editar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 16,
    marginTop: 8,
  },
  detalles: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
  button: {
    marginTop: 16,
    padding: 0
  }
});
