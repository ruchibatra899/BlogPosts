import React , {useContext,useEffect} from 'react'
import {Text,View,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native'
import {Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';




const IndexScreen=({navigation})=>{

  const {state,deleteBlogPost,getBlogPosts} = useContext(Context);

  useEffect(()=>{
    getBlogPosts()

    const Listener=navigation.addListener('didFocus',()=>{
      getBlogPosts()
    })

    return ()=>{
      Listener.remove();
    }
  },[]);


  return (<View>
    {/* <Button title="Add post" onPress={()=> addBlogPost() }/> */}
    <FlatList
      data={state}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({item})=>{
        return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id})}}>
        <View style={style.viewStyle}>
           <Text style={style.textStyle}>{item.title}</Text>
           <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)

           }}>
           <FontAwesome name="trash-o" size={30} color="black" />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>)
      }}
    />
    </View> 
    )

}
IndexScreen.navigationOptions=({navigation})=>{
  return {
    headerRight:( <TouchableOpacity onPress={()=>{
      navigation.navigate('Create');
    }}>
      <FontAwesome style={{marginHorizontal:10}} name="plus-square-o" size={35} color="black" />
    </TouchableOpacity>
    )
  };
}

const style=StyleSheet.create({
  viewStyle:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10,
    paddingVertical:10,
    borderBottomWidth:1
  },
  textStyle:{
    fontSize:25
  }
})

export default IndexScreen;