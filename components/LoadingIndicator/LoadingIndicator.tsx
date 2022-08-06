import { ActivityIndicator, StyleSheet, View } from "react-native";


export default function LoadingIndicator () {
    return(
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#0d67b5'></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})