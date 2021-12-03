import React from "react";
import { View,Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  console.log('Props Object : ')
  console.log(props);

  return <View>
      <Text style={styles.text}>Home Screen</Text>
        <Button 
          onPress={()=>props.navigation.navigate('FlexScreen')}
          title="Go to FlexScreen"
        />
        <Button 
          onPress={()=>props.navigation.navigate('LoginScreen')}
          title="Go to LoginScreen"
        />
    </View>
    
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;