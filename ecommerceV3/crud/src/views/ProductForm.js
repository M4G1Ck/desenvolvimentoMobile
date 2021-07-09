/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";
import productService from "../services/productService";
import ProductContext from "../context/ProductContext";
import { StyleSheet } from "react-native";

export default ({ route, navigation }) => {

  const { reload, setReload } = useContext(ProductContext);
  const [produto, setProduto] = useState(route.params ? route.params : {});
  const [isPost, setIsPost] = useState(!route.params);


  function postProdutos(produto) {
    productService.postProduto(produto).then(res => {
      console.log(res.data);
      setReload(!reload);
    }).catch(e => {
      console.log("Não foi possível cadastrar o produto", e);
    });
  }

  function putProduto(id, produto) {
    productService.putClient(id, produto).then(res => {
      console.log(res.data);
      setReload(!reload);
    }).catch(e => {
      console.log("Não foi possível atualizar o produto", e);
    });
}

return (
    <ScrollView style={Style.form}>
      <Text>Nome</Text>
      <TextInput
        style={Style.input}
        onChangeText={nome => setProduto({ ...produto, nome })}
        placeholder={"Informe o nome"}
        value={produto.nome}
      />
      </ScrollView>
  );
}

const Style = StyleSheet.create({
    form: {
      padding: 12,
    },
    input: {
      height: 40,
      borderColor: "purple",
      borderWidth: 1,
      marginBottom: 30,
    },
    button: {
      paddingBottom: 40,
    },
  });