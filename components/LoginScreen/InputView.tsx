import { View, TextInput, Text, StyleSheet } from "react-native";
import FlatButton from "../Buttons/FlatButton";
import TextButton from "../Buttons/TextButton";

interface propstoInput {
  navigation: {
    navigation: {
      navigate: (value: string) => void;
    };
  };
}

export default function InputView(props: propstoInput) {
  return (
    <View style={styles.viewContainer}>
      <TextInput
        style={styles.inputContainer}
        selectionColor='#0d67b5'
        placeholder="Enter Username"
        textAlign="center"
      ></TextInput>

      <TextInput
        style={styles.inputContainer}
        selectionColor='#0d67b5'
        placeholder="Enter Password"
        secureTextEntry
        textAlign="center"
      ></TextInput>
      <TextButton title="Forgot password?" onPressed={()=>{}}></TextButton>
      <FlatButton title="Login" onPressed={() => {}}></FlatButton>
      <Text>or</Text>
      <TextButton
        title="Create a new account?"
        onPressed={() => {
          props.navigation.navigation.navigate("SignUp");
        }}
      ></TextButton>
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
    borderColor: '#0d67b5',
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 50,
    margin: 10,
    padding: 10,
    fontSize: 16,
    color: '#0d67b5',
    fontStyle: "italic",
    backgroundColor: "#eef0e9",
  },
});
