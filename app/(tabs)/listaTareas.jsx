import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import task from '../../assets/task.json'
import { Foundation } from '@expo/vector-icons';

export default function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setTareas(task);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => router.push(`/verTarea`)} >
        <View style={styles.tarea}>
          <View style={styles.contenido}>
            <View style={styles.texto}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
            <Foundation style={styles.icono} name="clipboard-notes" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tareas}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tarea: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contenido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  texto: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
  },
  icono: {
    marginLeft: 10,
  }
});
