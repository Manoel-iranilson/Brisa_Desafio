import Api from "./Api";
export async function ListPokemon() {
  const res = await Api.get("pokemon?limit=20&offset=200");
  return res.data;
}

export async function FilterPokemon() {
  const res = await Api.get(`type?limit=20&offset=200`);
  return res.data;
}
