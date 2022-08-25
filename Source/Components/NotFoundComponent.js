import React from "react";
import { View,Text } from "react-native";
import { Stylesheet } from "../../StyleSheet/Stylesheet";

export function NotFoundComponent({message}){
    return(
        <View style={Stylesheet.NotFoundContainer}>
            <Text style={Stylesheet.NotFoundText}>{message}</Text>
        </View>
    )
}