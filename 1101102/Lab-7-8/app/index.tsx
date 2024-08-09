import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "@/screens/Login";
import Register from "@/screens/Register";
import Forget from "@/screens/Forget";
import Main from "@/navigation/Main";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { UserAuthContextProvider } from "@/src/context/UseAuthContext";


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <UserAuthContextProvider>

      
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </UserAuthContextProvider>
    </ApplicationProvider>
  );
}
