import React, { useState, useContext } from 'react'
import {Context} from '../context/BlogContext';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
  const {state} =useContext(Context);

  const blogPost =state.find((blogPost)=> blogPost.id=== navigation.getParam('id'))
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions=({navigation})=>{
  return {
    headerRight:(
      <TouchableOpacity onPress={()=>{navigation.navigate('Edit',{id:navigation.getParam('id')})}}>
      <FontAwesome style={{marginHorizontal:10}} name="edit" size={30} color="black" />
      </TouchableOpacity>

    )
  }
}

const styles=StyleSheet.create({

})

export default ShowScreen