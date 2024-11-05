import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const image = 'https://i.pinimg.com/564x/e1/0b/19/e10b1920526f880c589ff7e2e2df6641.jpg'

export default function CardMovie() {
  return (
    
    <View style={styles.container}>
        <ImageBackground
        style={styles.imageBanner}
        source={{uri: image}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    height: 200,
    width: 150,
    borderRadius: 10,
    marginTop: 30,
    shadowRadius: 1.41,
    marginLeft:10,
    backgroundColor: 'pink'
   },
   imageBanner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },

})
