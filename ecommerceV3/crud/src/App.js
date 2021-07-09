/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ProductList from './views/ProductList'
import ProductForm from './views/ProductForm'
import { Button, Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import products from './service/Api'

const Stack =createStackNavigator()

export default props => {
    return (
        <View>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ProductList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="ProductList"
                    component={ProductList}
                    options={({ navigation }) => {
                        return {
                            title: "ZeroCommerce",
                            headerRight: () => (
                                <Button
                                    onPress = {() => navigation.navigate("ProductForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white"/>}
                                />
                            )
                        }
                    }}
                />
                 <Stack.Screen
                    name="ProductForm"
                    component={ProductForm}
                    options={{
                        title: 'Produtos'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        <FlatList
            keyExtractor={product => product.id.toString()}
            data={products}
        />
        </View>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor:'#5F1140'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}