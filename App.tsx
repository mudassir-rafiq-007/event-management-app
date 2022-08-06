import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { auth } from "./components/Firebase/Firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./components/Screens/LoginScreen/LoginScreen";
import SignUp from "./components/Screens/SignUpScreen/SignUp";
import VerifyScreen from "./components/Screens/VerifyScreen/VerifyScreen";
import InputView from "./components/Screens/LoginScreen/InputView";

export default function App() {
  const Stack = createNativeStackNavigator();

  let initRoute = "Login";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        initRoute = "Home";
        console.log(user.email);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initRoute}
      >
        <Stack.Screen name="Login" component={InputView} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
