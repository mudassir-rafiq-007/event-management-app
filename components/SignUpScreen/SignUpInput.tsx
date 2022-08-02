import { View, TextInput, StyleSheet } from "react-native";
import FlatButton from "../Buttons/FlatButton";
import TextButton from "../Buttons/TextButton";


interface propsInterface{
  navigation: {
    navigate: (value: string)=> void
  }
}

export default function SignUpInput(props: propsInterface) {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.nameInputContainer}>
        <TextInput
          style={styles.nameContainer}
          selectionColor='#0d67b5'
          placeholder="First Name"
          textAlign="center"
        ></TextInput>
        <TextInput
          style={styles.nameContainer}
          selectionColor='#0d67b5'
          placeholder="Last Name"
          textAlign="center"
        ></TextInput>
      </View>

      <TextInput
        style={styles.inputContainer}
        selectionColor='#0d67b5'
        placeholder="Email"
        textAlign="center"
      ></TextInput>
      <TextInput
        style={styles.inputContainer}
        selectionColor='#0d67b5'
        placeholder="Password"
        secureTextEntry={true}
        textAlign="center"
      ></TextInput>
      <TextInput
        style={styles.inputContainer}
        selectionColor='#0d67b5'
        placeholder="Confirm Password"
        secureTextEntry={true}
        textAlign="center"
      ></TextInput>
      <View style={styles.buttonContainer}>
        <FlatButton title="Sign Up" onPressed={() => {}}></FlatButton>
        </View>
        <View>
        <TextButton
          title="Already have an account?"
          onPressed={() => {props.navigation.navigate('Login')}}
        ></TextButton>
        </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: { flex: 3, alignItems: "center", justifyContent: "center" },

  nameInputContainer: {
    
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
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

  nameContainer: {
    
    borderColor: '#0d67b5',
    borderWidth: 1,
    borderRadius: 10,
    width: "50%",
    height: 50,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    fontSize: 16,
    color: "black",
    fontStyle: "italic",
    backgroundColor: "#eef0e9",
  },

  buttonContainer: {
    alignItems: "center",
    margin: 20,
  },
});
