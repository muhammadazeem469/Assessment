import React from "react";
import { View,Text } from "react-native";
import { Stylesheet } from "../../StyleSheet/Stylesheet";

export function ErrorComponent(){
    return(
        <View style={Stylesheet.ErrorComponentContainer}>
            <Text style={Stylesheet.ErrorText}>Error</Text>
        </View>
    )
}