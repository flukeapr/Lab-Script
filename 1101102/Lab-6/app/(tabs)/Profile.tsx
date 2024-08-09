import { View, Text,StyleSheet } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Ionicons name='person-circle' size={100}/>
      <Text style={{fontWeight:'bold',fontSize:20}}>Your Name</Text>
      <Link href={'Login'}>
      <View style={styles.btn}>
        <Text style={styles.txtBtn}>กลับหน้าหลัก</Text>
      </View>
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFFCDA'
  },
  txtInput:{
    width:350,
    backgroundColor:'#B0DBFF',
    borderColor:'black',
    borderWidth:1,
    height:60,
    padding:10,
    margin:5
  },
  btn:{
    backgroundColor:'#CCBEFF',
    width:350,
    height:50,
  alignItems:'center',
  justifyContent:'center',
  margin:5
  },
  txtBtn:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  }
})