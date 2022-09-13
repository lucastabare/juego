import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Header = ({tittle}) => {
    return (
      <View style={styles.header}>
        <Text style={styles.tittle}>{tittle}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    header: { 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2292a4',
        paddingTop: 20,
    },
    tittle: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight:'bold',
    }
})
export default Header
