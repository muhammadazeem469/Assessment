import React from "react";
import { View,Image,Text,TouchableOpacity } from "react-native";
import { Stylesheet } from "../../StyleSheet/Stylesheet";

export function DetailComponent({navigation,avatar_url,name,login,followers,following,location,public_repos,public_gists,followers_url,following_url}){
    return(
        <View style={Stylesheet.DetailContainer}>
            <View style={Stylesheet.ImageContainer}>
                <Image style={Stylesheet.ImageStyle} source={{uri: `${avatar_url}`}} />
            </View>
            <View style={Stylesheet.NameContainer}>
                <Text style={Stylesheet.Name}> {name}</Text>
            </View>
            <View style={Stylesheet.UsernameContainer}>
                <Text style={Stylesheet.Username}> {login} </Text>
            </View>
            <View style={Stylesheet.FollowerFollowingContainer}>
                <View style={Stylesheet.FollowersContainer} >
                    <TouchableOpacity style={Stylesheet.FollowerButton} onPress={()=>{ 
                        navigation.push('List',{url: followers_url})
                        }}>
                        <Text style={Stylesheet.FollowersText}> {followers}  Followers</Text>
                    </TouchableOpacity>
                </View>
                <View style={Stylesheet.FollowersContainer} >
                    <TouchableOpacity style={Stylesheet.FollowerButton} onPress={()=>{ 
                        navigation.push('List',{url: following_url.replace('{/other_user}','')})
                        }}>
                        <Text style={Stylesheet.FollowersText}> {following}  Following</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Stylesheet.Location}>
                <Text style={Stylesheet.Username}> location : {location} </Text>
            </View>
            <View style={Stylesheet.Publicrepos}>
                <Text style={Stylesheet.PublicRepos}> Public Repos : {public_repos} </Text>
            </View>
            <View style={Stylesheet.Publicgists}>
                <Text style={Stylesheet.PublicGists}> Public_gists : {public_gists} </Text>
            </View>
        </View>
    )
}