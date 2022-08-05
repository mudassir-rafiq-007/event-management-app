import { View, Image, StyleSheet } from "react-native";
import SignUpInput from "./SignUpInput";

interface propsToSignUp{
  navigation: {
    navigate: (value: string)=> void
  }
}

function SignUp(props: propsToSignUp) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.logoView}>
        <Image style={styles.imageStyle}
          source={require("../../../assets/event-tracker-logos.jpeg")}
        ></Image>
      </View>
      <SignUpInput navigation={props.navigation} ></SignUpInput>
    </View>
  );
}

export default SignUp

const styles = StyleSheet.create({
  logoView: {
    backgroundColor: "#0d67b5",
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    height: '100%',
    width: '100%',
  }
  
});
