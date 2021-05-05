import React, { Component } from 'react';
import { 
  StyleSheet, Text, View, KeyboardAvoidingView, 
  Image, TextInput, TouchableOpacity } from 'react-native';

export default function login({ navigation }) {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.viewImage}>
          <Image style={styles.image} source={require('../img/logo.png')} />
        </View>
        <View style={styles.viewInput}>
          <TextInput 
            placeholder='Email'
            style={styles.input}/>
          <TextInput 
            placeholder='Senha'
            style={styles.input}/>
            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.button}>
              <Text style={styles.text}> Logar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCreate}>
              <Text style={styles.textCreate}> Criar conta </Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  text:{
    color: '#121212',
    fontSize: 20,
  },
  textCreate:{
    color: 'white',
    alignItems: 'center',
    fontSize: 15,
  },
  viewImage:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    height: '40%'
  },
  viewInput:{
    flex:1,
    width: '90%',
  },
  image: {
    width: 250,
    height: 250,
  },
  input:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 15,
    marginTop: 15,
    fontSize: 20,
  },
  button:{
    backgroundColor: '#61dafb',
    padding: 15,
    marginTop: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonCreate:{
    marginTop: 5,
    alignItems: 'center',
  }
});