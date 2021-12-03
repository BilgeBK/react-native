import React, { useState } from "react";
import {View,Button,Text,StyleSheet, TextInput, Image} from 'react-native';

const LoginScreen = ()=>{

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');

        return <View style={styles.view}>
        <Text style={styles.text}>Login Screen</Text>
        <Image style={styles.image} source={require('../../assets/user.png')} />
        <Text style ={styles.text}>Enter your username: <TextInput style={styles.textInput}  onChangeText={newText => setName(newText)}
        value = {name}></TextInput></Text>
        <Text style ={styles.text}>Enter your password: <TextInput style={styles.textInput} secureTextEntry={true}  onChangeText={newText => setPassword(newText)}
        value = {password} ></TextInput></Text>
         {password != '' && name != '' ?   <Button title='Login' style={styles.button} onPress={()=>{window.location.href='HomeScreen.js'}}></Button>  : <Text style = {styles.text}>Can not entered null</Text> }
      
    </View>
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        margin:10,
    },
    textInput:{
        backgroundColor:'black',
        margin:10,
        color:'white'
    },
    button:{
       backgroundColor:'black'
    },
    image:{
        marginLeft:160,
        height:100,
        width:100
    },
    view:{
        flexDirection:'column',
        alignSelf:'center'
    }
});

export default LoginScreen;