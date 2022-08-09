import { useState } from "react";
import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import SignUpForm from "./SignUpForm";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

// Type of Navigation Prop received
interface propsInterface {
  navigation: {
    navigate: (value: string) => void;
  };
}
// Main SignUp Function
export default function SignUpInput(props: propsInterface) {
  const [isSigningUp, setIsSigningUp] = useState(false);

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

  // Saves the value of First Name Field to userInput object
  function onFirstNameInput(value: string) {
    setUserInput({
      ...userInput,
      firstName: value,
    });
  }

  // Saves the value of Last Name Field to userInput object
  function onLastNameInput(value: string) {
    setUserInput({
      ...userInput,
      lastName: value,
    });
  }

  // Saves the value of Email Field to userInput object
  function onEmailInput(value: string) {
    setUserInput({
      ...userInput,
      email: value,
    });
  }

  // Saves the value of Password Field to userInput object
  function onPasswordInput(value: string) {
    setUserInput({
      ...userInput,
      password: value,
    });
  }

  // Matches the confirm Password value with Password Field
  // If password and confirm password fields data matches, then you can sign up
  function onConfirmPasswordInput(value: string) {
    if (userInput.password != value) {
      setUserInput({
        ...userInput,
        confirmPassword: value,
        invalidConfirmPassword: true,
      });
    } else {
      setUserInput({
        ...userInput,
        confirmPassword: value,
        invalidConfirmPassword: false,
      });
    }
  }

  // For Validation of Input Data
  const specialChar = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  const numbers = /\d/;

  // Checks the validity of user input
  function firstNameHandler() {
    setUserInput({
      ...userInput,
      invalidFirstName:
        specialChar.test(userInput.firstName) ||
        numbers.test(userInput.firstName),
    });
  }

  // Checks the validity of user input
  function lastNameHandler() {
    setUserInput({
      ...userInput,
      invalidLastName:
        specialChar.test(userInput.lastName) ||
        numbers.test(userInput.lastName),
    });
  }

  // Checks the validity of user input
  function emailHandler() {
    setUserInput({
      ...userInput,
      invalidEmail:
        !userInput.email.includes(".") ||
        !userInput.email.includes("@") ||
        specialChar.test(userInput.email),
    });
  }

  // Checks the validity of user input
  function passwordHandler() {
    setUserInput({
      ...userInput,
      invalidPassword: userInput.password.length < 6,
    });
  }

  // Main function for sign up
  // Function contains nested ifs
  async function signUpHandler() {
    // This condition checks if user has entered the data in every given field
    if (
      userInput.firstName &&
      userInput.lastName &&
      userInput.email &&
      userInput.password &&
      userInput.confirmPassword
    ) {
      // This condition checks the validity of entered data
      if (
        userInput.invalidFirstName ||
        userInput.invalidLastName ||
        userInput.invalidEmail ||
        userInput.invalidPassword ||
        userInput.invalidConfirmPassword
      ) {
        // If any field contains invalid input, this displays error
        Alert.alert("Invalid Input", "Data Fields contain invalid Input");
      } else {
        setIsSigningUp(true);
        await createUserWithEmailAndPassword(
          auth,
          userInput.email,
          userInput.password
        )
          .then((userCredentials) => {
            addDoc(collection(db, "users"), {
              userFirstName: userInput.firstName,
              userLastName: userInput.lastName,
              userEmail: userInput.email,
              userPassword: userInput.password,
            });
            sendEmailVerification(userCredentials.user);

            props.navigation.navigate("Verify");
          })
          .catch((error) => {
            if (/email-already-in-use/.test(error.message)) {
              Alert.alert(
                "Account already exists",
                "There already exists an account with the given email address"
              );
            } else {
              Alert.alert("Invalid Email", "Given email address is not valid");
            }
          });
        setIsSigningUp(false);
        // Sets the input fields back to empty
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

  if (isSigningUp) {
    return <LoadingIndicator></LoadingIndicator>;
  }

  return (
    // Main Container
    <SignUpForm
      navigation={props.navigation}
      enteredData={userInput}
      firstNameValue={onFirstNameInput}
      lastNameValue={onLastNameInput}
      emailValue={onEmailInput}
      passwordValue={onPasswordInput}
      confirmPasswordValue={onConfirmPasswordInput}
      firstNameValidity={firstNameHandler}
      lastNameValidity={lastNameHandler}
      emailValidity={emailHandler}
      passwordValidity={passwordHandler}
      signUp={signUpHandler}
    ></SignUpForm>
  );
}
