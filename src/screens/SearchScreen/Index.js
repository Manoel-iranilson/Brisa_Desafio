import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Container, Input, ViewInput } from "./Styles";
import Search from "../../assets/Search";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <ViewInput>
        <Input
          placeholder="Procure por pokémons"
          autoCorrect={false}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <View style={{ marginTop: 16, marginBottom: 17 }}>
          <Search />
        </View>
      </ViewInput>
    </Container>
  );
}
