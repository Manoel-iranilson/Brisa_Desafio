import React, { useContext, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Container,
  InputTxt,
  LogoImage,
  LogoView,
  TxtCenter,
  ViewCenter,
  ViewInput,
  BtnEnter,
  TxtEnter,
  ImageBot,
} from "./Styles";
import { normal } from "@expo-google-fonts/poppins";
import { UseAuth } from "../../contexts/Auth";
import signIn from "../../services/SignIn";

function Index() {
  const { handleSingIn } = UseAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeData() {
    if (email !== "" && password !== "") {
      handleSingIn(email, password);
    } else {
      Alert.alert("Ops!!", "Dados Invalidos,Verifique-os");
    }
  }
  const keyboardVerticalOffset = Platform.OS === "ios" ? 50 : 25;

  return (
    <Container>
      <LogoView>
        <LogoImage source={require("../../assets/Images/PokemonLogo.jpg")} />
      </LogoView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ViewCenter>
          <TxtCenter>Comece a coletar pokémons!</TxtCenter>
        </ViewCenter>

        <ViewInput>
          <InputTxt
            placeholder="Email"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputTxt
            placeholder="Senha"
            autoCorrect={false}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </ViewInput>
        <View>
          <BtnEnter onPress={() => onChangeData()}>
            <TxtEnter>Entrar</TxtEnter>
          </BtnEnter>
        </View>
      </KeyboardAvoidingView>
      <View style={{ marginTop: 40, marginRight: 10 }}>
        <ImageBot source={require("../../assets/Images/Group75.png")} />
      </View>
    </Container>
  );
}

export default Index;
