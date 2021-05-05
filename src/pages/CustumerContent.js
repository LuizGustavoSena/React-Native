import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {DrawerNavigatorItems} from 'react-navigation-drawer'
export default function CustumerContent({...props}) {
  return (
    <View style={styles.container}>
        <View style={styles.line}>
            <View style={styles.viewImage}>
                <Image 
                    style={styles.image} 
                    source={require('../img/perfil.jpg')} />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textEmail}>luizgbs1@gmail</Text>
                <Text style={styles.textName}>Luiz Sena</Text>
            </View>
        </View>
      <DrawerNavigatorItems {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    },
    line:{
        flexDirection: 'row',
        height: 80,
        marginLeft: 10,
        marginTop: 10,
    },
    viewText:{
        marginLeft: 10,
        marginTop: 10,
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    textEmail:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    textName:{
        fontSize: 15,
    },
})