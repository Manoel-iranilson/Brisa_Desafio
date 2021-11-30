import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Btn, Container, ViewBtn, Nome, TypesView, BtnDetails } from "./Styles";

import { ColStyle, RowStyle } from "../../components/layout";
import { ListPokemon } from "../../services/Pokemon";
import CardPokemon from "../../components/CardPokemon";

export default function AllScreen() {
  const [selected, setSelected] = useState(1);
  const [listFilter, SetlistFilter] = useState([
    { name: "Todos", iShow: true },
    { name: "Fire", iShow: false },
    { name: "Eletric", iShow: false },
    { name: "water", iShow: false },
  ]);
  const [listPockemon, setListPokemon] = useState([]);
  async function FilterPokemon() {
    try {
      const res = await ListPokemon();
      console.log("res: ", res.results[0].name);
      setListPokemon(res.results);
    } catch (error) {}
  }

  useEffect(() => {
    FilterPokemon();
  }, []);

  return (
    <Container>
      <ViewBtn>
        {listFilter.map((el, index) => (
          <ColStyle width="50%" key={index} style={{ padding: 10 }}>
            <Btn
              borderColor={
                selected === index + 1 || selected === 0 ? "#FFCB05" : "#6B6868"
              }
              colorButton={
                selected === index + 1 || selected === 0 ? "#FFCB05" : "white"
              }
              onPress={() => setSelected(index + 1)}
            >
              <Text>{el.name}</Text>
            </Btn>
          </ColStyle>
        ))}
      </ViewBtn>
      <ScrollView>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 5,
            paddingRight: 15,
          }}
        >
          {listPockemon.map((el, index) => (
            <ColStyle width="50%" key={index} style={{ paddingLeft: 10 }}>
              <CardPokemon name={el.name} />
            </ColStyle>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
}
