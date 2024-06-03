import { View, Text, StyleSheet } from "react-native";

export default function ListaTareas() {
    let taskList = []

    return (
        <View style={styles.outerContainer}>
          <Text style={styles.texto}>Lista de Tareas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#cccccc",
    textAlign: "center",
    marginVertical: 16,
  },
});
