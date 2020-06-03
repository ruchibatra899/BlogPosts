import React, { useState, useContext } from 'react'
import {Context} from '../context/BlogContext';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';

const EditScreen=({navigation})=>{
 const {state}=useContext(Context);
  const blogPost =state.find(
    blogPost=>blogPost.id===navigation.getParam('id')
  )
 const {editBlogPost} = useContext(Context);

  const [title,setTitle]=useState(blogPost.title);
  const [content,setContent]=useState(blogPost.content);
  return (
    <View>
      <Text style={styles.text}>Edit Title </Text>
      <TextInput style={styles.inputTitle} value={title} onChangeText={(text)=>setTitle(text)}/>
      <Text style={styles.text}>Edit Content </Text>
      <TextInput style={styles.inputContent} value={content} onChangeText={(text)=>setContent(text)}/>
      <Button title="Save Blog Post" onPress={()=>{
        editBlogPost(title,content,navigation.getParam('id'), () => {
          navigation.navigate('Index');
        })
      }}/>
    </View>
    
  )
}

const styles=StyleSheet.create({
  inputTitle:{
    borderWidth:2,
    marginVertical:5
  },
  inputContent:{
    borderWidth:2,
    marginBottom:50
  },
  text:{
    fontSize:30,
    marginVertical:5
  }



})

export default EditScreen