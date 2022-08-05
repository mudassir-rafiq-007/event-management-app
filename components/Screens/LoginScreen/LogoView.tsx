import { View, StyleSheet, Image } from "react-native";

export default function LogoView() {
  return (
    <View style={styles1.logoScreenContainer}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        source={require("../../../assets/event-tracker-logos.jpeg")}
      ></Image>
    </View>
  );
}

const styles1 = StyleSheet.create({
  logoScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
