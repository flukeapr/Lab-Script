import { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function Lab4_2_3() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
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


  const filterProducts = (props) => {
    if (props === 'IN STOCK') {
      return products.filter((prod) => prod.stock !== "0");
    } else {
      return products;
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>LAB 4 คำสั่ง 2 และ 3</Text>
      <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity style={styles.button} onPress={() => setFilter("ALL")}>
          <Text>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setFilter("IN STOCK")}>
          <Text>IN STOCK</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {products.filter((prod)=>{
          if(filter==="ALL"){
            return prod
          }else{
            return prod.stock !== "0"
          }
        }).map((item) => (
          <View key={item.id} style={styles.product}>
            <Image
              style={styles.image}
              source={{ uri: item.pic }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontStyle: 'italic' }}>จำนวนคงเหลือ {item.stock}</Text>
            <Text style={{ color: 'red' }}>${item.price}</Text>
          </View>
        ))}
      </ScrollView>
      
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
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
    width: 100,
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


