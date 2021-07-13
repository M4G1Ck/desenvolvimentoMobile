import React, { useContext } from "react";
import { Picker } from '@react-native-community/picker';

import prodContext from '../../context'
import notFound from "../../../assets/images/image-not-found.jpg";

import {
  ContainerTop,
  ContainerBot,
  ContainerImg,
  ContainerStock,
  ContainerInf,
  ContainerName,
  ContainerPrice,
  ContainerDesc,
  ContainerCategory,
  Input,
  InputDesc,
} from "./style";

const AddProductCard = () => {

  const { produto, setProduto, categorias } = useContext(prodContext);

  const safeParseInt = (string) => {

    const value = parseInt(string);
    return isNaN(value) ? 0 : value
  }

  const safeParseFloat = (string) => {

    const value = parseFloat(string);
    return isNaN(value) ? 0 : value
  }

  return (
    <>
      <ContainerTop>
        <ContainerImg source={notFound}></ContainerImg>
        <ContainerInf>
          <ContainerName>
            <Input placeholder="Nome" defaultValue={produto.nome}
              onChangeText={text => setProduto({ ...produto, nome: text })} />
          </ContainerName>
          <ContainerPrice>
            <Input placeholder="Valor" defaultValue={produto?.valor.toString()}
              keyboardType='numeric'
              maxLength={10}
              onChangeText={text => setProduto({ ...produto, valor: safeParseFloat(text) })} />
          </ContainerPrice>
          <ContainerDesc>
            <InputDesc placeholder="Descrição" value={produto?.descricao}
              onChangeText={text => setProduto({ ...produto, descricao: text })} />
          </ContainerDesc>
        </ContainerInf>
      </ContainerTop>
      <ContainerBot>
        <ContainerStock>
          <Input placeholder="Estoque" defaultValue={produto?.qtdEstoque.toString()}
            keyboardType='numeric'
            onChangeText={text => setProduto({...produto, qtdEstoque: safeParseInt(text) })} />
        </ContainerStock>
        <ContainerCategory>
          <Picker selectedValue={produto.idCategoria}
            onValueChange={itemValue => setProduto({...produto, idCategoria: itemValue })} >
             <Picker.Item label="Selecione uma categoria" value={null} disabled />
                {categorias.map(cat => {
              return <Picker.Item key={cat.id} label={cat.nome} value={cat.id}/>
            })}
          </Picker>
        </ContainerCategory>
      </ContainerBot>
    </>
  );
};

export default AddProductCard;