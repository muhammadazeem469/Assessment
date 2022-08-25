import React,{useEffect,useState} from 'react';
import { View, Text,FlatList,TouchableOpacity } from 'react-native';
import { RefreshControl } from 'react-native';
import { Stylesheet } from '../../StyleSheet/Stylesheet';
import {NotFoundComponent} from '../Components/NotFoundComponent';
import { ErrorComponent } from '../Components/ErrorComponent';

export function ListScreen({navigation,route}){
    const [DisplayList,setDisplayList] = useState([])
    const [page,setPage] = useState(1)
    const [perpage,setPerpage] = useState(30)
    const [refresh,setRefresh] = useState(false)
    const [error,setError] = useState(false)
    
    const getList = async (url,page,perpage) => {
        try {
          setRefresh(true)
          const response = await fetch(`${url}?page=${page}&perpage=${perpage}`);
          const json = await response.json();
            var temporaryArray = DisplayList
            json.forEach(element => {
              temporaryArray.push(element)
            });
            setDisplayList(temporaryArray)
          setRefresh(false)
          setPage(page+1) 
        } catch (error) {
          setError(true)
        } 
      }

      const onEndReached = ()=> {
        getList(route.params.url,page,perpage)
      }

    useEffect(()=>{
        getList(route.params.url,page,perpage)
        console.log(route.params.url)
    },[])
    const renderItem = ({ item }) => (
        <TouchableOpacity style={Stylesheet.ListRenderItem} onPress={()=>{
            navigation.push('Profile',{login: item.login})
        }}>
            <Text style={Stylesheet.RenterItemText}> {item.login} </Text>
        </TouchableOpacity> 
      );
      const ItemSeparatorComponent =() => {
        return(
            <View style={Stylesheet.RenderItemSeprator}>
            </View>
        )
      }
      const ListEmptyComponent = () => {
        return(
          <NotFoundComponent message={"Empty List"} />
        )
      }
    return(
        <View style={Stylesheet.ListMainContainer}>
          {error ?
           <ErrorComponent /> 
           :
           <FlatList
            data={DisplayList}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={item => item.id}
            initialNumToRender={30}
            ListEmptyComponent={ListEmptyComponent}
            onEndReached={onEndReached}
            refreshControl={
              <RefreshControl refreshing={refresh} />
            }
            refreshing={refresh}
          /> 
           }
          
        </View>
    )

}