import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function TabLayout() {
  
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      /> 
      <Tabs.Screen
        name="listaTareas"
        options={{
          title: 'Lista',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="list" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="agregarTarea"
        options={{
          title: 'Lista',
          tabBarIcon: ({ color }) => (
            <Entypo name="add-to-list" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}