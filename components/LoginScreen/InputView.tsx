import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native"
import FlatButton from "../FlatButton";


interface inputProps {
    userData: (data: {userID: string, userPassword: string}[]) => void;
    propData: {userID: string, userPassword: string}[];
}

export default function  InputView (props: inputProps) {

    // Takes UserName Input Value
    const [userName, setUserName] = useState("");
    const inputUserHandler = (input: string) => {
      setUserName(input);
    };
  
    // Takes Password Input Value
    const [password, setPassword] = useState("");
    const inputPasswordHandler = (input: string) => {
      setPassword(input);
    };
  
    // Saves both UserName & Password in form of object into an array
    const [userDetail, setUserDetail] = useState(props.propData);
    const loginHandler = () => {
      setUserDetail(
        (detail) => (detail = [{ userID: userName, userPassword: password }])
      );
    //   Sends data to App.tsx file
      props.userData(userDetail)
    };
  
    return (
        <View style={{flex:1, alignItems: "center", justifyContent: 'center', width: '100%'}}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Username"
          placeholderTextColor={"black"}
          textAlign="center"
          onChangeText={inputUserHandler}
        ></TextInput>

        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Password"
          placeholderTextColor={"black"}
          secureTextEntry
          textAlign="center"
          onChangeText={inputPasswordHandler}
        ></TextInput>

        <FlatButton buttonText='Login' buttonFunction={loginHandler}></FlatButton>
        <Text>or</Text>
        <FlatButton buttonText='Sign Up' buttonFunction={()=>{}}></FlatButton>
        </View>
    )
}

const styles = StyleSheet.create({
    
  inputContainer: {
    // borderColor: "#0d67b5",
    // borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    height: 50,
    margin: 10,
    padding: 10,
    fontSize: 14,
    color: 'white',
    fontStyle: "italic",
    backgroundColor: "#eef0e9",
  },
})