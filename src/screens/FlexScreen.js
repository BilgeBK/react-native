import React from "react";
import {View, Text,StyleSheet} from "react-native";

const FlexScreen =()=>{
    return <View >
        <Text style={{backgroundColor:'pink'},styles.view}></Text>
        <Text style={{backgroundColor:'green',alignSelf:'center'},styles.view}></Text>
        <Text style={{backgroundColor:'purple',alignSelf:'flex-end',position:'absolute'},styles.view}></Text> 

    </View>
};
const styles = StyleSheet.create({
    view:{
        height:100,
        width:100
    }
}); 

export default FlexScreen;