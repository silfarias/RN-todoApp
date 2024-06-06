import React from "react";
import { Stack } from "expo-router";

export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{headerShown: false }} />
      <Stack.Screen 
        name="listaTareas" 
        options={{ 
          title: 'Lista de tareas',
        }} />
      <Stack.Screen 
        name="agregarTarea" 
        options={{
          title: 'Añade una nueva tarea',
        }} />
      <Stack.Screen 
        name="editarTarea" 
        options={{
          title: 'Edita una tarea',
      }} />
      <Stack.Screen 
        name="verTarea" 
        options={{
          title: 'Edita una tarea',
      }} />
      <Stack.Screen 
        name="settings" 
        options={{
          title: 'Configuraciones de la aplicación',
      }} />
    </Stack>
  );
}