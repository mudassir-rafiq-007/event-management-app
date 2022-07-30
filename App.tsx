import React, { useState } from "react";
import FlatButton from "./components/FlatButton";
import InputComponents from "./components/InputComponents";
import LogoScreen from "./components/LogoScreen";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  // User Login Detail
  const detail: { userID: string; userPassword: string }[] = [
    { userID: "", userPassword: "" },
  ];

  // Takes Input Data from InputComponents.tsx file & save it into User Login Detail
  const [loginData, setLoginData] = useState(detail);
  function getData(data: { userID: string; userPassword: string }[]) {
    setLoginData(data);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <LogoScreen></LogoScreen>

      <View style={styles.loginScreenContainer}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"grey"}
        ></StatusBar>

        <InputComponents userData={getData} propData={detail}></InputComponents>

        {/*Displays Sign Up button along with Login button when user comes to login screen */}
        {loginData[0].userID === "" ? (
          <View style={{ alignItems: "center" }}>
            <Text> or </Text>
            <FlatButton
              buttonFunction={() => {}}
              buttonText="Sign Up"
            ></FlatButton>
          </View>
        ) : (
          // Displays UserName on screen if user inputs his data
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>
              Logged in as : {loginData[0].userID}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
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
