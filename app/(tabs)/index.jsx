import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    const options = [
        { id: '1', title: 'Ver Lista de tareas', screen: 'TaskList' },
        { id: '2', title: 'Agregar tarea', screen: 'AddTask' },
        { id: '3', title: 'Editar tarea', screen: 'EditTask' },
        { id: '4', title: 'Ver tarea', screen: 'ViewTask' },
        { id: '5', title: 'Configuraciones de la aplicación', screen: 'Settings' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate(item.screen)}
        >
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Bienvenido!</Text>
            <Text style={styles.text}>¿Qué te gustaría hacer?</Text>
            <FlatList
                data={options}
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
        paddingTop: StatusBar.currentHeight || 0,
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
    title: {
        fontSize: 18,
        color: '#333',
    },
});
