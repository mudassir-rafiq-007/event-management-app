import { View, StyleSheet, Image } from "react-native";

export default function LogoView() {
  return (
    <View style={styles.logoScreenContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/event-tracker-logos.jpeg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  logoScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});
