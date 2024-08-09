import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import {useState,useEffect} from 'react'

export default function ProductCardAPI() {
const [products ,setProducts] = useState([]);
useEffect(()=>{
    async function fetchProducts(){
     const res =   await fetch('https://it2.sut.ac.th/labexample/product.php')
     const data = await res.json();
    
     if(data.products){
        
        setProducts(data.products);
     }
    
    }
    fetchProducts().then(console.log('fetch complete'))
},[])
  return (
    <ScrollView>
        {products.map((item)=>(
           <View key={item.id} style={styles.product}>
           <Image
               style={styles.image}
               source={{ uri: item.pic }}
             />
            
             <Text style={styles.title}>{item.name}</Text>
             <Text style={{fontStyle:'italic'}}>จำนวนคงเหลือ {item.stock}</Text>
             <Text style={{color:'red'}}>${item.price}</Text>
           </View>
        )
            
        )}
    </ScrollView>
    
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