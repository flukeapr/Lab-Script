import { Image, StyleSheet, Platform,View, Text,StatusBar,ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductCardAPI from '@/components/ProductCardAPI';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <GestureHandlerRootView style={styles.container}>
      
      <Text style={styles.title}>LAB 4 คำสั่ง 1</Text>
       <ProductCardAPI></ProductCardAPI>
      
     
      
      
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
    backgroundColor:'blue',
    color:'white',
    padding:10,
    borderRadius:5,
    width:300
  }
});
