import { TouchableOpacity, Text } from "react-native"

interface propToTextButton{
    title: string;
    onPressed: ()=>void
}

export default function TextButton (props: propToTextButton) {
    return(
        <TouchableOpacity onPress={props.onPressed}>
        <Text style={{color: '#0d67b5', margin:10}}>{props.title}</Text>
      </TouchableOpacity>
    )
}