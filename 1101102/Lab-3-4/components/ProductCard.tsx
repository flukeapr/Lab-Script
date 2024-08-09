import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import {useState,useEffect} from 'react'

export default function ProductCard(props) {

  return (
  
      
         <View key={props.id} style={styles.product}>
        <Image
            style={styles.image}
            source={{ uri: props.image }}
          />
         
          <Text style={styles.title}>{props.name}</Text>
          <Text style={{fontStyle:'italic'}}>จำนวนคงเหลือ {props.stock}</Text>
          <Text style={{color:'red'}}>${props.price}</Text>
        </View>
      
      
       
    
 
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  product: {
    width: 300,
    height: 350,
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
    margin:10

  },
  image: {
      width:150,
      height:150,
      
  }

})