
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { auth } from "./components/Firebase/Firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./components/Screens/LoginScreen/LoginScreen";
import SignUp from "./components/Screens/SignUpScreen/SignUp";

export default function App() {

  const Stack = createNativeStackNavigator();

 let initRoute='Login'

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        initRoute='HomeScreen'
        console.log(user.email);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initRoute}>
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
