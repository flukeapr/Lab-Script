import { View, Text,Image,TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '@/src/config/Firebase';

interface Products {
    id: string;
    name: string;
    price: number;
    pic: string;
    stock: number;
    cate: string;
}

export default function ProductCard({id,name,pic,stock,price} :Pick<Products,| 'id' | 'name' | 'pic' | 'stock'| 'price'>) {

  const addToCart = async()=>{
    try {
      const cartRef = collection(db,'cart')

      await addDoc(cartRef,{name,price,pic}).then(()=> Alert.alert('Alert','เพิ่มเข้าตระกร้าสำเร็จ',[{text:'OK'}]))
  
    } catch (error) {
      console.error(error);
      Alert.alert('Error',`Add to cart Failed ${error}`,[{text:'OK'}])
    }
  }

  return (
    <Animated.View entering={FadeInLeft.delay(300).duration(1000)} key={id} className=' h-[370] bg-white border-2  border-black/5  m-3 rounded-2xl shadow-lg shadow-gray-800 p-5'>
    <View className='flex items-center'>
    <Image source={{uri : pic}} className='w-[250] h-[200]  '/>
      <Text className='text-black font-bold text-lg p-2' numberOfLines={1}>{name}
    </Text>
     
    </View>
    <Text className='text-md'>จำนวนคงเหลือ {stock}</Text>
    {/* <Text className='text-md text-red-500'>$ {item.price}</Text> */}
    <View className='flex flex-row justify-end pt-6'>
    <TouchableOpacity className='mr-2 w-[100] border-2 border-solid border-blue-400  p-3  rounded-xl' >
          <Text className='text-md font-bold text-sky-400 text-center'>$ {price}</Text>
        </TouchableOpacity>
    <TouchableOpacity className='w-[150] bg-blue-400 p-3  rounded-xl' onPress={addToCart}>
          <Text className='text-md font-bold text-white text-center'>Add To Cart</Text>
        </TouchableOpacity>
    </View>
   
   </Animated.View>
  )
}