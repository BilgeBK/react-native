import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FlexScreen from "./src/screens/FlexScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Flex : FlexScreen,
    Login : LoginScreen 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);