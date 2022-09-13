import React from 'react'
import { StyleSheet, View } from 'react-native';

const Card = ({children, style}) => {
    return(
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        shadowOffset: {
            width:0,
            height:2
        },
        shadowColor:'#000',
        shadowOpacity:0.23,
        shadowRadius:2.62,
        elevation:4,
        backgroundColor:'#ffffff',
        borderRadius: 5,
    }
})

export default Card