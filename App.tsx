import React, { useState } from "react";
import InputView from "./components/LoginScreen/InputView";
import { View, StatusBar } from "react-native";
import LogoView from "./components/LoginScreen/LogoView";


export default function App() {
  // User Login Detail
  const detail: { userID: string; userPassword: string }[] = [
    { userID: "", userPassword: "" },
  ];

  // Takes Input Data from InputComponents.tsx file & save it into User Login Detail
  const [loginData, setLoginData] = useState(detail);
  function getData(data: { userID: string; userPassword: string }[]) {
    setLoginData(data);
  }

  return (
  
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#0d67b5"} />

        <LogoView />

        <InputView userData={getData} propData={detail} />
      </View>
    
  );
}

// const styles = StyleSheet.create({
//   loginScreenContainer: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },

//   loginText: {
//     color: "white",
//     fontSize: 15,
//   },

//   loginTextContainer: {
//     backgroundColor: "#0d67b5",
//     marginTop: 40,
//     padding: 15,
//     borderRadius: 10,
//   },
// });
