import React from "react";
import {createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import Home from "./screens/home";
import Update from "./screens/updateProduct";
import AddProducts from "./screens/Addproducts";
import Login from "./screens/Login"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Update" component={Update}/>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  
  return (
    
    <Tab.Navigator
      screenOptions={{headerShown: false }}
      inicialRouteName="Home"
      tabBarOptions={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6ab982",
          height: 50,
          paddingTop: 10,
          paddingBottom: 2,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold"
        },
        activeTintColor: "#d6d6d6",
        inactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Logout"
        component={Login}
        options={{
          tabBarIcon: ({color}) => {
            return <MaterialCommunityIcons name="logout" size={24} color= {color} />
          },tabBarVisible:false
        }}
        
      />
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name="home-assistant" size={28} color={color}/>;
          },
        }}
      />
      <Tab.Screen
        name="Incluir Produtos"
        component={AddProducts}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <MaterialIcons name="playlist-add" size={28} color = {color}/>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Navigation;