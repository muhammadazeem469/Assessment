import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Stylesheet } from "../../StyleSheet/Stylesheet";


export function LoadingComponent (){
    return(
    <SkeletonPlaceholder highlightColor="#808080" backgroundColor="#A0A0A0">
            <View style={Stylesheet.SkeltonDetailContainer}>
                <View style={Stylesheet.SkeltonImageContainer}>
                    <View style={Stylesheet.SkeltonImageStyle} />
                </View>
                    <View style={Stylesheet.SkeltonNameContainer}>
                        <View style={Stylesheet.SkeltonName} />
                    </View>
                    <View style={Stylesheet.SkeltonUsernameContainer}>
                        <View style={Stylesheet.SkeltonUsername}/>
                    </View>
                    <View style={Stylesheet.SkeltonFollowerFollowingContainer}>
                        <View style={Stylesheet.FollowersContainer} >
                            <View style={Stylesheet.SkeltonFollowerButton} />
                        </View>
                        <View style={Stylesheet.FollowersContainer} >
                            <View style={Stylesheet.SkeltonFollowerButton} />
                        </View>
                    </View>
                    <View style={Stylesheet.Location}>
                        <View style={Stylesheet.SkeltonLocation}/>
                    </View>
                    <View style={Stylesheet.Publicrepos}>
                        <View style={Stylesheet.SkeltonPublicRepos}/>
                    </View>
                    <View style={Stylesheet.Publicgists}>
                        <View style={Stylesheet.SkeltonPublicGists}/>
                    </View>
            </View>
        </SkeletonPlaceholder>
    )
}