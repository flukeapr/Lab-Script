import { View, Text,StyleSheet,Image, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useUserAuth } from '@/src/context/UseAuthContext';
export default function Login({navigation}:{navigation :any}) {
  const [email ,setEmail] =useState('');
  const [password ,setPassword] =useState('');

  const {Login} = useUserAuth();

  const handleLogin = async ()=>{
    if(!email || ! password){
      Alert.alert('Error','Please enter email and password',[{text:'OK'}])
    }else{
      try {
        await Login(email,password)
        Alert.alert('Success','Login Successfully',[{text:'OK',onPress:()=>navigation.navigate('Main')}])
      } catch (error) {
        console.error(error);
        Alert.alert('Error',`Login Failed ${error}`,[{text:'OK'}])
      }
    }
    
  }
  
  return (
    <GestureHandlerRootView>

   
    <View  className=' w-full h-full bg-white' >
      
      <Image className='h-full w-full absolute' source={require('../assets/images/background.png')}/>
      {/* light */}
      <View className='flex-row justify-around w-full absolute'>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className='h-[225] w-[90]' source={require('../assets/images/light.png')}/>
        <Animated.Image  entering={FadeInUp.delay(400).duration(1000).springify()} className='h-[160] w-[65]' source={require('../assets/images/light.png')}/>

      </View>
      {/* Title and Form */}
      <View className='h-full w-full flex justify-around pt-40 pb-5'>
        {/* Title */}
        <View className='flex items-center'>
            <Animated.Text exiting={FadeInUp.duration(1000).springify()} className='text-white font-bold tracking-wider text-5xl'>Login</Animated.Text>
        </View>
        {/* form */}
        <View className='flex items-center mx-4 space-y-4' >
        <Animated.View entering={FadeInDown.duration(1000).springify()} className='bg-black/5 p-5 rounded-2xl w-full '>
            <TextInput className='text-black ' placeholder='Email' placeholderTextColor={'gray'} value={email} onChange={(e)=>setEmail(e.nativeEvent.text)}></TextInput>
        </Animated.View>
        <Animated.View  entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-5 rounded-2xl w-full '>
            <TextInput className='text-black ' placeholder='Password' secureTextEntry={true} placeholderTextColor={'gray'} value={password} onChange={(e)=>setPassword(e.nativeEvent.text)}></TextInput>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full '>
            <TouchableOpacity className='w-full bg-sky-400 p-3  rounded-2xl mb-3' onPress={handleLogin}>
              <Text className='text-xl font-bold text-white text-center'>Login</Text>
            </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className='flex-row justify-center'>
          <Text>Don't have an account</Text>
          <TouchableOpacity onPress={()=> navigation.push('Register')}>
            <Text className='text-sky-600'>SignUp</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()}>
          <TouchableOpacity onPress={()=>navigation.push('Forget')}>
            <Text>Reset Password</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      </View>
     
    </View>
    </GestureHandlerRootView>
  )
}