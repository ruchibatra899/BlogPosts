import React, { useState, useContext } from 'react'
import {Context} from '../context/BlogContext';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';

const CreateScreen=({navigation})=>{
  const [title,setTitle]=useState('');
  const [content, setContent]=useState('');
  const {addBlogPost} = useContext(Context);

  
  return (
    <View>
      <Text style={styles.text}>Enter Title </Text>
      <TextInput style={styles.inputTitle} value={title} onChangeText={(text)=>setTitle(text)}/>
      <Text style={styles.text}>Enter Content </Text>
      <TextInput style={styles.inputContent} value={content} onChangeText={(text)=>setContent(text)}/>
      <Button title="Add Blog Post" onPress={()=>{
        addBlogPost(title,content,() => {
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

export default CreateScreen