import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native"


interface inputProps {
    userData: (data: {userID: string, userPassword: string}[]) => void;
    propData: {userID: string, userPassword: string}[];
}
export default function  InputComponents (props: inputProps) {

    const [userName, setUserName] = useState("");
    const inputUserHandler = (input: string) => {
      setUserName(input);
    };
  
    const [password, setPassword] = useState("");
    const inputPasswordHandler = (input: string) => {
      setPassword(input);
    };
  
    const [userDetail, setUserDetail] = useState(props.propData);
    const loginHandler = () => {
      setUserDetail(
        (detail) => (detail = [{ userID: userName, userPassword: password }])
      );
      props.userData(userDetail)
    };
  
    return (
        <View style={{ alignItems: "center", width: '100%'}}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    
  inputContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    height: 60,
    margin: 10,
    padding: 10,
    fontSize: 14,
    fontStyle: "italic",
    color: "white",
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

})