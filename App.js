
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

const Flex = () => {
  return (

    <ScrollView>
    <View style={styles.container}>
      <View style= {styles.coluna1}>
        <View style= {styles.square1}/>
        <View style={styles.square2} />
        <View style={styles.square3}/>
      </View>
      <View style= {styles.coluna2}>
        <View style={styles.square4}/>
        <View style={styles.square5} Text>
          <Text style={styles.textinho}>F L E X B O X</Text>
        </View>
        
        <View style={styles.square6}/>
      </View>
    </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#443f3f',
    flexDirection:'row',
    
  },

  textinho:{
    transform:[{rotate: "-90deg"}],
    fontSize:40,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center',

  },

  coluna1: {
    backgroundColor: '#443f3f',
    flexDirection:'column',
  },

  coluna2: {
    backgroundColor: '#443f3f',
    flexDirection:'column',
  },

  square1:{
    height:200,
    width:200,
    flexWrap:'wrap',
    backgroundColor:'#a900e6',
    margin:3,
  },

  square2:{
    height:200,
    width:200,
    flexWrap:'wrap',
    backgroundColor:'#97b6ff',
    margin:3,
  },

  square3:{
    height:400,
    width:200,
    flexWrap:'wrap',
    backgroundColor:'#7e00ff',
    margin:3,
  },

  square4:{
    height:200,
    width:200,
    flexWrap:'wrap',
    backgroundColor:'#97b6ff',
    margin:3,
  },
  square5:{
    height:400,
    width:200,
    flexWrap:'wrap',
    backgroundColor:'#459dff',
    textAlign:'center',
    justifyContent:'center',
    margin:3,
  },
  square6:{
    height:200,
    width:200,
    flexWrap:'wrap',
    backgroundColor:'#8200c6',
    margin:3,
  },

  

});

export default Flex;
