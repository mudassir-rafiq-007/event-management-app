import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function App() {
  const [userName, setUserName] = useState("");
  const inputUserHandler = (input: string) => {
    setUserName(input);
  };

  const [password, setPassword] = useState("");
  const inputPasswordHandler = (input: string) => {
    setPassword(input);
  };

  const detail: { userID: string; userPassword: string }[] = [
    { userID: "", userPassword: "" },
  ];

  const [userDetail, setUserDetail] = useState(detail);
  const loginHandler = () => {
    setUserDetail(
      (detail) => (detail = [{ userID: userName, userPassword: password }])
    );
    setUserName('')
    setPassword('')
  };



  return (
  
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <View style={styles1.logoScreenContainer}>
        <Text style={styles1.text1}>EM.</Text>
        <Text style={styles1.text2}>Events Management App</Text>
      </View>

      <View style={styles.loginScreenContainer}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"grey"}
        ></StatusBar>

        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Username"
          placeholderTextColor={"#d3d3d3"}
          textAlign="center"
          onChangeText={inputUserHandler}
        ></TextInput>

        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Password"
          placeholderTextColor={"#d3d3d3"}
          secureTextEntry
          textAlign="center"
          onChangeText={inputPasswordHandler}
        ></TextInput>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loginHandler}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {userDetail[0].userID !== "" ? (
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>
              Logged in as : {userDetail[0].userID}
            </Text>
          </View>
        ) : (
          <View style={{alignItems: "center"}}>
            <Text> or </Text>

            <View>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  logoScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 30,
  },

  text1: {
    color: "#e33636",
    fontSize: 100,
    fontWeight: "bold",
    fontFamily: "serif",
  },

  text2: {
    color: "#e33636",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
});

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },

  inputContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    width: "80%",
    height: 60,
    margin: 10,
    padding: 5,
    fontSize: 14,
    fontStyle: "italic",
    color: 'white'

  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonContainer: {
    backgroundColor: "#e33636",
    padding: 10,
    width: 100,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },

  loginText: {
    color: "white",
    fontSize: 15,
  },

  loginTextContainer: {
    backgroundColor: "#e33636",
    marginTop: 40,
    padding: 15,
    borderRadius: 10,
  },
});
