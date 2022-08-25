import React,{useEffect,useState} from 'react';
import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import { Stylesheet } from '../../StyleSheet/Stylesheet';
import { DetailComponent } from '../Components/DetailComponent';
import { NotFoundComponent } from '../Components/NotFoundComponent';
import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent'


export function ProfileScreen ({navigation,route}) {
      const [searchText,setsearchText] = useState('')
      const [ProfileObject, setProfileObject] = useState({})
      const [statusCode, setStatusCode] = useState()
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(false)

      useEffect(()=>{ 
        if(route.params) {
          getUsers()
        }
      },[])
      const getUsers = async () => {
        setLoading(true)
        try {
          const response = await fetch(`https://api.github.com/users/${route.params ? route.params.login : searchText}`);
          const json = await response.json();
          setStatusCode(response.status)
          setProfileObject(json)
          setError(false)
          setTimeout(() => {
            setLoading(false)
          }, 2000);
        } catch (error) {
          setLoading(false)
          setError(true)
        }
      }
 
  return(
    <View style={Stylesheet.MainContainer}>
      {route.params  ? <View></View> : <View style={Stylesheet.SearchBarContainer}>
        <View style={Stylesheet.InputContainer}>
          <TextInput 
            style={Stylesheet.textinput} 
            placeholderTextColor="white" 
            placeholder='Enter Name To Search' 
            value={searchText}
            onChangeText={setsearchText}
             />
        </View>
        <View style={Stylesheet.SearchButtonContainer}>
            <TouchableOpacity style={Stylesheet.SearchButton} onPress={getUsers}>
              <Text style={Stylesheet.SearchTextButton}>Search</Text>
            </TouchableOpacity>
        </View>
      </View>
      }
      <View style={Stylesheet.ResponseContainer}>
        { error == false ? loading  ? <LoadingComponent /> : statusCode === 200 ? 
        <DetailComponent
          navigation={navigation}
          avatar_url={ProfileObject.avatar_url}
          name={ProfileObject.name}
          login={ProfileObject.login}
          followers={ProfileObject.followers}
          following={ProfileObject.following}
          location={ProfileObject.location} 
          public_repos={ProfileObject.public_repos}
          public_gists={ProfileObject.public_gists}
          followers_url={ProfileObject.followers_url}
          following_url={ProfileObject.following_url}
        /> 
        :
        <NotFoundComponent message={ProfileObject.message} />
        : 
        <ErrorComponent />
        }
      </View>
    </View>
  )
}

