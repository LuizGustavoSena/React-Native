import React, { Component } from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/pages/login';
import home from './src/pages/home';
import buscaCep from './src/pages/buscaCep'
import listaContatos from './src/pages/listaContatos'

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="buscaCep" component={buscaCep} />
        <Stack.Screen name="listaContatos" component={listaContatos} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}