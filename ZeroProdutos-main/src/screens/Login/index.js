
import React, { useState } from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';

import {
  Container,
  ContainerLog,
  TextHeader,
  TextLog,
  ContainerBody,
  ContainerView,
  Text,
  Button,
} from './style'
import Usuario from '../../services/database'

import { criaTabela, funcao } from '../../services/database'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  criaTabela();
  funcao();
  const validacao = async () => {

    const id = 0
    const usuario = await Usuario.find(id)
    if (login == usuario.login && password == usuario.password) {
      alert("Bem-Vindo a ZeroProdutos")
      navigation.navigate('Home')
      setLogin('');
      setPassword('')

    } else {
      alert("Digite seus dados!")
    }

  }

  return (

    <ImageBackground source={require('../../../assets/images/abacateNaMao.jpg')} resizeMode="cover" style={{flex: 1, justifyContent: "center" }}>
       <Container>
        <ContainerLog>
          <TextHeader>Usuário:</TextHeader>
          <TextLog value={login} onChangeText={text => setLogin(text)}></TextLog>
          <TextHeader>Senha:</TextHeader>
          <TextLog value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}></TextLog>
          <TouchableOpacity onPress={validacao}>
            <ContainerView>
              <Button>
                <Text style={{ fontSize: 20, color: 'white' }}> Entrar</Text>
              </Button>
            </ContainerView>
          </TouchableOpacity>
        </ContainerLog>
      </Container>
    </ImageBackground>
  );
};

export default Login;