import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Platform,StatusBar,Alert } from 'react-native';
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
    // await SecureStore.deleteItemAsync('Local5-2');
    try {
      const res = await SecureStore.getItemAsync('Local52');
      let prodList = [];
      if (res === undefined || res === null) {
        prodList = [{ id: item.id, name: item.name }];
      } else {
        prodList = JSON.parse(res);
        prodList.push({ id: item.id, name: item.name });
      }

      await SecureStore.setItemAsync('Local', JSON.stringify(prodList)).then(()=>{
        getLocal();
      })
    } catch (error) {
      console.error(error);
    }
  };

  const handleActionSheet = ()=>{
    actionSheetRef.current?.show();
    getLocal();
  }
  const getLocal=async ()=> {
    try {
      const res = await SecureStore.getItemAsync('Local52');
      if (res !== null){
        setLocal(JSON.parse(res))
      }
    } catch (error) {
      console.error(error);
    }
  
    
  }
  useEffect(()=>{
     
     getLocal();
   
  },[local])
  return (
    <>
    <View style={styles.container}>
    <Text style={styles.title}>LAB 5 คำสั่ง 2</Text>
      <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity style={styles.button} onPress={() => setFilter("ALL")}>
          <Text>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setFilter("IN STOCK")}>
          <Text>IN STOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>handleActionSheet()}>
          <Text>Local</Text>
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
    <ActionSheet ref={actionSheetRef}>
      <View style={styles.actionSheet}>
        <TouchableOpacity style={{display:'flex',alignItems:'flex-end'}} onPress={()=> actionSheetRef.current?.hide()}>
        <Ionicons name='close-circle-outline' size={25}/>

        </TouchableOpacity>
      {local.length > 0 ?(
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
        
    </ActionSheet>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B5',
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
    width: 70,
    margin:10,
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
