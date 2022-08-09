import { View, Text, StyleSheet, Image } from "react-native";
import FlatButton from "../../Buttons/FlatButton";

interface propToVerify {
  navigation: {
    navigate: (value: string) => void;
  };
}

export default function VerifyScreen(props: propToVerify) {


  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/event-tracker-transparent.png")}
        ></Image>
        <Text style={styles.logoText}>Verify your Account</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          A Verification email link has been sent to your email. Kindly verify
          your account and then Login.
        </Text>
        <Text style={styles.noteText}>
          Note: Check the Spam folder incase you don't receive email in your
          inbox
        </Text>
        <FlatButton
          title="Back to Login"
          onPressed={() => {
            props.navigation.navigate("Login");
          }}
        ></FlatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  logoContainer: {
    flex: 1,
    backgroundColor: "#0d67b5",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    paddingBottom: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  logoImage: { height: "100%", width: "100%" },

  logoText: {
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: { fontSize: 18, textAlign: "center", margin: 20 },
  noteText: { fontSize: 12, textAlign: "center", margin: 20 },
});
