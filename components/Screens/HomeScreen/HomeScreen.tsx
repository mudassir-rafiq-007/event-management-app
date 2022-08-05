import { signOut } from "@firebase/auth";
import { Alert, StyleSheet, Text, View } from "react-native";
import FlatButton from "../../Buttons/FlatButton";
import { auth } from "../../Firebase/Firebase";

interface propstoHome {
  navigation: {
    navigate: (value: string) => void;
  };
}

export default function HomeScreen(props: propstoHome) {
  async function logOut() {
    await signOut(auth)
      .then(() => {
        props.navigation.navigate("Login");
      })
      .catch((error) => Alert.alert(error.message));
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Welcome to Event Tracker</Text>
      <Text style={styles.text2}>Logged in as: {auth.currentUser?.email}</Text>
      <FlatButton title="Log Out" onPressed={logOut}></FlatButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  text2: {
    fontWeight: "bold",
  },
});
