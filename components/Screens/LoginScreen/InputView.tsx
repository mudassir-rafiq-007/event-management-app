import { auth } from "../../Firebase/Firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
} from "react-native";
import FlatButton from "../../Buttons/FlatButton";
import TextButton from "../../Buttons/TextButton";
import { useContext, useState } from "react";
import LogoView from "./LogoView";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import { AuthContext } from "../../Firebase/AuthContext";

// Navigation Prop type
interface propstoInput {
  navigation: {
    navigate: (value: string) => void;
  };
}

export default function InputView(props: propstoInput) {
  const [isLogging, setIsLogging] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const AuthCtx = useContext(AuthContext);

  // Saves the user input to the userData object
  function emailInput(value: string) {
    setUserData({ ...userData, email: value });
  }

  // Saves the user input to the userData object
  function passwordInput(value: string) {
    setUserData({ ...userData, password: value });
  }

  // Main Login Function
  async function loginUser() {
    if (userData.email && userData.password) {
      setIsLogging(true);
      await signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredentials) => {
          if (userCredentials.user.emailVerified) {
            userCredentials.user.getIdToken(true).then((idToken) => {
              AuthCtx.authenticate(idToken);
              console.log("id token" + idToken);
            });
            props.navigation.navigate("Home");
          } else
            Alert.alert(
              "Email not Verified",
              "Verify your account by clicking a link sent to your email (check spam folder)"
            );
        })
        .catch((error) => {
          if (/invalid-email/.test(error.message)) {
            Alert.alert("Invalid Email", "Entered email is not a valid email");
          } else if (/user-disabled/.test(error.message)) {
            Alert.alert(
              "Account Disabled",
              "User account corresponding to the given email has been disabled"
            );
          } else if (/user-not-found/.test(error.message)) {
            Alert.alert(
              "User not found",
              "There is no user corresponding to the given email"
            );
          } else
            Alert.alert(
              "Invalid Password",
              "Password is invalid for the given email"
            );
        });
      setIsLogging(false);
      setUserData({
        ...userData,
        email: "",
        password: "",
      });
    } else {
      Alert.alert("Empty Fields", "Fill out every field");
    }
  }

  if (isLogging) {
    return <LoadingIndicator></LoadingIndicator>;
  }

  return (
    // Input Fields Container
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#0d67b5"} />
      <LogoView></LogoView>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.inputContainer}
          value={userData.email}
          onChangeText={emailInput}
          autoCapitalize="none"
          selectionColor="#0d67b5"
          placeholder="Enter Email"
          textAlign="center"
        ></TextInput>

        <TextInput
          style={styles.inputContainer}
          value={userData.password}
          onChangeText={passwordInput}
          autoCapitalize="none"
          selectionColor="#0d67b5"
          placeholder="Enter Password"
          secureTextEntry
          textAlign="center"
        ></TextInput>
        <TextButton
          title="Forgot password?"
          onPressed={() => {
            props.navigation.navigate("ForgotPassword");
          }}
        ></TextButton>
        <FlatButton title="Login" onPressed={loginUser}></FlatButton>
        <Text>or</Text>
        <TextButton
          title="Create a new account?"
          onPressed={() => {
            props.navigation.navigate("SignUp");
          }}
        ></TextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  inputContainer: {
    borderColor: "#0d67b5",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 50,
    margin: 10,
    padding: 10,
    fontSize: 16,
    color: "#0d67b5",
    fontStyle: "italic",
    backgroundColor: "#eef0e9",
  },
});
