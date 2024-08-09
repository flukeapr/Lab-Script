import { Image, StyleSheet, Platform,Alert,View,ScrollView,Text,TouchableOpacity,StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Login from '../Login';
import { useState,useEffect } from 'react';
interface Data {
  id:string;
  pic:string;
  name: string;
  price: string;
  image: string;
  stock: string;
}
export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Data[]>([]);
  const [endList, setEndList] = useState(false);
  const [filter,setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://it2.sut.ac.th/labexample/product.php?pageno=${page}`);
        const data = await res.json();
        if (data.products.length > 0) {
          setPage(prevPage => prevPage + 1);
          setProducts(prevProducts => [...prevProducts, ...data.products]);
        } else {
          setEndList(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [page]);

  const handleAlert =(name:string)=>{
    Alert.alert("Alert",name,[{
      text: 'OK',  
    }]);
  }

  return (
    <View style={styles.container}>
   
    <View style={{ flexDirection: 'column', width: 300, justifyContent: 'space-between', margin: 10 }}>
      <TouchableOpacity style={styles.button} onPress={() => setFilter("ALL")}>
        <Text style={{color:'white',fontWeight:'bold'}}>ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setFilter("IN STOCK")}>
        <Text style={{color:'white',fontWeight:'bold'}}>IN STOCK</Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
      {products.filter((prod:Data)=>{
        if(filter==="ALL"){
          return prod
        }else{
          return prod.stock !== "0"
        }
      }).map((item:Data) => (
        <TouchableOpacity key={item.id} onPress={()=>handleAlert(item.name)}>
           <View  style={styles.product}>
          <Image
            style={styles.image}
            source={{ uri: item.pic }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
          <Text style={{ fontStyle: 'italic' }}>จำนวนคงเหลือ {item.stock}</Text>
          <Text style={{ color: 'red' }}>${item.price}</Text>
        </View>
        </TouchableOpacity>
       
      ))}
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCDA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
  product: {
    width: 300,
    height: 350,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    width: 300,
    borderRadius: 5,
    backgroundColor: '#CCBEFF',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5
  },
});