import { View, Text } from "react-native-web";
import { useLocalSearchParams } from 'expo-router';
import task from '../../assets/task.json'

export default function VerTarea() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Ver Tarea</Text>
    </View>
  );
}