import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Text() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Recommended for You</Text>
        <Text style={styles.subTitle}>See All</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 50,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    title: {
      fontSize: 20,
      marginLeft: 5
    }, 
    subTitle: {
      marginLeft: 50,
      fontSize: 15
    }
})