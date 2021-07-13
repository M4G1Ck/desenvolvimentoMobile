import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import Header from "../../components/header";
import CardProduct from "../../components/cardProduct";

import { Container } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {

  const [productsLists, setProductsLists] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const handleListProduct = async () => {

        try {
          if (isActive) {
            const response = await api.get('/produto');
            const list = response.data;

            setProductsLists(list);
          }
        } catch (error) {
          alert('Erro ao Carregar');
        }
      };
      handleListProduct();
      return () => {
        isActive = false;
      }
    }, [])
  );

  return (
    <>
      <Header />
      <Container>
        <FlatList data={productsLists} keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Update', { id: item.id, prod: item })} >
              <CardProduct fotoLink={item.fotoLink} nome={item.nome}
              valor={item.valor} descricao={item.descricao} />
            </TouchableOpacity>
          )} />
      </Container>
    </>
  );
};

export default Home;