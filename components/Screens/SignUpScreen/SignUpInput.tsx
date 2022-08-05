import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import FlatButton from "../../Buttons/FlatButton";
import TextButton from "../../Buttons/TextButton";

interface propsInterface {
  navigation: {
    navigate: (value: string) => void;
  };
}

export default function SignUpInput(props: propsInterface) {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

    invalidFirstName: false,
    invalidLastName: false,
    invalidEmail: false,
    invalidPassword: false,
    invalidConfirmPassword: false,
  });

  const specialChar = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  const numbers = /\d/;

  function onFirstNameInput(value: string) {
    setUserInput({
      ...userInput,
      firstName: value,
    });
  }

  function onLastNameInput(value: string) {
    setUserInput({
      ...userInput,
      lastName: value,
    });
  }

  function onEmailInput(value: string) {
    setUserInput({
      ...userInput,
      email: value,
    });
  }
  function onPasswordInput(value: string) {
    setUserInput({
      ...userInput,
      password: value,
    });
  }
  function onConfirmPasswordInput(value: string) {
    if (userInput.password != value){setUserInput({
      ...userInput,
      confirmPassword: value,
      invalidConfirmPassword: true
    });
  } else {setUserInput({
      ...userInput,
      confirmPassword: value,
      invalidConfirmPassword: false
    });
  }        
  }

  function firstNameHandler() {
    setUserInput({
      ...userInput,
      invalidFirstName:
        specialChar.test(userInput.firstName) ||
        numbers.test(userInput.firstName),
    });
  }

  function lastNameHandler() {
    setUserInput({
      ...userInput,
      invalidLastName:
        specialChar.test(userInput.lastName) ||
        numbers.test(userInput.lastName),
    });
  }

  function emailHandler() {
    setUserInput({
      ...userInput,
      invalidEmail:
        !userInput.email.includes(".") ||
        !userInput.email.includes("@") ||
        specialChar.test(userInput.email),
    });
  }

  function passwordHandler() {
    setUserInput({
      ...userInput,
      invalidPassword: userInput.password.length < 6,
    });
  }

  function signUpHandler() {
    if (
      userInput.firstName &&
      userInput.lastName &&
      userInput.email &&
      userInput.password
    ) {
      if (
        userInput.invalidFirstName ||
        userInput.invalidLastName ||
        userInput.invalidEmail ||
        userInput.invalidPassword ||
        userInput.invalidConfirmPassword
      ) {
        Alert.alert("Invalid Input", "Data Fields contain invalid Input");
      } else {
        createUserWithEmailAndPassword(
          auth,
          userInput.email,
          userInput.password
        ).then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        }).catch((error)=> Alert.alert(error.message))
        setUserInput({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          invalidFirstName: false,
          invalidLastName: false,
          invalidEmail: false,
          invalidPassword: false,
          invalidConfirmPassword: false,
        });
      }
    } else Alert.alert("Error", "Some fields missing data");
  }
  return (
    <View style={styles.viewContainer}>
      <View style={styles.nameInputContainer}>
        <View style={{ width: "50%", marginRight: 5 }}>
          <TextInput
            style={
              userInput.invalidFirstName
                ? styles.invalidNameContainer
                : styles.validNameContainer
            }
            value={userInput.firstName}
            onChangeText={onFirstNameInput}
            onEndEditing={firstNameHandler}
            selectionColor="#0d67b5"
            placeholder="First Name"
            textAlign="center"
          ></TextInput>
          {userInput.invalidFirstName ? (
            <Text style={styles.errorText}>
              *Name must contain alphabets only
            </Text>
          ) : null}
        </View>

        <View style={{ width: "50%", marginLeft: 5 }}>
          <TextInput
            style={
              userInput.invalidLastName
                ? styles.invalidNameContainer
                : styles.validNameContainer
            }
            value={userInput.lastName}
            onChangeText={onLastNameInput}
            onEndEditing={lastNameHandler}
            selectionColor="#0d67b5"
            placeholder="Last Name"
            textAlign="center"
          ></TextInput>
          {userInput.invalidLastName ? (
            <Text style={styles.errorText}>
              *Name must contain alphabets only
            </Text>
          ) : null}
        </View>
      </View>
      <TextInput
        style={
          userInput.invalidEmail
            ? styles.invalidInputContainer
            : styles.validInputContainer
        }
        value={userInput.email}
        onChangeText={onEmailInput}
        onEndEditing={emailHandler}
        selectionColor="#0d67b5"
        placeholder="Email"
        textAlign="center"
      ></TextInput>
      {userInput.invalidEmail ? (
        <Text style={styles.errorText}>*Invalid Email</Text>
      ) : null}

      <TextInput
        style={
          userInput.invalidPassword
            ? styles.invalidInputContainer
            : styles.validInputContainer
        }
        value={userInput.password}
        onChangeText={onPasswordInput}
        onEndEditing={passwordHandler}
        selectionColor="#0d67b5"
        placeholder="Password"
        secureTextEntry={true}
        textAlign="center"
      ></TextInput>
      {userInput.invalidPassword ? (
        <Text style={styles.errorText}>
          *Password must be atleast 6 characters long
        </Text>
      ) : null}
      <TextInput
        style={
          userInput.invalidConfirmPassword
            ? styles.invalidInputContainer
            : styles.validInputContainer
        }
        value={userInput.confirmPassword}
        onChangeText={onConfirmPasswordInput}
        selectionColor="#0d67b5"
        placeholder="Confirm Password"
        secureTextEntry={true}
        textAlign="center"
      ></TextInput>
      {userInput.invalidConfirmPassword ? (
        <Text style={styles.errorText}>*Passwords don't match</Text>
      ) : null}
      <View style={styles.buttonContainer}>
        <FlatButton title="Sign Up" onPressed={signUpHandler}></FlatButton>
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
  );
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
