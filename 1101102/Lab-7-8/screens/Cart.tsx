import { View, Text,ActivityIndicator,ScrollView,Image ,TouchableOpacity, Alert} from 'react-native'
import React, { lazy, useEffect, useState } from 'react'
import { addDoc, collection,deleteDoc,getDocs ,doc} from 'firebase/firestore';
import { db } from '@/src/config/Firebase';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeOutLeft,LayoutAnimation } from 'react-native-reanimated';
import Svg, { Path } from "react-native-svg";

interface Cart {
  id:string;
  name:string;
  price:number;
  pic:string;
}

export default function Cart({navigation} : {navigation :any}, props :any) {
  const [cart ,setCart] = useState<Array<Cart>>([]);
  const [loading ,setLoading] = useState<Boolean>(true);
  const [isDelete ,setIsDelete] = useState<Boolean>(true);
  const getCart = async ()=>{
    const cartRef = collection(db,'cart')

    const snapshot = await getDocs(cartRef)

    const cart:Cart[] = snapshot.docs.map(doc=>{
      return {
        id:doc.id,
        name:doc.data().name,
        price:doc.data().price,
        pic:doc.data().pic
      }
    })
    


    setCart(cart);
  }

  const checkOut = async()=>{
    Alert.alert('CheckOut ?' ,'ต้องการสั่งซื้อหรือไม่',[{
      text:'Cancel',
      onPress:()=>{},
      style:'cancel'
    },{
      text:'OK',
      onPress: ()=>{
        cart.map(async(item)=>{
          const orderRef = collection(db,'order');
          const cartRef = doc(db,'cart',item.id);
          await addDoc(orderRef,{
            name:item.name,
            price:item.price,
            pic:item.pic
          })
          await deleteDoc(cartRef)
          getCart();
        })
       
      }
      }])
  }

  const removeFromCart = async(id:string)=>{
    
    Alert.alert('RemoveFromCart' ,'ต้องการลบสินค้าออกจากตระกร้า',[{text:'cancel',style:'cancel',onPress:()=>{}},{
      text:'OK',
      onPress: ()=>{
        const newCart =  cart.filter((item)=> item.id !== id)
          setCart(newCart);
        setTimeout(async()=>{
          const cartRef = doc(db,'cart',id)
          await deleteDoc(cartRef)
          
          getCart()
          
        },1000)
       
      }
    }])
   

  }

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',()=>{
      getCart().then(()=> {
        setLoading(false)
        })
      
    })
    return unsubscribe;
  },[navigation,cart])

  return (
    <View className='flex flex-1 bg-white w-full items-center'>
      <View className='flex justify-center items-center bg-sky-400 w-full h-12 '>
        <TouchableOpacity onPress={checkOut} className='flex flex-row space-x-2'>
          <Text className='text-xl font-bold text-white text-center'>Checkout</Text>
          <Ionicons name='bag-check-outline' size={25} color={'white'} />
        </TouchableOpacity>
      </View>
      {loading ? (
         <View className='flex items-center justify-center h-full'>
         <ActivityIndicator size='large' color='#0284c7' />
       </View>
      ):(
        cart.length > 0 ?(
          <>
          
          <ScrollView>
          {cart.map((item:Cart)=>(
                     <Animated.View entering={FadeInRight.delay(200).duration(1000) } exiting={FadeOutLeft.duration(500)}    key={item.id} className='flex bg-white border-2 border-solid border-black/5 shadow-lg shadow-gray-800 rounded-xl p-5 m-2'>
                      <View className='flex flex-row items-center space-x-44'>
                      <Image source={{uri :item.pic}} className='w-[100] h-[100]'/>
                      <View className='rounded-full items-center justify-center w-10 h-10 border-2 border-gray-600 border-solid'>

                      <Ionicons name='trash-outline' size={30} onPress={()=>removeFromCart(item.id)} />
                      </View>
                      </View>
                        <Text className='text-md'>{item.name}</Text>
                     </Animated.View>
          ))}
         
  
        </ScrollView>
        <View className='flex w-full items-end -z-5'>
        <Svg
      fill="#E1E1E1"
      height="111px"
      width="111px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
      stroke="#E1E1E1"
      {...props}
      className='absolute bottom-0 -z-10'
    >
      <Path d="M340.733 101.906c-14.858-43.445-42.689-78.28-80.482-100.739a8.319 8.319 0 00-8.498 0c-19.756 11.74-36.871 26.924-50.872 45.131a8.318 8.318 0 0013.187 10.141C225.763 41.231 239.852 28.345 256 18.081c70.17 44.622 90.592 132.352 74.192 197.299a8.317 8.317 0 008.072 10.355 8.322 8.322 0 008.059-6.284c9.342-36.998 7.304-79.842-5.59-117.545z" />
      <Path d="M364.61 329.128H264.319v-23.445c28.852-2.951 53.286-21.328 69.421-52.513a8.319 8.319 0 00-3.565-11.21 8.32 8.32 0 00-11.209 3.565c-13.072 25.265-32.262 40.401-54.646 43.393v-32.355l32.466-21.182a8.316 8.316 0 002.421-11.51 8.317 8.317 0 00-11.51-2.421L264.32 236.7v-35.224l32.466-21.182a8.317 8.317 0 002.421-11.51 8.316 8.316 0 00-11.51-2.421l-23.377 15.251v-35.225l32.466-21.182a8.317 8.317 0 002.421-11.51 8.316 8.316 0 00-11.51-2.421l-23.377 15.251V87.031a8.318 8.318 0 00-16.635 0v39.494l-23.377-15.251a8.316 8.316 0 00-11.51 2.421 8.316 8.316 0 002.421 11.51l32.466 21.182v35.225l-23.377-15.251a8.316 8.316 0 00-11.51 2.421 8.316 8.316 0 002.421 11.51l32.466 21.182v35.225l-23.377-15.251a8.317 8.317 0 00-11.51 2.421 8.316 8.316 0 002.421 11.51l32.466 21.182v32.372c-15.7-2.07-35.096-10.707-50.828-36.592-12.837-21.123-20.072-49.302-20.372-79.342-.32-32.027 7.04-63.466 21.286-90.918a8.318 8.318 0 10-14.766-7.662c-15.495 29.861-23.502 64.007-23.155 98.747.331 32.986 8.424 64.173 22.791 87.815 16.011 26.346 38.879 41.977 65.043 44.702v23.445h-43.707a8.318 8.318 0 100 16.635H364.61a6.868 6.868 0 016.86 6.86v24.162a6.867 6.867 0 01-6.86 6.86H308.459a8.318 8.318 0 00-8.317 8.318 8.318 8.318 0 008.317 8.318h34.949l-10.47 72.897c-1.818 12.65-12.824 22.191-25.606 22.191H204.674c-12.781 0-23.79-9.541-25.607-22.191l-10.47-72.896h108.812a8.318 8.318 0 008.317-8.318 8.318 8.318 0 00-8.317-8.318H147.392a6.868 6.868 0 01-6.861-6.86v-24.162a6.869 6.869 0 016.861-6.862h25.531c4.593 0 8.317-3.724 8.317-8.318s-3.724-8.318-8.317-8.318h-25.531c-12.955 0-23.496 10.54-23.496 23.495v24.162c0 12.955 10.54 23.495 23.496 23.495h4.396l10.81 75.261c2.985 20.787 21.072 36.462 42.073 36.462H307.33c21 0 39.087-15.675 42.072-36.461l10.809-75.261h4.397c12.955 0 23.495-10.54 23.495-23.495v-24.162c.002-12.954-10.538-23.494-23.493-23.494z" />
    </Svg>
        </View>
        
        <Image className='h-full w-full absolute bottom-0 -z-20 rotate-180' source={require('../assets/images/background.png')}/>
        
          
          </>
          
        ) :(
          <>
           <View className='flex items-center justify-center h-full'>
          <Text className='text-white text-lg  font-bold pt-20'>ไม่มีสินค้าในตระกร้า</Text>
          
        </View>
         <View className='flex w-full items-end -z-5'>
        <Svg
      fill="#E1E1E1"
      height="111px"
      width="111px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
      stroke="#E1E1E1"
      {...props}
      className='absolute bottom-12 -z-10'
    >
      <Path d="M340.733 101.906c-14.858-43.445-42.689-78.28-80.482-100.739a8.319 8.319 0 00-8.498 0c-19.756 11.74-36.871 26.924-50.872 45.131a8.318 8.318 0 0013.187 10.141C225.763 41.231 239.852 28.345 256 18.081c70.17 44.622 90.592 132.352 74.192 197.299a8.317 8.317 0 008.072 10.355 8.322 8.322 0 008.059-6.284c9.342-36.998 7.304-79.842-5.59-117.545z" />
      <Path d="M364.61 329.128H264.319v-23.445c28.852-2.951 53.286-21.328 69.421-52.513a8.319 8.319 0 00-3.565-11.21 8.32 8.32 0 00-11.209 3.565c-13.072 25.265-32.262 40.401-54.646 43.393v-32.355l32.466-21.182a8.316 8.316 0 002.421-11.51 8.317 8.317 0 00-11.51-2.421L264.32 236.7v-35.224l32.466-21.182a8.317 8.317 0 002.421-11.51 8.316 8.316 0 00-11.51-2.421l-23.377 15.251v-35.225l32.466-21.182a8.317 8.317 0 002.421-11.51 8.316 8.316 0 00-11.51-2.421l-23.377 15.251V87.031a8.318 8.318 0 00-16.635 0v39.494l-23.377-15.251a8.316 8.316 0 00-11.51 2.421 8.316 8.316 0 002.421 11.51l32.466 21.182v35.225l-23.377-15.251a8.316 8.316 0 00-11.51 2.421 8.316 8.316 0 002.421 11.51l32.466 21.182v35.225l-23.377-15.251a8.317 8.317 0 00-11.51 2.421 8.316 8.316 0 002.421 11.51l32.466 21.182v32.372c-15.7-2.07-35.096-10.707-50.828-36.592-12.837-21.123-20.072-49.302-20.372-79.342-.32-32.027 7.04-63.466 21.286-90.918a8.318 8.318 0 10-14.766-7.662c-15.495 29.861-23.502 64.007-23.155 98.747.331 32.986 8.424 64.173 22.791 87.815 16.011 26.346 38.879 41.977 65.043 44.702v23.445h-43.707a8.318 8.318 0 100 16.635H364.61a6.868 6.868 0 016.86 6.86v24.162a6.867 6.867 0 01-6.86 6.86H308.459a8.318 8.318 0 00-8.317 8.318 8.318 8.318 0 008.317 8.318h34.949l-10.47 72.897c-1.818 12.65-12.824 22.191-25.606 22.191H204.674c-12.781 0-23.79-9.541-25.607-22.191l-10.47-72.896h108.812a8.318 8.318 0 008.317-8.318 8.318 8.318 0 00-8.317-8.318H147.392a6.868 6.868 0 01-6.861-6.86v-24.162a6.869 6.869 0 016.861-6.862h25.531c4.593 0 8.317-3.724 8.317-8.318s-3.724-8.318-8.317-8.318h-25.531c-12.955 0-23.496 10.54-23.496 23.495v24.162c0 12.955 10.54 23.495 23.496 23.495h4.396l10.81 75.261c2.985 20.787 21.072 36.462 42.073 36.462H307.33c21 0 39.087-15.675 42.072-36.461l10.809-75.261h4.397c12.955 0 23.495-10.54 23.495-23.495v-24.162c.002-12.954-10.538-23.494-23.493-23.494z" />
    </Svg>
        </View>
        
        <Image className='h-full w-full absolute bottom-0 -z-20 rotate-180' source={require('../assets/images/background.png')}/>
          
          
          </>
         
        )
       
       
      )}
      
    </View>
  )
}
