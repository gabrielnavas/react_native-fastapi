import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import CreateProduct from './src/screen/CreateProduct';
import SearchProduct from './src/screen/SearchProduct';
import UpdateProduct from './src/screen/UpdateProduct';
import SignUp from './src/screen/SignUp';
import SignIn from './src/screen/SignIn';

const DrawerApp = createDrawerNavigator();
const StackSearchProduct = createStackNavigator();
const StackAuthentication = createStackNavigator();

const SearchProductStack = () => {
  return (
    <StackSearchProduct.Navigator>
      <StackSearchProduct.Screen name="SearchProductScreen" component={SearchProduct} options={{
        headerTitle: 'Procurar produtos',
      }}/>
      <StackSearchProduct.Screen name="UpdateProduct" component={UpdateProduct} options={{
        headerTitle: 'Atualizar o produto',
      }}/>
    </StackSearchProduct.Navigator>
  );
}

function ProductDrawer() {
  return (
    <DrawerApp.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: 'lightgray',
        borderColor: 'black',
        borderRadius: 10,
      },
      headerShown: false,
    }}>
      <DrawerApp.Screen name="CreateProduct" component={CreateProduct}/>
      <DrawerApp.Screen name="SearchProduct" component={SearchProductStack} 
    />
    </DrawerApp.Navigator>
  );
}


const AuthenticationStack = () => {
  return (
    <StackAuthentication.Navigator>
      <StackAuthentication.Screen name="SignUp" component={SignUp} options={{
        title: 'Novo usuário',
        headerLeft: () => null
      }} />
      <StackAuthentication.Screen name="SignIn" component={SignIn} options={{
        title: 'Realizar login',
        headerLeft: () => null
      }} />
      <StackAuthentication.Screen name="ProductDrawer" component={ProductDrawer} />
    </StackAuthentication.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthenticationStack />
    </NavigationContainer>
  );
}
