import { Image, StyleSheet, Platform,View, Text,StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ProductCard from '@/components/ProductCard';
import { ScrollView } from 'react-native-gesture-handler';
import ProductCardAPI from '@/components/ProductCardAPI'
import { useEffect } from 'react';

interface Data {
  id: string;
  name: string;
  price: string;
  stock: string;
  cate: string;
  pic: string;
}

export default function HomeScreen() {
  const products = [{
    "id": "1",
    "name": "Pantene แพนทีน มิราเคิล คริสตัล สมูท แชมพู+ครีมนวดผม 500 มล.",
    "price": "599",
    "stock": "2",
    "cate": "ผลิตภัณฑ์ดูแลผม",
    "pic": "http://it2.sut.ac.th/labexample/pics/pantene.jpg"
    },
    {
    "id": "2",
    "name": "ลอรีอัล ปารีส เอลแซฟ เอ็กซ์ตรอว์ดินารี่ ออยล์ 100 มล. (Extraordinary, บ ารุงผม, น้า มนั ใส่ผม, เซรั่มบา ",
    "price": "259",
    "stock": "0",
    "cate": "ผลิตภัณฑ์ดูแลผม",
    "pic": "http://it2.sut.ac.th/labexample/pics/elseve.jpg"
    },
    {
    "id": "3",
    "name": "Microsoft Surface Pro 7 Laptop with Type Cover",
    "price": "38900",
    "stock": "5",
    "cate": "Computer",
    "pic": "http://it2.sut.ac.th/labexample/pics/surface.jpg"
    },
    {
    "id": "4",
    "name": "Desktop PC DELL Optiplex 3080SFF-SNS38SF001",
    "price": "14400",
    "stock": "3",
    "cate": "Computer",
    "pic": "http://it2.sut.ac.th/labexample/pics/dell.jpg"
    },
    {
    "id": "5",
    "name": "ซัมซุง ตู้เย็น 2 ประตู รุ่น RT20HAR1DSA/ST ขนาด 7.4 คิว",
    "price": "6990",
    "stock": "10",
    "cate": "เครื่องใช้ไฟฟ้า",
    "pic": "http://it2.sut.ac.th/labexample/pics/fridge.jpg"
}]

  
  return (
    <GestureHandlerRootView style={styles.container}>
       <Text style={styles.title}>LAB 3</Text>
      <ScrollView>
      
        {products.map((item : Data)=>(
          <ProductCard name={item.name} image={item.pic} stock={item.stock} id={item.id} price={item.price} />
        ))}
       
      </ScrollView>
      
      </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    backgroundColor: '#FFE0B5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'red',
    color:'white',
    padding:10,
    borderRadius:5,
    width:300
  }
});
