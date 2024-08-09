import { View,Text,Image, ScrollView,ActivityIndicator,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection,getDocs } from 'firebase/firestore';
import { db } from '@/src/config/Firebase';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { Button } from '@ui-kitten/components';
import { isLoaded } from 'expo-font';
import ProductCard from '@/components/ProductCard'

interface Products {
  id:string;
  name:string;
  price:number;
  pic:string;
  stock:number;
  cate:string;
}
export default function Home({navigation}:{navigation:any}) {
  const [products ,setProducts] = useState<Array<Products>>([]);
  const [loading ,setLoading]= useState<Boolean>(true);

  const getProducts = async()=>{
    const prodRef = collection(db,'products')
    const snapshot = await getDocs(prodRef)
    const products:Products[] = snapshot.docs.map(doc=>{
      return {
        id: doc.id,
        name:doc.data().name,
        price: doc.data().price,
        pic: doc.data().pic,
        stock: doc.data().stock,
        cate: doc.data().cate,
      }
    })
    setProducts(products)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts().then(() => {
        setLoading(false);
       
      });
    });
    return unsubscribe;

  },[navigation]);

  return (
    <View className='flex bg-white items-center w-full'>
      {loading ? (
        <View className='flex items-center justify-center h-full'>
          <ActivityIndicator size='large' color='#0284c7' />
        </View>
      ):(
        <>
         <Image className='h-full w-full absolute ' source={require('../assets/images/background.png')}/>

<ScrollView >
{products.map((item)=> (


<ProductCard key={item.id} id={item.id} name={item.name} pic={item.pic} stock={item.stock} price={item.price}/>


)
)}
</ScrollView>
        
        
        </>
       
      )}
      
    </View>
  )
}