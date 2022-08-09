import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import SignUp from "./components/Screens/SignUpScreen/SignUp";
import VerifyScreen from "./components/Screens/VerifyScreen/VerifyScreen";
import InputView from "./components/Screens/LoginScreen/InputView";
import ForgotPassword from "./components/Screens/ForgotPasswordScreen/ForgotPassword";
import AuthContextProvider, {
  AuthContext,
} from "./components/Firebase/AuthContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [initRoute, setInitRoute] = useState<string>();
  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    console.log("use efffect  " + AuthCtx.token);
    console.log(AuthCtx.isAuthenticated);
    if (AuthCtx.isAuthenticated === true) {
      setInitRoute("Home");
    } else {
      setInitRoute("Login");
    }
  }, []);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={initRoute}
        >
          <Stack.Screen name="Login" component={InputView} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
