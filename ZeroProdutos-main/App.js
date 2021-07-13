import "react-native-gesture-handler";
import React from "react";
import{NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes'
import { StatusBar } from "react-native";

const Main = () => {
  return (
    <>
      <StatusBar hidden={true}/>
       <NavigationContainer>
        <Routes/>
      </NavigationContainer> 
    </>
  );
};

export default Main;
