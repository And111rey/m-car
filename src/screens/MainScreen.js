import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'

export const MainScreen = ({navigation}) => {


const [name, setName] = useState("")
const [pass, setPass] = useState("")


const logIn = async () => {
    const response = await fetch("https://car-magage.firebaseio.com/car-magage.json",{
        method: "GET",
        header:{"Content-Type": "appication/jso"}
    })
    const data = await response.json()
    const userKey = Object.keys(data).find((k) => (data[k].dataUser.name === name && data[k].dataUser.pass === pass))
    // console.log(userKey)

    ///что б чразу на тот сккрин где работаем, потом удалим , и юз стейт тоже))))
    // goSettinfScreen(data["-LyPdST8p8MBMQ862q0F"].dataUser)
    ///////////////////////////////

    userKey? goSettinfScreen(data[userKey].dataUser, userKey): Alert.alert("Неправельный") 

} 



// useEffect(()=>{
//     logIn()
// })



const goToRegistration = () => {
    navigation.navigate("Registration")
}
const goSettinfScreen = (data, key) => {
    console.log(key)
    navigation.navigate("Setting", {data, key })
    
}
    return (
        <View style={styles.center}>
            <TextInput onChangeText={setName} value={name} placeholder="name"  style={styles.textInput}/>
            <TextInput  onChangeText={setPass} value={pass} placeholder="password" style={styles.textInput}/>

        <View style={styles.button} >
            <Button onPress={logIn}  title="Log IN" /> 
            <Button onPress={goToRegistration} title="Sign IN" />
        </View>
            
        </View>
    );}
MainScreen.navigationOptions = {
    headerTitle: "Hello in our APP"
}


const styles =  StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b4045",
    },
    textInput: {
        width: "50%",
        borderWidth: 1, 
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40,
        padding: 4
    },
    button: {
        padding: 25
    }

})