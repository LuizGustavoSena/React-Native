import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text>Hello Word Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});