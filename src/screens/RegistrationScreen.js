import React, {useState} from "react"
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'

export const RegistarationScreen = ({navigation}) => {



    const [dataName, setName] = useState("")
    const [dataSureName, setSureName] = useState("")
    const [dataEmail, setEmail] = useState("")
    const [dataPass, setPass] = useState("")
    const [dataRePass, setRePass] = useState("")
    // const [dataCarName, setCarName] = useState("")
    
    const goToMainScreen = () => {
        navigation.navigate("Main")
    }

    const PostToDB = async() => {
        let dataUser = {}
        if( dataPass === dataRePass && dataPass!= ""  ) {
            dataUser = {
                name: dataName,
                sureName: dataSureName,
                email: dataEmail, 
                pass: dataPass,
                carSet:{
                    carName: "",
                    engineStatus: false,
                    condStatus: false,
                    signalStatus: false
                }
                    
                
            }
            
            const response = await fetch("https://car-magage.firebaseio.com/car-magage.json",{
                method: "POST",
                header: {"Content-Type": "appication/json"},
                body: JSON.stringify({dataUser})
            })
            const data = await response.json()
            console.log(">>>", data)  
            
            dataUser = {
                name: (dataName, setName("")),
                sureName: (dataSureName, setSureName("")),
                email: (dataEmail, setEmail("")),
                pass: (dataPass, setPass(""), setRePass("")),
                carName: ""
            }
            Alert.alert("Вы успешно прошли регистрацию")
            goToMainScreen() /// for sweetch to ->>>>> rpofile Page///////
        } else {
            Alert.alert("Проли не одинаковы")
        }
        //////  FOT SWITCH APP TO SETTINFS SCREEC
        // goToSettingsScreen() /////// 
    }
 

    return (
        <View style={styles.center}>
            <TextInput style={styles.textInput} onChangeText={setName} placeholder="name" value={dataName}/>
            <TextInput style={styles.textInput} onChangeText={setSureName} placeholder="Surename"  value={dataSureName}/>
            <TextInput style={styles.textInput} onChangeText={setEmail} placeholder="EMAIL"  value={dataEmail}/> 
            <TextInput style={styles.textInput} onChangeText={setPass} placeholder="Pasword" value={dataPass}/>
            <TextInput style={styles.textInput} onChangeText={setRePass} placeholder="Repeat Pasword" value={dataRePass} />
            <View style={styles.buttonBlock}>
                <Button onPress={PostToDB} title="Go" />
            </View>
        </View>
    );
}


RegistarationScreen.navigationOptions = {
    headerTitle: "Registration"
}

const styles =  StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3b4045",
    },
    textInput: {
        width: "50%",
        backgroundColor: "#585425",
        borderWidth: 1,
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40,
        marginTop: 4,
        padding: 4
    },
    buttonBlock: {
        // flexDirection: "row",
        padding: 5,
        width: "50%",
    },
    btn: {
        paddingTop: 10
    }


})