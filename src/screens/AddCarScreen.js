import React, {useState} from "react"
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddCarScreen = ({navigation}) => {
    const key = navigation.getParam("key")
    const data1 = navigation.getParam("data")
   console.log("data1 ->>>", {...data1})
   
//    const {} = data1
    // const setCarSetting = async() => {
    //     const response = await fetch(`https://car-magage.firebaseio.com/car-magage/${key}/dataUser/carSet.json`,{
    //         method: "GET",
    //         header:{"Content-Type": "appication/jso"},
    //         // body: JSON.stringify({dataUser})
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // }


        const setCarSetting = async(carSet) => {
            const response = await fetch(`https://car-magage.firebaseio.com/car-magage/${key}/dataUser/carSet.json`,{
                method: "PATCH",
                header:{"Content-Type": "appication/jso"},
                body: JSON.stringify({carSet})
            })
            const data = await response.json()
            console.log(data)
        }

    const [name, setName] = useState({...data1.carName})
    const [engine, setEngine] = useState({...data1.engineStatus})
    const [signal, setSignal] = useState({...data1.signalStatus})
    const [cond, setCond] = useState({...data1.consStatus})

  

console.log("in Add ", key)
    return (
        <View style={styles.center}>
            <Text>AddCarScreen AddCarScreen AddCarScreen</Text>
            <TextInput onChangeText={setName} style={styles.textInput} />
            <Button onPress={setCarSetting} title="Create" />
            <Text style={styles.border} >Start the engine</Text>
            <Text style={styles.border} >Including air conditioning</Text>
            <Text style={styles.border} >Signaling</Text>
        </View>
    );
}

AddCarScreen.navigationOptins = {
    headerTitle: "Add controls"
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
    border:{
        width: "30%",
        borderWidth: 1, 
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40,
        padding: 4,
        marginTop:20
    }
    

})