import { View, TextInput, Text, StyleSheet } from "react-native";
import FlatButton from "../../Buttons/FlatButton";
import TextButton from "../../Buttons/TextButton";

interface propsToSignUp{
    navigation: {
        navigate: (value: string) => void;
      };

    enteredData: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string,
    
        invalidFirstName: boolean,
        invalidLastName: boolean,
        invalidEmail: boolean,
        invalidPassword: boolean,
        invalidConfirmPassword: boolean,
    };
    firstNameValue: (value: string)=> void;
    lastNameValue: (value: string)=> void;
    emailValue: (value: string)=> void;
    passwordValue: (value: string)=> void;
    confirmPasswordValue: (value: string)=> void;

    firstNameValidity: ()=>void;
    lastNameValidity: ()=>void;
    emailValidity: ()=>void;
    passwordValidity: ()=>void;
    signUp: ()=>void;
}

export default function SignUpForm (props: propsToSignUp){

    return(
        <View style={styles.viewContainer}>
        <View style={styles.nameInputContainer}>
          <View style={{ width: "50%", marginRight: 5 }}>
            <TextInput
              style={
                // Sets the style of field according to the validity of input
                props.enteredData.invalidFirstName
                  ? styles.invalidNameContainer
                  : styles.validNameContainer
              }
              value={props.enteredData.firstName}
              onChangeText={props.firstNameValue}
              onEndEditing={props.firstNameValidity}
              selectionColor="#0d67b5"
              placeholder="First Name"
              textAlign="center"
            ></TextInput>
            {props.enteredData.invalidFirstName ? (
              <Text style={styles.errorText}>
                *Name must contain alphabets only
              </Text>
            ) : null}
          </View>
          
          <View style={{ width: "50%", marginLeft: 5 }}>
            <TextInput
              style={
                // Sets the style of field according to the validity of input
                props.enteredData.invalidLastName
                  ? styles.invalidNameContainer
                  : styles.validNameContainer
              }
              value={props.enteredData.lastName}
              onChangeText={props.lastNameValue}
              onEndEditing={props.lastNameValidity}
              selectionColor="#0d67b5"
              placeholder="Last Name"
              textAlign="center"
            ></TextInput>
            {props.enteredData.invalidLastName ? (
              <Text style={styles.errorText}>
                *Name must contain alphabets only
              </Text>
            ) : null}
          </View>
        </View>
        <TextInput
          style={
            // Sets the style of field according to the validity of input
            props.enteredData.invalidEmail
              ? styles.invalidInputContainer
              : styles.validInputContainer
          }
          value={props.enteredData.email}
          onChangeText={props.emailValue}
          onEndEditing={props.emailValidity}
          selectionColor="#0d67b5"
          placeholder="Email"
          textAlign="center"
        ></TextInput>
        {props.enteredData.invalidEmail ? (
          <Text style={styles.errorText}>*Invalid Email</Text>
        ) : null}
  
        <TextInput
          style={
            // Sets the style of field according to the validity of input
            props.enteredData.invalidPassword
              ? styles.invalidInputContainer
              : styles.validInputContainer
          }
          value={props.enteredData.password}
          onChangeText={props.passwordValue}
          onEndEditing={props.passwordValidity}
          selectionColor="#0d67b5"
          placeholder="Password"
          secureTextEntry={true}
          textAlign="center"
        ></TextInput> 
        {props.enteredData.invalidPassword ? (
          <Text style={styles.errorText}>
            *Password must be atleast 6 characters long
          </Text>
        ) : null}
        <TextInput
          style={
            // Sets the style of field according to the validity of input
            props.enteredData.invalidConfirmPassword
              ? styles.invalidInputContainer
              : styles.validInputContainer
          }
          value={props.enteredData.confirmPassword}
          onChangeText={props.confirmPasswordValue}
          selectionColor="#0d67b5"
          placeholder="Confirm Password"
          secureTextEntry={true}
          textAlign="center"
        ></TextInput>
        {props.enteredData.invalidConfirmPassword ? (
          <Text style={styles.errorText}>*Passwords don't match</Text>
        ) : null}
  
        <View style={styles.buttonContainer}>
          <FlatButton title="Sign Up" onPressed={props.signUp}></FlatButton>
        </View>
        <View>
          <TextButton
            title="Already have an account?"
            onPressed={() => {
              props.navigation.navigate("Login");
            }}
          ></TextButton>
        </View>
      </View> 
    )
}

const styles = StyleSheet.create({
    viewContainer: { flex: 3, alignItems: "center", justifyContent: "center" },
  
    validInputContainer: {
      borderColor: "#0d67b5",
      borderWidth: 1,
      borderRadius: 10,
      width: "80%",
      height: 50,
      marginTop: 10,
      padding: 10,
      fontSize: 16,
      color: "#0d67b5",
      fontStyle: "italic",
      backgroundColor: "#eef0e9",
    },
  
    invalidInputContainer: {
      borderColor: "red",
      borderWidth: 2,
      borderRadius: 10,
      width: "80%",
      height: 50,
      marginTop: 10,
      padding: 10,
      fontSize: 16,
      color: "red",
      fontStyle: "italic",
      backgroundColor: "#eef0e9",
    },
  
    nameInputContainer: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  
    validNameContainer: {
      borderColor: "#0d67b5",
      borderWidth: 1,
      borderRadius: 10,
      width: "100%",
      height: 50,
      marginTop: 10,
      padding: 10,
      fontSize: 16,
      color: "#0d67b5",
      fontStyle: "italic",
      backgroundColor: "#eef0e9",
    },
  
    invalidNameContainer: {
      borderColor: "red",
      borderWidth: 2,
      borderRadius: 10,
      width: "100%",
      height: 50,
      marginTop: 10,
      padding: 10,
      fontSize: 16,
      color: "red",
      fontStyle: "italic",
      backgroundColor: "#eef0e9",
    },
  
    errorText: {
      fontSize: 8,
      color: "red",
      fontStyle: "italic",
      marginLeft: 10,
    },
  
    buttonContainer: {
      alignItems: "center",
      margin: 20,
    },
  });
  