import { View, StatusBar, ScrollView } from "react-native";
import LogoView from "./LogoView";
import InputView from "./InputView";

interface propstoLogin{
    navigation : {
        navigate: (value: string)=> void
    }
}

export default function LoginScreen(props: propstoLogin) {
  return (
    
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#0d67b5"} />
      <LogoView />
      <InputView navigation={props}/>
    </View>
  );
}
