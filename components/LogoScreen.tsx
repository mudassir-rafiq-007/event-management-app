import { View, Text, StyleSheet } from "react-native"

export default function LogoScreen  () {
return(
    <View style={styles1.logoScreenContainer}>
        <Text style={styles1.text1}>EM.</Text>
        <Text style={styles1.text2}>Events Management App</Text>
      </View>
)
}


const styles1 = StyleSheet.create({
    logoScreenContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginHorizontal: 20,
      marginTop: 30,
    },
  
    text1: {
      color: "#e33636",
      fontSize: 100,
      fontWeight: "bold",
      fontFamily: "serif",
    },
  
    text2: {
      color: "#e33636",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 30,
    },
  });



