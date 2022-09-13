import React, {useState} from 'react';
import { View, Text, StyleSheet, Keyboard , Button, TouchableWithoutFeedback  } from 'react-native';
import Card from '../components/Card'
import Input from '../components/Input'
export default function StartGameScreen() {
    const [number, setNumber] = useState('')

    const handleChangeText = (text) =>{
        setNumber(text.replace(/[^0-9]/g, ''))
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}> 
      <Text style={styles.tittle}>Comenzar Juego</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Elija un numero</Text>
        <Input style={styles.input} keyboardType='numeric' maxLength={2} 
            autocapitalize='none' autoCorrect={false} 
            onChangeText={(text) => handleChangeText(text)} value={number}/>
        <View style={styles.buttonContainer}>
            <Button title='Limpiar' onPress={null} color='#2292a4'/>
            <Button title='Confirmar' onPress={null} color='#2292a4'/>
        </View>
      </Card>
     </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    tittle: {
        fontSize: 20,
        color:'#212121',
        textAlign: 'center',
        paddingVertical: 20,
    },
    inputContainer:{
        width: 320,
        maxwidth:'80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:20,
        shadowOffset: {
            width:0,
            height:2
        },
        shadowColor:'#000',
        shadowOpacity:0.23,
        shadowRadius:2.62,
        elevation:4,
        backgroundColor:'#ffffff'

    },
    label: {
        fontSize: 14,
        color: '#212121',
        textAlign: 'center',
        paddingVertical: 5, 
    },
    input:{
        width: '100%',
        borderBottomColor: '#2292A4',
        borderBottomWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer:{
        width:'75%',
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
    },
})