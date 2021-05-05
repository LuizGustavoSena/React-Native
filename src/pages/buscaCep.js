import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default class buscaCep extends Component{

  state = {
    cep: '',
    result: {
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
    },
  };

  buscaCep = () =>{
    fetch(`https://viacep.com.br/ws/${this.state.cep.replace('-','')}/json/`).then(res => res.json()).then(data => {
      this.setState({
        result: data
      })
    }).catch(err =>{
      this.setState({
        result: {
          logradouro: '',
          bairro: '',
          localidade: '',
          uf: '',
        },
      });
    });
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.text} >
            Busca CEP
        </Text>
        <TextInput style={styles.input} 
                   value={this.state.cep} 
                   onChangeText={cep => {this.setState({cep})}}
                    placeholder="Digite seu cep" />
        <Button 
          onPress={this.buscaCep} 
          title="Buscar" />
          {
            this.state.result.localidade ? <View>
            <Text style={styles.dataText}>Logradouro: {this.state.result.logradouro}</Text>
            <Text style={styles.dataText}>Bairro: {this.state.result.bairro}</Text>
            <Text style={styles.dataText}>Localidade: {this.state.result.localidade}</Text>
            <Text style={styles.dataText}>Uf: {this.state.result.uf}</Text>
            </View> : null
          }
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  text:{
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  dataText:{
    marginTop: 5,
    fontSize: 20,
  },
  input: {
    marginVertical: 20,
    borderWidth: 0.7,
    paddingHorizontal: 20,
    paddingVertical: 15,
  }
});