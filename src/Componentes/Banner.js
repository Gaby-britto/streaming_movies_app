import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Banner() {
  return (
    <View style={syles.container}>
        <Text>Banner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#DCDCDC',
        borderRadius: 10,
        padding: 15,
        marginTop: 12,
        elevation: 3, //Sombra para android
        shadowColor: '#00',
        shadowOpacity: 0.2,
        shadowRadius: 1.41
    }
})
