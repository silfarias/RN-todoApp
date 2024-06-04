import { View, Text, StyleSheet } from "react-native";

export default function ListaTareas() {

    return (
        <View style={styles.outerContainer}>
          <Text style={styles.texto}>Editar Tarea</Text>
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
    color: "#cccc",
    textAlign: "center",
    marginVertical: 16,
  },
});
