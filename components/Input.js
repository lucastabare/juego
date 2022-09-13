import React from 'react';
import { TextInput, StyleSheet, styl } from 'react-native';
import { colors } from '../constants/colors';


const Input =({style, ...props})=>{
    return(
        <TextInput {...props} style={{...style.input, ...style }}/>
    )
}

const styles = StyleSheet.create({
    height: 30,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 20,
})

export default Input