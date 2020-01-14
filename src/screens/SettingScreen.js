import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export const SettingScreen = ({navigation}) => {
    
    const  userData =  navigation.getParam("data")
    const key =  navigation.getParam("key")
    // console.log("!!  ", key)


    // /////function  for request /////
    // const getUserData = async() => {
    //     const response = await fetch("https://car-magage.firebaseio.com/car-magage.json", {
    //         method: "GET", 
    //         header: {"Content-Type": "appication/json"}
    //     })
    //     const data = await response.json()
    //     console.log("data->>>>", data)
    // }
    const goToAddCar =  (data, key) => {
        navigation.navigate("AddCar", {data, key})
    }
    const senfDataToAdd = () => {
        goToAddCar( {...userData.carSet}, key)
    }

    // фато переход переход 
    // goToAddCar()
    return (
        <View style={styles.center}>
                <Text> NAME: {userData.name? userData.name: "await" }</Text>
                <Text> SureName: {userData.sureName}</Text>
                <Text> Email: {userData.email}</Text>
        <View style={styles.button} >
            <Button onPress={senfDataToAdd}title="Create car control"/>
        </View>
            
        </View>
    )}


SettingScreen.navigationOptions = {
    headerTitle: "Wellcome"
}


const styles =  StyleSheet.create({
    center: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b4045",
    },
    textInput: {
        width: "50%",
        borderWidth: 1, 
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40
    },
    button: {
        padding: 25
    },
    

})