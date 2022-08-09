import { sendPasswordResetEmail } from "@firebase/auth";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import FlatButton from "../../Buttons/FlatButton";
import TextButton from "../../Buttons/TextButton";
import { auth } from "../../Firebase/Firebase";

interface propstoForgot {
  navigation: {
    navigate: (value: string) => void;
  };
}

export default function ForgotPassword(props: propstoForgot) {
  const [email, setEmail] = useState("");

  function emailInput(value: string) {
    setEmail(value);
  }

  function passwordReset() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          "Reset Email Sent",
          "An email containing password reset link has been sent (check spam folder)"
        );
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        if (/user-not-found/.test(error.message)) {
          Alert.alert(
            "No User Found",
            "There is no user corresponding to the email address"
          );
        } else if (/invalid-email/.test(error.message)) {
          Alert.alert("Invalid Email", "Email address is not valid");
        } else {
          Alert.alert("Enter email address");
        }
      });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/event-tracker-transparent.png")}
        ></Image>
        <Text style={styles.logoText}>Reset Password</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.inputContainer}
          value={email}
          onChangeText={emailInput}
          placeholder="Enter Email"
          autoCapitalize="none"
        ></TextInput>
        <FlatButton
          title="Send Password Reset Link"
          onPressed={passwordReset}
        ></FlatButton>
        <TextButton
          title="Back to Login"
          onPressed={() => {
            props.navigation.navigate("Login");
          }}
        ></TextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", justifyContent: "center" },

  inputContainer: {
    textAlign: "center",
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

  logoContainer: {
    flex: 1,
    backgroundColor: "#0d67b5",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    paddingBottom: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  logoImage: { height: "100%", width: "100%" },

  logoText: {
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: { fontSize: 18, textAlign: "center", margin: 20 },
  noteText: { fontSize: 12, textAlign: "center", margin: 20 },
});
