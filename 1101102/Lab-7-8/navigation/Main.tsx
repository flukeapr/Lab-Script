import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Cart from '@/screens/Cart';
import Profile from '@/screens/Profile';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function Main() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false ,tabBarStyle:{
      height:70,
      backgroundColor:'white'
    }}}>
        <Tab.Screen name='Home' component={Home} options={{tabBarIcon:({focused})=>(
          
            <View>
                <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#0284c7" : "white",
                padding: 7,
                borderRadius: 15,
              }}
            >
              <Ionicons
                name="home"
                color={focused ? "#fff" : '#0284c7'}
                size={35}/>
            </View>
            </View>
          
        ),headerShown:false}} />
        <Tab.Screen name='Cart' component={Cart}  options={{tabBarIcon:({focused})=>(
          
            <View>
                <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#0284c7" : "white",
                padding: 7,
                borderRadius: 15,
              }}
            >
              <Ionicons
                name="cart"
                color={focused ? "#fff" : '#0284c7'}
                size={35}/>
            </View>
            </View>
          
        ),headerShown:false}}/>
        <Tab.Screen name='Profile' component={Profile}  options={{tabBarIcon:({focused})=>(
          
            <View>
                <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#0284c7" : "white",
                padding: 7,
                borderRadius: 15,
              }}
            >
              <Ionicons
                name="person"
                color={focused ? "#fff" : '#0284c7'}
                size={35}/>
            </View>
            </View>
          
        ),headerShown:false}}/>
    </Tab.Navigator>
  )
}