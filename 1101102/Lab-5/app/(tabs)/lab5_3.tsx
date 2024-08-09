import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Platform,StatusBar,Alert, Button } from 'react-native';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { useState,useEffect,useRef } from 'react';
import * as SecureStore from 'expo-secure-store';
import ActionSheet from 'react-native-actions-sheet';
import { ActionSheetRef } from 'react-native-actions-sheet';
interface Data {
  id:string;
  pic:string;
  name: string;
  price: string;
  image: string;
  stock: string;
}

export default function TabTwoScreen() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Data[]>([]);
  const [endList, setEndList] = useState(false);
  const [filter,setFilter] = useState("");
  const [key, onChangeKey] = useState('');
  const [value, onChangeValue] = useState('');
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [local, setLocal]= useState([])
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

  const handleAlert = async (item: Data) => {
    Alert.alert("Alert", item.name, [{ text: 'OK' }]);
    // await SecureStore.deleteItemAsync('Local');
    try {
      const res = await SecureStore.getItemAsync('Local53');
      let prodList = [];
      if (res === undefined || res === null) {
        prodList = [{ id: item.id, name: item.name }];
      } else {
        prodList = JSON.parse(res);
        prodList.push({ id: item.id, name: item.name });
      }

      await SecureStore.setItemAsync('Local53', JSON.stringify(prodList));
    } catch (error) {
      console.error(error);
    }
  };


  const getLocal=async ()=> {
    try {
      const res = await SecureStore.getItemAsync('Local53');
      if (res !== null){
        setLocal(JSON.parse(res))
      }else{
        setLocal([])
      }
    } catch (error) {
      console.error(error);
    }
  
    
  }
  const clearLocal = async ()=>{
    await SecureStore.deleteItemAsync('Local53').then(()=>{
        Alert.alert('Alert','ลบข้อมูลใน Local Store แล้ว',[{text:'OK'}])
        getLocal();
    })
  }
  useEffect(()=>{
     
     getLocal();
   
  },[local])
  return (
    <>
    <View style={styles.container}>
    <Text style={styles.title}>LAB 5 คำสั่ง 3</Text>
        
      <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-between',padding:5,alignItems:"center" }}>
      
        <TouchableOpacity style={styles.button} onPress={() => setFilter("ALL")}>
          <Text>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setFilter("IN STOCK")}>
          <Text>IN STOCK</Text>
        </TouchableOpacity>
        
      </View>
      
      <View style={{flex:3,alignItems:"center"}}>
      <ScrollView>
        {products.filter((prod:Data)=>{
          if(filter==="ALL"){
            return prod
          }else{
            return prod.stock !== "0"
          }
        }).map((item:Data) => (
          <TouchableOpacity key={item.id} onPress={()=>handleAlert(item)}>
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
      <View style={{flex:2}}>
      <View style={styles.actionSheet}>
        <Button title='CLEAR' onPress={()=> clearLocal()}/>
      
      {local.length > 0 ? (
        local.map((item:Data)=>
            <ScrollView style={styles.scrollViewActionSheet}>
            <View  key={item.id}style={styles.viewAction}>
            <Text numberOfLines={1}>{item.name}</Text>
            </View>
            </ScrollView>
       
       
        )
      ):(
        <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
            <Text style={{fontSize:18,color:'red',fontWeight:'bold'}}>ไม่มีข้อมูลในLocal Store</Text>
        </View>
      
      )}
      
      </View>
      </View>
     
      
    </View>
    
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B5',
   
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
    width: '100%',
    
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
    width: 150,
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSheet:{
    width:'100%',
    height:300,
    backgroundColor:'white',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  scrollViewActionSheet:{
    height:150,
    padding:10
  },
  viewAction:{
    backgroundColor: '#C5C5C5',
    padding:10,
    borderRadius:4,
    margin:2
  },
  
});
