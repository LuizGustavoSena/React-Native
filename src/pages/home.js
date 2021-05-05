import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function home({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('buscaCep')} 
                style={styles.button}>
                 <Text style={styles.text}>Busca Cep</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('listaContatos')} 
                style={styles.button}>
                 <Text style={styles.text}>Lista contatos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#121212',
        padding: 10,
        marginTop: 20,
    },
    text:{
        color: 'white',
        fontSize: 20,
        justifyContent: 'center'
    }
});