/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";

import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import productService from "../service/productService";
import ProductContext from "../context/ProductContext";
import { StyleSheet } from "react-native";

export default props => {

  const { reload, setReload } = useContext(ProductContext);
  const [clientList, setClientList] = useState([]);


  useEffect(() => {
    productService.getAllProdutos().then(res => {
      setClientList(res.data.Dados);
    }).catch(e => {
      console.log("Não foi possível carregar a lista de produtos", e);
    });
  }, [reload]);

  function deleteProduto(id) {
    productService.deleteProduto(id).then(res => {
      console.log(res.data);
      setReload(!reload);
    }).catch(e => {
      console.log("Não foi possível deletar o produto", e);
    });
  }

  function confirmProdutoDeletion(produto) {
    Alert.alert("Excluir Produto", "Deseja excluir o produto?", [
      {
        text: "Sim",
        onPress() {
          console.warn("delete" + produto.id);
          deleteProduto(produto.id);
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  function getActions(produto) {

    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("ProductForm", produto)}
          type="clear"
          icon={<Icon name={"edit"} size={25} color={"purple"} />}
        />
        <Button
          onPress={() => confirmProdutoDeletion(produto)}
          type="clear"
          icon={<Icon name={"delete"} size={25} color={"red"} />}
        />
      </>
    );
  }


  function getClienteItem({ item: cliente }) {
    return (
      <ListItem
        key={cliente.id}
        bottomDivider
        onPress={() => props.navigation.navigate("ClientData", cliente.id)}
      >
        <ListItem.Content style={Style.content}>
          <Avatar size={"medium"} rounded source={{ uri: cliente.urlImagem }} />
          <View style={Style.titulos}>
            <ListItem.Title style={Style.titulo}>{cliente.nome} {cliente.sobrenome}</ListItem.Title>
            <ListItem.Subtitle style={Style.subtitulo}>{cliente.email}</ListItem.Subtitle>
          </View>



          <>{getActions(cliente)}</>
        </ListItem.Content>
      </ListItem>
    );
  }


  return (
    <
      View>
      < FlatList
        keyExtractor={cliente => cliente.id.toString()}
        data={clientList}
        renderItem={getClienteItem}
      />
    </View>
  );
}

const Style = StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: "row"
    },
    titulos: {
      flex: 1,
      flexDirection: "column",
      paddingLeft: 15,
      paddingTop: 5
    },
    titulo: {
      fontSize: 15
    },
    subtitulo: {
      fontSize: 12
    }
  });