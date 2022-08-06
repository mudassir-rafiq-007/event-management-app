import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

interface propType{
    title: string;
    onPressed: ()=> void;
}

export default function FlatButton (props: propType) {

    return (
        <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.onPressed}
        >
          <Text style={styles.buttonText}>{props.title}</Text>
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
        width: "50%",
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
      },
})