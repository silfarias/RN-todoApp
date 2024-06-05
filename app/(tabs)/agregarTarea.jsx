import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function AgregarTarea() {
    return (
      <View style={styles.outerContainer}>
          <Button mode="contained">
            Agregar Tarea
          </Button>
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
