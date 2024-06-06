import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function WelcomeScreen() {
    
    const navigation = useNavigation();

    const pantallas = [
        { 
            id: '1', 
            title: 'Ver Lista de tareas', 
            screen: 'listaTareas',
            icono: <FontAwesome5 name="list-alt" size={24} color="black" />
        },
        { 
            id: '2', 
            title: 'Agregar tarea', 
            screen: 'agregarTarea',
            icono: <Entypo name="add-to-list" size={24} color="black" />
        },
        { 
            id: '3', 
            title: 'Editar tarea', 
            screen: 'editarTarea',
            icono: <FontAwesome5 name="edit" size={24} color="black" />
        },
        { 
            id: '5', 
            title: 'Configuraciones de la aplicación', 
            screen: 'settings',
            icono: <MaterialIcons name="settings" size={24} color="black" />
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.itemContent}>
                <Text style={styles.title}>{item.title}</Text>
                {item.icono}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Bienvenido!</Text>
            <FontAwesome5 name="child" size={24} color="black" />
            <Text style={styles.text}>¿Qué te gustaría hacer?</Text>
            <FlatList
                data={pantallas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 8,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    list: {
        width: '100%',
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 2,
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#333',
        flex: 1, 
    },
    icono: {
        marginLeft: 10,
    }
});