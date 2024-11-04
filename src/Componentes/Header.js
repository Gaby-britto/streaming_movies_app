import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
//import { Icon } from 'react-native-vector-icons/Icon';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image
         style={styles.imageUser}
         source={{
            uri: 'https://i.pinimg.com/564x/13/12/d2/1312d287e7de2dde6a6ccb8f4e3ddcd3.jpg'
        }}
        />
        <Text style={styles.nameUser}>Hi, Gaby Bea</Text>
        <Image
        style={styles.imageSeacrh}
        source={{
            uri: 'https://i.pinimg.com/564x/59/9d/ad/599dade2bfab0c2b64db131a547ec1ba.jpg'
        }}
        />
        <Image
        style={styles.imageNotification}
        source={{
            uri: 'https://i.pinimg.com/564x/ca/3a/d8/ca3ad807aacfa006e9df2a76eb30dbb8.jpg'
        }}
        />
        {/* <Icon
        name="ios-home" size={30} color="#4F8EF7"
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: "flex-start",
        flexDirection: "row",
        //flex: 2
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginLeft: 10
    },
    imageSeacrh: {
        width: 30,
        height: 30,
        marginLeft: 130,
        marginTop:10
    },
    imageNotification:{
        width: 35,
        height: 35,
        marginLeft:14,
        marginTop:5
    },
    nameUser: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    }
});
