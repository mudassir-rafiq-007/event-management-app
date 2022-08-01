import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

interface propType{
    buttonText: string;
    buttonFunction: ()=> void;
}

export default function FlatButton (props: propType) {

    return (
        <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.buttonFunction}
        >
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
    
      buttonContainer: {
        backgroundColor: "#0d67b5",
        padding: 10,
        width: 100,
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
      },
})